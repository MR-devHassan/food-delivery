import React, { useContext, useState } from 'react'
import "./Navbar.css"
import { assets } from '../../assets/assets'
import { Link } from "react-router-dom"
import { StoreContext } from '../../Context/StoreContext';
function Navbar({setShowLogin}) {
    const [menu, setMenu] = useState("home");
    const {getTotalCartAmount} = useContext(StoreContext)
  return (
    <div className='navbar'>
      <Link to='/food-delivery/' ><img src={assets.logo} alt="logo" className='logo' /></Link>
      <ul className="navbar-menu">
        <Link to="/food-delivery/" onClick={() => { setMenu("home")}} className={menu==="home" ? "active" : ""}>home</Link>
        <a href='#explore-menu' onClick={() => { setMenu("menu")}} className={menu==="menu" ? "active" : ""}>menu</a>
        <a href='#app-download' onClick={() => { setMenu("mobile")}} className={menu==="mobile" ? "active" : ""}>mobile app</a>
        <a href='#footer' onClick={() => { setMenu("contact")}} className={menu==="contact" ? "active" : ""}>contact us</a>
      </ul>
      <div className="navbar-right">
        <img src={assets.search_icon} alt="search-icon" />
        <div className="navbar-search-icon">
            <Link to='/cart'><img src={assets.basket_icon} alt="basket-icon" /></Link>
            <div className={getTotalCartAmount()===0?"":"dot"}></div>
        </div>
        <button onClick={() => setShowLogin(true)}>sign in</button>
      </div>
    </div>
  )
}

export default Navbar;
