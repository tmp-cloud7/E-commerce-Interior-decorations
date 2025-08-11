import React, { useState } from "react";
import { Link } from "react-router-dom";
import { FaArrowRight } from "react-icons/fa6";
import { FaTruck } from 'react-icons/fa';
import { LuDollarSign } from "react-icons/lu";
import { CiPercent } from "react-icons/ci";
import { MdHeadsetMic } from "react-icons/md";
import { AiOutlineShoppingCart } from "react-icons/ai";
import { IoIosCloseCircleOutline } from "react-icons/io";
import { BsEye } from "react-icons/bs";
import { CiHeart } from "react-icons/ci";
import { TbCurrencyNaira } from "react-icons/tb";
import Homeproduct from "./homeproduct";
import './home.css'
const Home = ({detail, view, close, setClose, addtocart, wishlist}) => {
    const [homeproduct, setHomeProduct] = useState(Homeproduct);
    return(        
        <>
           {
           close ? 
           <div className="product_detail">
           <div className="container">
               <button onClick={() => setClose(false)} className="closebtn"><IoIosCloseCircleOutline /> </button>
                {
              detail.map((curElm) => {
               return(
                   <div className="productbox">
                       <div className="img-box">
                           <img src={curElm.image} alt={curElm.name}></img>
                       </div>
                       <div className="detail">
                           <h4>{curElm.category}</h4>
                           <h2>{curElm.name}</h2>
                           <p>A design everyone will love: Whether for home or office purposes</p>
                           <h3><TbCurrencyNaira />{curElm.price}</h3>
                           <h5><TbCurrencyNaira />{curElm.old_price}</h5>
                           <button onClick={() => addtocart(curElm)}>Add To Cart</button>
                       </div>
                   </div>
               )
              }) 
           }
               <div className="productbox"></div>
           </div>
       </div> : null
        }   
         <div className="top_banner">
            <div className="container">
                <div className="detail">
                    <h2>Design Your <br /> Comfort Zone </h2>
                    <p>Carefully curated trinkets make your house a home, and <br /> express your personality. But it's not just what you display, it's how you display it. </p>                   
                    <Link to='/product' className="link">Catalog</Link>
                </div>
                <div className="image_box">
                    <img src="/img/banner 8 (2).png" alt="sliderimg" ></img> 
                </div>
            </div>
        </div>
        {/* <div className="banner">    
            <div className="container">                
                <img src="/img/banner_9.jpg" alt="lightimg" height='350px'></img> 
                <div className="text">
                    <h3><i>All Lighting</i></h3>
                    <p>Experience the perfect ambiance with our state-of <br />-the-art lighting solutions, designed to illuminate <br /> your space with elegance and efficiency. From cozy <br />home environments to professional settings, our <br />lighting systems offer unparalleled brightness and <br />versatility, ensuring every moment is bathed in just <br /> the right light. Transform any room into a <br />captivating sanctuary with our innovative lighting <br />technology.</p>
                    <Link to='/product' className="link">Explore <FaArrowRight /></Link>
                </div>               
            </div>
            <div className="container">                
                <img src="/img/banner_10.jpg" alt="decorimg"></img> 
                <div className="text">
                    <h3><i>New Arrivals</i></h3>
                    <p>Discover our latest arrivals, curated to inspire <br />and elevate your style. From timeless classics to <br />contemporary trends, our newest collection offers <br />something for every taste and occasion. Unveil the <br />freshest additions to your wardrobe and make a <br />statement with our carefully selected pieces.</p>
                    <Link to='/product' className="link">Shop Now < FaArrowRight /></Link>
                </div>               
            </div>
        </div>  */}
        <div className="banner">
            <div className="container">
                <picture>
                <source srcSet="/img/banner_9_mobile.png" media="(max-width: 768px)" />
                <img src="/img/banner_9.jpg" alt="Lighting Banner" />
                </picture>
                <div className="text">
                <h3><i>All Lighting</i></h3>
                <p>Experience the perfect ambiance with our state-of-the-art lighting solutions...</p>
                <Link to="/product" className="link">Explore</Link>
                </div>
            </div>
            <div className="container">
                <picture>
                <source srcSet="/img/banner_10_mobile.jpg" media="(max-width: 768px)" />
                <img src="/img/banner_10.jpg" alt="decorimg" />
                </picture>
                <div className="text">
                <h3><i>New Arrivals</i></h3>
                <p>Discover our latest arrivals, curated to inspire...</p>
                <Link to="/product" className="link">Explore</Link>
                </div>
            </div>
        </div>

        <div className="product_type">
            <div className="container">
                <div className="box">
                    <div className="img_box">
                        <img src="/img/table lamp.png" alt="lamps"></img>
                    </div>
                <div className="detail">
                    <p>Lamps</p>
                </div>    
                </div>
                <div className="box">
                    <div className="img_box">
                        <img src="/img/furniture.png" alt="furnitures"></img>
                    </div>
                <div className="detail">
                    <p>Furnitures</p>
                </div>    
                </div>
                <div className="box">
                    <div className="img_box">
                        <img src="/img/lamp.png" alt="walllights"></img>
                    </div>
                <div className="detail">
                    <p>Wall Lights</p>
                </div>    
                </div>
                <div className="box">
                    <div className="img_box">
                        <img src="/img/chandelier.png" alt="chandeliers"></img>
                    </div>
                <div className="detail">
                    <p>Chandeliers</p>
                </div>    
                </div>
            </div>
        </div>
        <div className="about">
            <div className="container">
                <div className="box">
                    <div className="icon">
                        < FaTruck />
                    </div>
                    <div className="detail">
                        <h3>Free Shipping</h3>
                          <p>Order above $1000</p>
                    </div>
                </div>
                <div className="box">
                    <div className="icon">
                        < LuDollarSign />
                    </div>
                    <div className="detail">
                        <h3>Return & Refund </h3 >
                        <p> Money Back Guarantee</p>
                    </div>
                </div>
                <div className="box">
                    <div className="icon">
                        < CiPercent />
                    </div>
                    <div className="detail">
                        <h3>Member Discount</h3>
                          <p>On every order</p>
                    </div>
                </div>
                <div className="box">
                    <div className="icon">
                        < MdHeadsetMic />
                    </div>
                    <div className="detail">
                        <h3>Customer Support</h3>
                          <p> Everytime call support</p>
                    </div>
                </div>
            </div>
        </div>
        <div className="product">
            <h2>Top Products</h2>
            <div className="container">
            {
                    homeproduct.map((curElm) => 
                    {
                     return(
                      <div className="box" key={curElm.id}>
                        <div className="img_box">
                            <img src={curElm.image} alt={curElm.name} ></img>
                            <div className="icon">
                                <li onClick={() => addtocart (curElm)} ><AiOutlineShoppingCart /></li>
                                <li onClick={() => view (curElm)} ><BsEye /></li>
                                <li onClick={() => wishlist (curElm)} > <CiHeart /></li>                               
                            </div>
                        </div>
                        <div className="detail">
                            <p>{curElm.category}</p>
                            <h3>{curElm.name}</h3>
                            <div className="amount">
                            <h4><TbCurrencyNaira />{curElm.price}</h4>
                            <h5><TbCurrencyNaira />{curElm.old_price}</h5>
                            </div>
                        </div>

                      </div> 
                     ) 
                    }) 
                }
            </div>
            <div className="banner_news">
                    <img src="/img/banner_12.jpg" alt="banner_newsletter" ></img>
                    <div className="detail">
                 <h3>Stay in touch</h3>
                 <p>Join our newsletter for 10% off. <br />We'll email yoa a voucher worth 10% off <br />your first order over <TbCurrencyNaira />100,000. </p>
                    <div className="search_box" >
                    <input type="text" value= "" placeholder="Email " autoComplete="off" ></input> 
                    <Link className="link"><FaArrowRight /></Link>               
                    </div>
                   </div>
            </div>
        </div>
        </>


    )
}

export default Home;