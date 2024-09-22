import React from "react";
import { IoCloseOutline } from "react-icons/io5"
import { TbCurrencyNaira } from "react-icons/tb";
import { Link } from "react-router-dom";
import './wish.css'
const Wish = ({ wish, setWish, cart, setCart}) => {
    // remove product
    const removeproduct = (product) => {
        const exsit = wish.find((x) => {
            return x.id === product.id
           })
           if(exsit.qty > 0) {
            setWish(wish.filter((x) =>
            {
                return x.id !== product.id
            }))
           }
    }

    // add to cart

    const addtocart = (product) => {
        const exsit = wish.find((x) =>
          {
            return x.id === product.id
          })
         if(exsit) {
          alert('This Product is already added to cart')
         }
         else {
          setCart([...cart, {...product, qty:1}])
          alert('product is added to cart')
         }
      }
    return (
     <>
     <div className="wishcontainer">
        {wish.length === 0 &&
        <div className="emptywish">
        <h2 className="empty">Wishlist is Empty</h2>
        <Link to='/product' className="emptywishbtn">Shop Now</Link>
        </div> 
        }
        <div className="contant">
            {
                wish.map((curElm) => {
                    return(
                        <div className="wish_item" key={curElm.id}>
                            <div className="img_box">
                                <img src={curElm.image} alt={curElm.name} ></img>
                            </div>
                            <div className="detail">
                                <h4>{curElm.category}</h4>
                                <h3>{curElm.name}</h3>
                                <p><TbCurrencyNaira />{curElm.price}</p>
                                <button onClick={() => addtocart(curElm)} >Add to cart</button>
                                <div className="close">
                                <button onClick={() => removeproduct(curElm)}><IoCloseOutline /></button>
                                </div>
                            </div>
                        </div>
                    )
                })
            }
        </div>
     </div>
     </>
    )
}

export default Wish;