import React from "react";
import Productdetail from "./productdetail";
import { AiOutlineShoppingCart } from "react-icons/ai";
import { BsEye } from "react-icons/bs";
import { CiHeart,} from "react-icons/ci";
import { IoIosCloseCircleOutline } from "react-icons/io";
import { TbCurrencyNaira } from "react-icons/tb";
import './product.css'

const Product = ({product, setProduct, detail, view, close, setClose, addtocart, wishlist }) => {
    const  filtterproduct = (product) => {
        const update = Productdetail.filter((x) => {
            return x.category === product;
        })
        setProduct(update);
    }
    const AllProducts = () => {

        setProduct(Productdetail)
    }
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
      
        <div className="products">
            <h2># Products</h2>
            <p>Home . products</p>
            <div className="container">
                <div className="filter">
                    <div className="categories">
                        <ul>
                        <li onClick={() => AllProducts ()}>All Products</li>
                            <li onClick={() => filtterproduct ("Chandeliers")}>Chandeliers</li>
                            <li onClick={() => filtterproduct ("Lamps")} >Lamps</li>
                            <li onClick={() => filtterproduct ("Wall Lights")} >Wall Lights</li>
                            <li onClick={() => filtterproduct ("Furnitures")} >Furnitures</li>
                            <li onClick={() => filtterproduct ("Kitchen And Dining")} >Kitchen And Dining</li>
                            <li onClick={() => filtterproduct ("Wall Decors")} >Wall Decors</li>
                            <li onClick={() => filtterproduct ("Games")}>Games</li>
                            <li onClick={() => filtterproduct ("Bath decors")} >Bath decors</li>
                            <li onClick={() => filtterproduct ("Clock")} >Clock</li>
                            <li onClick={() => filtterproduct ("Figurines")} >Figurines</li>
                            <li onClick={() => filtterproduct ("Vases")} >Vases</li>
                        </ul>
                    </div>
                </div>
                <div className="productbox">
                    <div className="contant">
                        {
                            product.map((curElm) =>
                            {
                              return(
                                <>
                                <div className="box" key={curElm.id}>
                                   <div className="img_box">
                                       <img src={curElm.image} alt={curElm.name} ></img>
                                       <div className="icon">
                                       <li onClick={() => addtocart (curElm)}><AiOutlineShoppingCart /></li>
                                       <li onClick={() => view (curElm)}><BsEye /></li>
                                       <li onClick={() => wishlist (curElm)}> <CiHeart /></li>                               
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
                                </>
                              ) 
                            })
                        }
                    </div>
                </div>
            </div>
        </div>
        
        </>

    )
}

export default Product;