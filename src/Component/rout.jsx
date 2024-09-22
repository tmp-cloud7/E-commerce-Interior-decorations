import React from "react";
import { Routes, Route } from "react-router-dom";
import Home from "./home";
import Product from "./product";
import Cart from "./cart"
import Contact from "./contact";
import Wish from "./wish";
import Policy from "./policy";
import About from "./about";

const Rout = ({product, setProduct, detail, view, close, setClose, cart, setCart, addtocart, wish, setWish, wishlist}) => {
    return(
       <>
       <Routes>
        <Route path="/" element={<Home detail={detail} view={view} close={close} setClose={setClose} addtocart={addtocart} wishlist={wishlist} />}/>
        <Route path="/product" element={<Product product={product} setProduct={setProduct} detail={detail} view={view} close={close} setClose={setClose} addtocart={addtocart} wishlist={wishlist} />}/>
        <Route path="/cart" element={<Cart cart={cart} setCart={setCart} />} />
        <Route path="/contact" element={<Contact />}/>
        <Route path="/wish" element={<Wish wish={wish} setWish={setWish} addtocart={addtocart}/>} />
        <Route path="/policy" element={<Policy />}/>
        <Route path="/about" element={<About />}/>
       </Routes>
       
       </>

    )
}

export default Rout