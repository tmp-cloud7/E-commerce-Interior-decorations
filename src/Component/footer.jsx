import React from "react";
import { FaFacebook } from "react-icons/fa";
import { FaInstagram } from "react-icons/fa";
import { FaXTwitter } from "react-icons/fa6";
import { FiYoutube } from "react-icons/fi";
import './footer.css'
import { Link } from "react-router-dom";
const Footer = () => {
    return (
        <>
        <div className="footer">
            <div className="container">
                <div className="about">
                    <div className="logo">
                        <img src="./img/header1.jpg" height= "50px" width="50px" alt="logo"></img>
                    </div>
                    <div className="detail">
                        <p>We are a team of designers and developers that creates high quality.</p>
                        <div className="icon">
                        <ul>
                            <li>
                            <a href='https://www.facebook.com/' target="_blank"> <FaFacebook /></a>   
                            </li>
                            <li>
                            <a href='https://www.instagram.com/' target="_blank"> <FaInstagram /></a> 
                            </li>
                            <li>
                            <a href='https://www.twitter.com/' target="_blank"> <FaXTwitter /> </a> 
                            </li>
                            <li>
                            <a href='https://www.youtube.com/' target="_blank"> <FiYoutube /></a>
                            </li>
                        </ul>
                        </div>    
                    </div>
                </div>
                <div className="account">
                    <h3>My Account</h3>
                    <ul>
                        <li>
                        <Link to='/contact' className="link">Account</Link>    
                        </li>
                        <li>
                        <Link to='/cart' className="link">Order</Link> 
                        </li>
                        <li>
                        <Link to='/cart' className="link">Cart</Link>
                        </li>
                        <li>
                        <Link to='/policy' className="link">Shipping</Link>
                        </li>
                        <li>
                        <Link to='/policy' className="link">Return</Link>
                        </li>
                    </ul>
                </div>
                <div className="pages">
                    <h3>Pages</h3>
                    <ul>
                        <li>
                        <Link to='/' className="link" >Home</Link>
                        </li>
                        <li>
                        <Link to='/about' className="link" >About</Link>
                        </li>
                        <li>
                        <Link to='/contact' className="link">Contact</Link>
                        </li>
                        <li>
                        <Link to='/policy' className="link">Terms & Conditions</Link>
                        </li>
                    </ul>
                </div>
            </div>

        </div>
        
        </>
    )
}

export default Footer;