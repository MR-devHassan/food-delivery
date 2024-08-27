import React, { useContext } from "react";
import "./Cart.css";
import { StoreContext } from "../../Context/StoreContext";
import { useNavigate } from "react-router-dom";
function Cart() {
  const { cartItems, food_list, removeFromCart, getTotalCartAmount } = useContext(StoreContext);
  const navigate = useNavigate();

  return (
    <div className="cart">
      <div className="cart-items">
        <div className="cart-items-title">
          <p>Items</p>
          <p>Title</p>
          <p>Price</p>
          <p>Quantity</p>
          <p>Total</p>
          <p>Remove</p>
        </div>
        <br />
        <hr />
        {food_list.map((item, index) => {
          if (cartItems[item._id] > 0) {
            return (
              <div>
                <div className="cart-items-title cart-items-item">
                  <img src={item.image} alt="" />
                  <p>{item.name}</p>
                  <p>{item.price}.00</p>
                  <p>{cartItems[item._id]}</p>
                  <p>{item.price * cartItems[item._id]}.00</p>
                  <p onClick={() => removeFromCart(item._id)} className="cross">X</p>
                </div>
                <hr />
              </div>
            );
          }
        })}
      </div>
      <div className="cart-bottom">
        <div className="cart-total">
          <h1>Total</h1>
          <div>
            <div className="cart-total-details">
              <p>SubTotal</p>
              <p>{getTotalCartAmount()} DH</p>
            </div>
            <hr />
            <div className="cart-total-details">
              <p>Delivery Feed</p>
              <p>{getTotalCartAmount()===0?0:2} DH</p>
            </div>
            <hr />
            <div className="cart-total-details">
              <b>Total</b>
              <b>{getTotalCartAmount()===0?0:getTotalCartAmount()+2} DH</b>
            </div>
          </div>
          <button onClick={()=> navigate("/order")}>CHEKOUT</button>
        </div>
        <div className="cart-promocode">
          <div>
            <p>Si vous aver un promo code saisi le ici</p>
            <div className="cart-promocode-input">
              <input type="text" placeholder="promo code" />
              <button>Submit</button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Cart;
