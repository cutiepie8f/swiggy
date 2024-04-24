import React from "react";
import '../style/cart.css';
import axios from 'axios';
import queryString from 'query-string';
import navHook from "./nav";

class CartPage extends React.Component{

    constructor(){
        super();
        this.state ={
            product : [],
            productDetails : []
        }
     }
 
     componentDidMount(){
        const q = queryString.parse(window.location.search);
        const { restId } = q;
        console.log(restId);
        console.log(`http://localhost:5500/product/${restId}`)
        axios({
            url : `http://localhost:5500/product/${restId}`,
            method : 'get',
            headers : {'Content-Type': 'application/JSON'}
        })
        .then(res => {
            this.setState({ product : res.data.product, restId});
        })
        .catch((err => console.log(err)));

        axios({
            url : `http://localhost:5500/productDetails/${restId}`,
            method : 'get',
            headers : {'Content-Type': 'application/JSON'}
        })
        .then(res => {
            this.setState({ productDetails : res.data.productDetails});
        })
        .catch((err => console.log(err)));
 
     }

      // Adding number of elements
    addItems = (index, operationType) => {
        var total = 0;
        const items = [...this.state.product];
        const item = items[index];

        if(operationType == 'add'){
            item.qty += 1;
        } else {
            item.qty -= 1;
        }

        items[index] = item;

        items.map((x) => {
            total += x.qty * x.price;
        })
        this.setState({ product: items, subtotal: total })
    }

      
    


    render(){
         const{product, productDetails} = this.state;
         console.log(productDetails);
         return(
            
            <div className="menuSection">
                    <div className="restraunt-name">{productDetails.shop_name}</div>
                <hr className="ruler"/>
                <div className="recommend">Recommended</div>
                {
                                product.map((item, index) =>{
                                    return(
                                        <div className="menuBox">
                                            <div id="sign-outerpart">
                                                <div id="sign-innerpart"></div>
                                            </div>
                                            <div className="menu">
                                                <div className="menu-heading">{item.name}</div>
                                                <div className="menu-price">₹ {item.price}</div>
                                                <div className="menu-detail">{item.detail}</div>
                                            </div>
                                            <div className="menu-image" style={{backgroundImage:`url(${item.img})`}}>
                                            {
                                            item.qty == 0 ? <div className="item_quantity_button" onClick={() => this.addItems(index, 'add')}>
                                                ADD
                                            </div> :
                                            <div className="item_quantity_button">
                                                <button  onClick={() => this.addItems(index, 'sub')} className="cart-button"> - </button>
                                                <span className="qty"> {item.qty} </span>
                                                <button onClick={() => this.addItems(index, 'add')} style={{color: '#61B246'}} className="cart-button"> + </button>
                                            </div>
                                        }
                                            </div>
                                        </div>
                                    )
                                })
                        }

            </div>
                

            
              
           
         )
    }
}

export default navHook(CartPage);

