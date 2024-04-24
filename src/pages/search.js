import React from "react";
import '../style/search.css';
import { Swiper, SwiperSlide } from 'swiper/react';
// Import Swiper styles
import 'swiper/css';
import 'swiper/css/navigation';
// import required modules
import { Navigation } from 'swiper/modules';
import axios from 'axios';

class Search extends React.Component{

    constructor(){
        super();
        this.state ={
           cuisine : [],
           inputText: undefined, 
            suggestion: []
        }
     }
 
     componentDidMount(){
               
         //cuisine API
         //cuisine API
        axios({
            url : "http://localhost:5500/cuisine",
            method : 'get',
            headers : {'Content-Type': 'application/JSON'}
        })
        .then(res => {
            this.setState({ cuisine : res.data.cuisine});
        })
        .catch((err => console.log(err)));

        //product API
         axios({
             url : "http://localhost:5500/product",
             method : 'get',
             headers : {'Content-Type': 'application/JSON'}
         })
         .then(res => {
             this.setState({ product : res.data.product});
         })
         .catch((err => console.log(err)));
 
     }
      
     searchCusine = (e) => {
        //sessionStorage.setState('location', location);
        const {product} = this.state;
            
        const inputText = e.target.value;
            console.log(inputText);
            // cuisine.filter(a => console.log(a));
    
            let suggestion = [];
            suggestion = product.filter(item => item.shop_name.toLowerCase().includes(inputText.toLowerCase()));
            this.setState({ inputText, suggestion });
            console.log(suggestion);
    
    }
    
    showSuggestion = () => {
        const { inputText, suggestion } = this.state;
    
        if(suggestion.length == 0 && inputText == undefined){
            return null;
        }
    
        if(suggestion.length > 0 && inputText == ''){
            return null;
        }
    
        if(suggestion.length == 0 && inputText){
            return (
                <li className="textColor">No Results Found !!</li>
            )
        }
    
        return(
            suggestion.map((item, index) => (
                <li key={index} className="suggList">
                    <img src={ item.img } className="suggImg" width={"60px"} height={"60px"} />         
                    <span className="suggName">{item.shop_name}</span>   
                </li>
            ))
        )
    }


    render(){
        const{cuisine} = this.state;
         return(
            
            // <!--search dropdown-->
            <div className="search">
                  <div>
                  <input type="text" placeholder="Search for restraunts and foods"  class="search-bar" onChange={this.searchCusine}/>
                  <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" fill="currentColor" class="bi bi-search " viewBox="0 0 16 16">
                                    <path d="M11.742 10.344a6.5 6.5 0 1 0-1.397 1.398h-.001q.044.06.098.115l3.85 3.85a1 1 0 0 0 1.415-1.414l-3.85-3.85a1 1 0 0 0-.115-.1zM12 6.5a5.5 5.5 0 1 1-11 0 5.5 5.5 0 0 1 11 0"/>
                  </svg>

                  <ul className="suggestionBox">{this.showSuggestion()}</ul>
                  </div>

                  <div class="image-section">
                        <h2 class="search-heading">Popular Cuisines</h2>
                        <div className="cuisine-slider-search">
                <Swiper
                        slidesPerView={10}
                        spaceBetween={7}
                        modules={[Navigation]}
                        navigation
                        className="mySwiperpart"
                    >
                        {
                        cuisine.map((data) => {
                            return<>
                            
                            <SwiperSlide>
                                <div >
                                       <img src={data.img} class="img-fluid"/>
                                       
                                 </div>
                            </SwiperSlide>
                            </>
                        })}
                            
                    </Swiper>
                </div>
                    </div>
            </div>
            
              
           
         )
    }
}

export default Search;

