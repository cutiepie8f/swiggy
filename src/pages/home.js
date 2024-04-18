import React from "react";
import '../style/home.css';
import { Swiper, SwiperSlide } from 'swiper/react';
// Import Swiper styles
import 'swiper/css';
import 'swiper/css/navigation';
// import required modules
import { Navigation } from 'swiper/modules';
import axios from 'axios';

class HomePage extends React.Component{
    
    constructor(){
       super();
       this.state ={
          cuisine : [],
          product : []
       }
    }

    componentDidMount(){
              
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

    render(){
        const{cuisine,product} = this.state;
        console.log(product);
         return(
        <div>   
            <div className="product">
                <div className="heading-1">What's on your mind? </div>
                <div className="cuisine-slider-1">
                <Swiper
                        slidesPerView={7}
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

                <hr />
                <div className="heading-2">Top restaurant chains in Pune</div>

                <div className="slider-2">
                <Swiper
                        slidesPerView={4}
                        spaceBetween={10}
                        modules={[Navigation]}
                        navigation
                        className="mySwiperpart"
                    >
                        {
                        product.map((data) => {
                            return<>
                            
                            <SwiperSlide>
                            <div  className="cardsPart">
                                <div class="card" style={{backgroundImage:`url(${data.img})`}}>
                                        <p class="offer-text">{data.offer}</p>
                                        <div class="card-image card-img-top" ></div>
                                        <div class="card-body">
                                        <h5 class="card-title cardtext-1">{data.shop_name}</h5>
                                        <img src="../images/stars_FILL0_wght400_GRAD0_opsz24.svg" className="rating-icon" alt="" />
                                        <p class="card-text cardtext-3" >{data.rating}</p>
                                        <p class="card-text cardtext-2" >{data.address}</p>
                                        </div>
                                    </div>
                                </div>
                            </SwiperSlide>
                            </>
                        })}
                            
                    </Swiper>
                </div>
                 <hr style={{top : "0"}} />
                 <div className="heading-3">Restaurants with online food delivery </div>

                 <div className="sortingButton">
                   <a href="#"><button type="button" class="btn sorting-button button-Filternav">Filter</button>
                    <img src="../images/filter.svg" className="filter-icon" alt="" />
                  </a>
                   <div class="btn-group ms-2">
                    <button type="button" class="btn btn-light dropdown-toggle sorting-button button-nav" data-bs-toggle="dropdown" aria-expanded="false">
                      Sort By
                    </button>
                  </div>
                   <a href="#"><button type="button" class="btn btn-outline-secondary sorting-button ms-2 button-nav">Fast Delivery</button></a>
                   <a href="#"><button type="button" class="btn btn-outline-secondary sorting-button ms-2 button-nav">New on Swiggy</button></a>
                   <a href="#"><button type="button" class="btn btn-outline-secondary sorting-button ms-2 button-nav">Ratings 4.0+</button></a>
                   <a href="#"><button type="button" class="btn btn-outline-secondary sorting-button ms-2 button-nav">Pure Veg</button></a>
                   <a href="#"><button type="button" class="btn btn-outline-secondary sorting-button ms-2 button-nav">Offers</button></a>
                   <a href="#"><button type="button" class="btn btn-outline-secondary sorting-button ms-2 button-nav">Rs.300-Rs.600</button></a>
                   <a href="#"><button type="button" class="btn btn-outline-secondary sorting-button ms-2 button-nav" >Less than Rs.300</button></a>
               </div>
                <div className="slider-2">
                <Swiper
                        slidesPerView={4}
                        spaceBetween={10}
                        modules={[Navigation]}
                        navigation
                        className="mySwiperpart"
                    >
                        {
                        product.map((data) => {
                            return<>
                            
                            <SwiperSlide>
                            <div  className="cardsPart">
                                <div class="card" style={{backgroundImage:`url(${data.img})`}}>
                                        <p class="offer-text">{data.offer}</p>
                                        <div class="card-image card-img-top" ></div>
                                        <div class="card-body">
                                        <h5 class="card-title cardtext-1">{data.shop_name}</h5>
                                        <img src="../images/stars_FILL0_wght400_GRAD0_opsz24.svg" className="rating-icon" alt="" />
                                        <p class="card-text cardtext-3" >{data.rating}</p>
                                        <p class="card-text cardtext-2" >{data.address}</p>
                                        </div>
                                    </div>
                                </div>
                            </SwiperSlide>
                            </>
                        })}
                            
                    </Swiper>
                </div>

                <div className="slider-2">
                <Swiper
                        slidesPerView={4}
                        spaceBetween={10}
                        modules={[Navigation]}
                        navigation
                        className="mySwiperpart"
                    >
                        {
                        product.map((data) => {
                            return<>
                            
                            <SwiperSlide>
                            <div  className="cardsPart">
                                <div class="card" style={{backgroundImage:`url(${data.img})`}}>
                                        <p class="offer-text">{data.offer}</p>
                                        <div class="card-image card-img-top" ></div>
                                        <div class="card-body">
                                        <h5 class="card-title cardtext-1">{data.shop_name}</h5>
                                        <img src="../images/stars_FILL0_wght400_GRAD0_opsz24.svg" className="rating-icon" alt="" />
                                        <p class="card-text cardtext-3" >{data.rating}</p>
                                        <p class="card-text cardtext-2" >{data.address}</p>
                                        </div>
                                    </div>
                                </div>
                            </SwiperSlide>
                            </>
                        })}
                            
                    </Swiper>
                </div>

                <div className="slider-2">
                <Swiper
                        slidesPerView={4}
                        spaceBetween={10}
                        modules={[Navigation]}
                        navigation
                        className="mySwiperpart"
                    >
                        {
                        product.map((data) => {
                            return<>
                            
                            <SwiperSlide>
                            <div  className="cardsPart">
                                <div class="card" style={{backgroundImage:`url(${data.img})`}}>
                                        <p class="offer-text">{data.offer}</p>
                                        <div class="card-image card-img-top" ></div>
                                        <div class="card-body">
                                        <h5 class="card-title cardtext-1">{data.shop_name}</h5>
                                        <img src="../images/stars_FILL0_wght400_GRAD0_opsz24.svg" className="rating-icon" alt="" />
                                        <p class="card-text cardtext-3" >{data.rating}</p>
                                        <p class="card-text cardtext-2" >{data.address}</p>
                                        </div>
                                    </div>
                                </div>
                            </SwiperSlide>
                            </>
                        })}
                            
                    </Swiper>
                </div>
                 <hr  style={{top:"0px"}}/>
                <div class="cards-part3">
                          
                          <div class="heading-4">Best Places to Eat Across Cities</div>
                            
                           <div >
                            <a href="#"><button type="button" class="btn btn-outline-secondary footer-button ">Best Restraunts in Banglore</button></a>
                            <a href="#"><button type="button" class="btn btn-outline-secondary ms-3 footer-button ">Best Restraunts in Pune</button></a>
                            <a href="#"><button type="button" class="btn btn-outline-secondary ms-3 footer-button ">Best Restraunts in Mumbai</button></a>
                            <a href="#"><button type="button" class="btn btn-outline-secondary ms-3 footer-button " >Best Restraunts in Delhi</button></a>
                           </div>
                          
                           <div >
                            <a href="#"><button type="button" class="btn btn-outline-secondary footer-button">Best Restraunts in Hyderadabad</button></a>
                            <a href="#"><button type="button" class="btn btn-outline-secondary ms-3 footer-button">Best Restraunts in Kolkata</button></a>
                            <a href="#"><button type="button" class="btn btn-outline-secondary ms-3 footer-button">Best Restraunts in Chennai</button></a>
                            <a href="#"><button type="button" class="btn btn-outline-secondary ms-3 footer-button" >Best Restraunts in Chandigarh</button></a>
                           </div>
                           
                           <div>
                            <a href="#"><button type="button" class="btn btn-outline-secondary footer-button">Best Restraunts in Ahmedaad</button></a>
                            <a href="#"><button type="button" class="btn btn-outline-secondary ms-3 footer-button">Best Restraunts in Jaipur</button></a>
                            <a href="#"><button type="button" class="btn btn-outline-secondary ms-3 footer-button">Best Restraunts in Nagpur</button></a>
                            <a href="#"><button type="button" class="btn btn-outline-secondary ms-3 footer-button" >Best Restraunts in Bhubaneswar</button></a>
                           </div>
                          
                           <div >
                            <a href="#"><button type="button" class="btn btn-outline-secondary footer-button">Best Restraunts in Kochi</button></a>
                            <a href="#"><button type="button" class="btn btn-outline-secondary ms-3 footer-button">Best Restraunts in Surat</button></a>
                            <a href="#"><button type="button" class="btn btn-outline-secondary ms-3 footer-button">Best Restraunts in Dehradun</button></a>
                            <a href="#"><button type="button" class="btn btn-outline-secondary ms-3 footer-button" >Best Restraunts in Ludhiana</button></a>
                           </div>
                           
                            <div >
                              <a href="#"><button type="button" class="btn btn-outline-secondary footer-button">Best Restraunts in Patnna</button></a>
                              <a href="#"><button type="button" class="btn btn-outline-secondary ms-3 footer-button">Best Restraunts in Mangaluru</button></a>
                              <a href="#"><button type="button" class="btn btn-outline-secondary ms-3 footer-button">Best Restraunts in Bhopal</button></a>
                              <a href="#"><button type="button" class="btn btn-outline-secondary ms-3 footer-button" >Best Restraunts in Gurgaon</button></a>
                             </div>
                             
                           <div >
                            <a href="#"><button type="button" class="btn btn-outline-secondary footer-button">Best Restraunts in Coimbatore</button></a>
                            <a href="#"><button type="button" class="btn btn-outline-secondary ms-3 footer-button">Best Restraunts in Agra</button></a>
                            <a href="#"><button type="button" class="btn btn-outline-secondary ms-3 footer-button">Best Restraunts in Noida</button></a>
                            <a href="#"><button type="button" class="btn btn-outline-secondary ms-3 footer-button" >Best Restraunts in Vijaywada</button></a>
                           </div>
                            
                            <div >
                              <a href="#"><button type="button" class="btn btn-outline-secondary footer-button">Best Restraunts in Guwahati</button></a>
                              <a href="#"><button type="button" class="btn btn-outline-secondary ms-3 footer-button">Best Restraunts in Mysore</button></a>
                              <a href="#"><button type="button" class="btn btn-outline-secondary ms-3 footer-button">Best Restraunts in Pondicherry</button></a>
                              <a href="#"><button type="button" class="btn btn-outline-secondary ms-3 footer-button" >Best Restraunts in...</button></a>
                             </div>
                            
                            <div >
                              <a href="#"><button type="button" class="btn btn-outline-secondary footer-button">Best Restraunts in Ranchi</button></a>
                              <a href="#"><button type="button" class="btn btn-outline-secondary ms-3 footer-button">Best Restraunts in Vizaq</button></a>
                              <a href="#"><button type="button" class="btn btn-outline-secondary ms-3 footer-button">Best Restraunts in Udaipur</button></a>
                              <a href="#"><button type="button" class="btn btn-outline-secondary ms-3 footer-button" >Best Restraunts in Vadodra</button></a>
                             </div>
                             
                             
                             <div class="heading-5" >Best Cuisines Near Me</div>

                             <div >
                              <a href="#"><button type="button" class="btn btn-outline-secondary footer-button">Chinese Restaurants Near Me</button></a>
                              <a href="#"><button type="button" class="btn btn-outline-secondary ms-3 footer-button">South Indian Restaurants Near Me</button></a>
                              <a href="#"><button type="button" class="btn btn-outline-secondary ms-3 footer-button">Indian Restaurants Near Me</button></a>
                              <a href="#"><button type="button" class="btn btn-outline-secondary ms-3 footer-button" >Kerala Restaurants Near Me</button></a>
                             </div>
                             
                             <div >
                              <a href="#"><button type="button" class="btn btn-outline-secondary footer-button">Korean Restaurants Near Me</button></a>
                              <a href="#"><button type="button" class="btn btn-outline-secondary ms-3 footer-button">North Indian Restaurants Near Me</button></a>
                              <a href="#"><button type="button" class="btn btn-outline-secondary ms-3 footer-button">Seafood Restaurants Near Me</button></a>
                              <a href="#"><button type="button" class="btn btn-outline-secondary ms-3 footer-button" >Bengali Restaurants Near Me</button></a>
                             </div>
                            
                             <div >
                              <a href="#"><button type="button" class="btn btn-outline-secondary footer-button">Punjabi Restaurants Near Me</button></a>
                              <a href="#"><button type="button" class="btn btn-outline-secondary ms-3 footer-button">Italian Restaurants Near Me</button></a>
                              <a href="#"><button type="button" class="btn btn-outline-secondary ms-3 footer-button">Andhra Restaurants Near Me</button></a>
                              <a href="#"><button type="button" class="btn btn-outline-secondary ms-3 footer-button" >Biryani Restaurants Near Me</button></a>
                             </div>
                              
                           <div >
                            <a href="#"><button type="button" class="btn btn-outline-secondary footer-button">Japanese Restaurants Near Me</button></a>
                            <a href="#"><button type="button" class="btn btn-outline-secondary ms-3 footer-button">Arabian Restaurants Near Me</button></a>
                            <a href="#"><button type="button" class="btn btn-outline-secondary ms-3 footer-button">Fast Food Restaurants Near Me</button></a>
                            <a href="#"><button type="button" class="btn btn-outline-secondary ms-3 footer-button" >Jain Restaurants Near Me</button></a>
                           </div>
                            
                            <div >
                              <a href="#"><button type="button" class="btn btn-outline-secondary footer-button">Gujarati Restaurants Near Me</button></a>
                              <a href="#"><button type="button" class="btn btn-outline-secondary ms-3 footer-button">Thai Restaurants Near Me</button></a>
                              <a href="#"><button type="button" class="btn btn-outline-secondary ms-3 footer-button">Pizzas Restaurants Near Me</button></a>
                              <a href="#"><button type="button" class="btn btn-outline-secondary ms-3 footer-button" >Asian Restaurants Near Me</button></a>
                             </div>
                             
                           <div >
                            <a href="#"><button type="button" class="btn btn-outline-secondary footer-button">Cafe Restaurants Near Me</button></a>
                            <a href="#"><button type="button" class="btn btn-outline-secondary ms-3 footer-button">Continental Restaurants Near Me</button></a>
                            <a href="#"><button type="button" class="btn btn-outline-secondary ms-3 footer-button">Mexican Restaurants Near Me</button></a>
                            <a href="#"><button type="button" class="btn btn-outline-secondary ms-3 footer-button" >Mughlai Restaurants Near Me</button></a>
                           </div>
                            
                            <div >
                              <a href="#"><button type="button" class="btn btn-outline-secondary footer-button">Sushi Restaurants Near Me</button></a>
                              <a href="#"><button type="button" class="btn btn-outline-secondary ms-3 footer-button">Mangalorean Restaurants Near Me</button></a>
                              <a href="#"><button type="button" class="btn btn-outline-secondary ms-3 footer-button">Tibetan Restaurants Near Me</button></a>
                              <a href="#"><button type="button" class="btn btn-outline-secondary ms-3 footer-button" >Barbecue Restaurants Near Me</button></a>
                             </div>
                            
                            <div >
                              <a href="#"><button type="button" class="btn btn-outline-secondary footer-button">Maharashtrian Restaurants Near Me</button></a>
                              <a href="#"><button type="button" class="btn btn-outline-secondary ms-3 footer-button">Nepalese Restaurants Near Me</button></a>
                              <a href="#"><button type="button" class="btn btn-outline-secondary ms-3 footer-button">Rajasthani Restaurants Near Me</button></a>
                              <a href="#"><button type="button" class="btn btn-outline-secondary ms-3 footer-button" >Turkish Restaurants Near Me</button></a>
                             </div>
                             
                            
                             <div class="heading-6" >Explore Every Restaurants Near Me</div>
                            
                             <div >
                              <a href="#"><button type="button" class="btn btn-outline-secondary footer-button-2" >Explore Restaurants Near Me</button></a>
                              <a href="#"><button type="button" class="btn btn-outline-secondary ms-3 footer-button-2" >Explore Top Rated Restaurants Near Me</button></a>
                            </div>
                          </div>

                          
            </div>

            {/* footerpart */}

            <div class="footer-section-4">
                <div class="heading-text d-inline-block">For better experience,download the Swiggy app now</div>
                <div class="d-inline-block" >
                <img src="https://media-assets.swiggy.com/swiggy/image/upload/fl_lossy,f_auto,q_auto/portal/m/play_store.png" className="img-1" alt="" width={"210px"} />
                </div>
                <div class="d-inline-block" >
                <img src="https://media-assets.swiggy.com/swiggy/image/upload/fl_lossy,f_auto,q_auto/portal/m/app_store.png" className="img-1" alt="" width={"210px"} />
                </div>
            </div>

            {/* <!----footer-last part--> */}
                               <div class="footer-section-5"> 
                                   <div className="footpart">
                                    {/* <!--coloumn-1--> */}
                                    <div class="d-inline-block"> 
                                    <div class="d-inline-block" style={{position: "absolute"}}>
                                        <img src="../images/images.png" alt="" width="60px"/>
                                      </div>
                                      <div class="d-inline-block logo-text ">
                                        Swiggy 
                                      </div>
                                      <div class="logo-subtext">
                                        © 2023 Bundl Technologies Pvt. Ltd
                                      </div>
                                      </div>
                                   {/* <!--coloumn-2--> */}
                                  <div class="d-inline-block ms-5 ps-5 mt-2 me-5" style={{position: "absolute"}}>
                                    <h5 class="head-text">Company</h5>
                                    <p><a href="#" class="link-underline-dark link-text">About</a></p>
                                    <p><a href="#" class="link-underline-dark link-text">Creers</a></p>
                                    <p><a href="#" class="link-underline-dark link-text">Teram</a></p>
                                    <p><a href="#" class="link-underline-dark link-text">Awiggy One</a></p>
                                    <p><a href="#" class="link-underline-dark link-text">Swiggy Instamart</a></p>
                                    <p><a href="#" class="link-underline-dark link-text">Swiggy Genie</a></p>
                                  </div>
                                   {/* <!--coloumn-3--> */}
                                  <div class="d-inline-block mt-2 contact" style={{position: "absolute"}}>
                                    <h5 class="head-text">Contact us</h5>
                                    <p><a href="#" class="link-underline-dark link-text">Help & Support</a></p>
                                    <p><a href="#" class="link-underline-dark link-text">Partner with us</a></p>
                                    <p><a href="#" class="link-underline-dark link-text">Ride with us</a></p>
                                    <h5 class="head-text" >Legal</h5>
                                    <p><a href="#" class="link-underline-dark link-text">Terms & Conditions</a></p>
                                    <p><a href="#" class="link-underline-dark link-text">Cookie Policy</a></p>
                                    <p><a href="#" class="link-underline-dark link-text">Privacy Policy</a></p>
                                  </div>
                                  {/* <!--coloumn-4--> */}
                                  <div class="d-inline-block mt-2 deliver" style={{position: "absolute"}}>
                                        <h5 class="head-text">We deliver to:</h5>
                                        <p><a href="#" class="link-underline-dark link-text">Banglore</a></p>
                                        <p><a href="#" class="link-underline-dark link-text">Gurgaon</a></p>
                                        <p><a href="#" class="link-underline-dark link-text">Hyderadabad</a></p>
                                        <p><a href="#" class="link-underline-dark link-text">Delhi</a></p>
                                        <p><a href="#" class="link-underline-dark link-text">Mumbai</a></p>
                                        <p><a href="#" class="link-underline-dark link-text">Pune</a></p>
                                        <select class="form-select link-text droptn"  aria-label="Default select example">
                                        <option selected>589 cities</option>
                                        <option value="1">Ujjain</option>
                                        <option value="2">Gujarat</option>
                                        <option value="3">Banglore</option>
                                        </select>
                                    </div>
                                </div>           
                                   
                            </div>
                     </div>             
                    
            
           
         )
    }
}

export default HomePage;