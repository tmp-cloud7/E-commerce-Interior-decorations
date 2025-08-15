import React, { useState, useRef } from "react";
import { FaTruck } from 'react-icons/fa';
import { CiHeart } from "react-icons/ci";
import { IoBagOutline } from "react-icons/io5";
import { IoIosSearch } from "react-icons/io";
import { IoCloseOutline } from "react-icons/io5";
import { RxHamburgerMenu } from "react-icons/rx";
import { Link, useNavigate } from "react-router-dom"; 
import Productdetail from "./productdetail"; 
import "./style.css";

const Nav = ({ searchbtn }) => {
  const [search, setSearch] = useState("");
  const [suggestions, setSuggestions] = useState([]);
  const [showSearch, setShowSearch] = useState(false);
  const navRef = useRef();
  const navigate = useNavigate(); 

  const showNavbar = () => {
    navRef.current.classList.toggle("responsive_nav");
  };

  const handleInputChange = (e) => {
    const input = e.target.value;
    setSearch(input);

    if (input.trim() === "") {
      setSuggestions([]);
      return;
    }

    const filtered = Productdetail.filter((product) =>
      product.name.toLowerCase().includes(input.toLowerCase())
    );
    setSuggestions(filtered);
  };

  const handleSuggestionClick = (name) => {
    setSearch(name);
    searchbtn(name);      
    setSuggestions([]);    
    navigate("/product");   
  };

  return (
    <>
      <div className="free">
        <div className="icon">
          <FaTruck />
        </div>
        <p>Free Shipping Worldwide when shopping up to $1000</p>
      </div>

      <div className="main_header">
        <div className="container">
          <div className="logo">
            <Link to="/">
              <img src="./img/header1.jpg" alt="logo" />
            </Link>
          </div>

          <nav ref={navRef}>
            <ul>
              <li><Link to="/" className="link">HOME</Link></li>
              <li><Link to="/product" className="link">SHOP</Link></li>
              <li><Link to="/about" className="link">ABOUT</Link></li>
              <li><Link to="/contact" className="link">CONTACT</Link></li>
            </ul>
            <button className="nav-btn nav-close-btn" onClick={showNavbar}>
              <IoCloseOutline />
            </button>
          </nav>

          <div className="container_logo">
            <div className="search_box">
              <div className={`search_input ${showSearch ? "show" : ""}`}>
                <input
                  type="text"
                  value={search}
                  placeholder="Search for products"
                  autoComplete="off"
                  onChange={handleInputChange}
                />
                <button onClick={() => {
                  searchbtn(search);
                  navigate("/product"); 
                }}>
                  <IoIosSearch />
                </button>

                {suggestions.length > 0 && (
                  <ul className="dropdown">
                    {suggestions.map((product) => (
                      <li key={product.id} onClick={() => handleSuggestionClick(product.name)}>
                        {product.name}
                      </li>
                    ))}
                  </ul>
                )}
              </div>
            </div>

            <div className="second_icon">
              <Link to="/wish" className="link"><CiHeart /></Link>
              <Link to="/cart" className="link"><IoBagOutline /></Link>
              <button className="nav-btn" onClick={showNavbar}>
                <RxHamburgerMenu />
              </button>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};



export default Nav;

