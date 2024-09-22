import React, {useState} from 'react'
import Nav from './Component/nav'
import Rout from './Component/rout'
import Footer from './Component/footer'
import Productdetail from './Component/productdetail'
import { BrowserRouter } from 'react-router-dom';
import {Helmet} from "react-helmet";
function App() {
  // Add to Wishlist
  const [wish, setWish] = useState([])
  //Add To Cart
  const [cart, setCart] = useState([])
  //product detail
  const [close, setClose] = useState(false)
  const [detail, setDetail] = useState([])
  //filter product
  const [product, setProduct] = useState(Productdetail)
  const searchbtn = (product) => {
    const change = Productdetail.filter((x) => {
      return x.category === product
    })
    setProduct(change)
  }
  //product detail
  const view = (product) => {
    setDetail([{...product}])
    setClose(true)
  }

  // add to cart
  

  const addtocart = (product) => {
    const exsit = cart.find((x) =>
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

  // wishlist
  

  const wishlist = (product) => {
    const exsit = wish.find((x) => {
      return x.id === product.id
     })
    if(exsit)
      {
        alert('This Product is already added to your wishlist')
      }
      else 
      {
        setWish ([...wish, {...product, qty:1}])
        alert("Product is added to wishlist")
      }
  }
  return (
    <>
     <Helmet>
                <meta charSet="utf-8" />
                <title>Trillium Interiors</title>
                <link rel="canonical" href="http://mysite.com/example" />
                <meta name="description" content="Helmet application" />
            </Helmet>
      <BrowserRouter>     
        <Nav  searchbtn={searchbtn} />
        <Rout product={product} setProduct={setProduct} detail={detail} view={view} close={close} setClose={setClose} cart={cart} setCart={setCart} addtocart={addtocart} wish={wish} setWish={setWish} wishlist={wishlist}/>
        <Footer />
      </BrowserRouter>
    
    </>
  );
}

export default App;
