import React, { useContext } from 'react'
import "./Fooditem.css"
import { assets } from '../../assets/assets'
import { StoreContext } from '../../Context/StoreContext';

function Fooditem({id, name, description, price, image}) {
    
    const {cartItems, addToCart, removeFromCart} = useContext(StoreContext)
  return (
    <div className='food-item'>
      <div className="food-item-img-container">
        <img src={image} alt="food-item-image" className="food-item-img" />
        {
            !cartItems[id] ? <img src={assets.add_icon_white} className='add' alt="add" onClick={()=> addToCart(id)} />
                        : <div className="food-item-counter">
                           <img src={assets.remove_icon_red} alt="minus" onClick={()=> removeFromCart(id)} />
                           <p>{cartItems[id]}</p>
                           <img src={assets.add_icon_green} alt="add" onClick={()=> addToCart(id)} />
                        </div>
        }
      </div>
      <div className="food-item-info">
        <div className="food-item-name-rating">
            <p>{name}</p>
            <img src={assets.rating_starts} alt="rating" />
        </div>
            <p className="food-item-desc">{description}</p>
            <p className="food-item-price">${price} </p>
      </div>
    </div>
  )
}

export default Fooditem
