import React, { useContext } from 'react'
import "./PlaceOrder.css"
import { StoreContext } from '../../Context/StoreContext'
import { useNavigate } from 'react-router-dom';

function PlaceOrder() {
  const {getTotalCartAmount} = useContext(StoreContext);
  const navigate = useNavigate();
  return (
    <form className='place-order'>
      <div className="place-order-left">
        <p className="title">Delivery informations</p>
        <div className="multi-fields">
          <input type="text" placeholder='First name' />
          <input type="text" placeholder='Last name' />
        </div>
        <input type="email" placeholder='email adress' />
        <input type="text"  placeholder='street'/>
        <div className="multi-fields">
          <input type="text" placeholder='city' />
          <input type="text" placeholder='state' />
        </div>
        <div className="multi-fields">
          <input type="text" placeholder='zip code' />
          <input type="text" placeholder='country' />
        </div>
        <input type="text" placeholder='phone' />
      </div>
      <div className="place-order-right">
      <div className="cart-total">
          <h1>Total</h1>
          <div>
            <div className="cart-total-details">
              <p>SubTotal</p>
              <p>{getTotalCartAmount()} $</p>
            </div>
            <hr />
            <div className="cart-total-details">
              <p>Delivery Feed</p>
              <p>{getTotalCartAmount()===0?0:2} $</p>
            </div>
            <hr />
            <div className="cart-total-details">
              <b>Total</b>
              <b>{getTotalCartAmount()===0?0:getTotalCartAmount()+2} $</b>
            </div>
          </div>
          <button onClick={() => navigate("/food-delivery/")}>PAYEMENT</button>
        </div>
      </div>
    </form>
  )
}

export default PlaceOrder
