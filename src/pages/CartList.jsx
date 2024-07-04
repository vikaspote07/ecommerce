/* eslint-disable no-unused-vars */
/* eslint-disable react/jsx-key */
import React, { useEffect, useState } from "react";

import "./cartlist.css";
export default function CartList({ cart, setCart }) {
  let [total, setTotal] = useState("");

  const calculateTotalPrice = (cartitem) => {
    if (cart && cart.length > 0) {
      const totalPrice = cartitem.reduce(
        (acc, product) => acc + (product.price || 0),
        0
      );
      setTotal(totalPrice);
    }
  };

  useEffect(() => {
    calculateTotalPrice(cart);
  }, [cart.length]);

  function removeFromcart(id) {
    let updatedCart = cart.filter((item) => item.uniqueid !== id);
    setCart(updatedCart);
    calculateTotalPrice(updatedCart);
  }
  return (
    <div>
      <div className="cart-container">
        {cart.length > 0 ? (
          <>
            <h2 className="cart-title">Your Shopping Cart</h2>
            <ul className="cart-list">
              {cart?.map((item) => {
                return (
                  <li className="cart-item">
                    <img
                      src={item.images || item.preview || item.thumbnail}
                      alt={item.images || item.preview || item.thumbnail}
                      className="cart-item-image"
                    />
                    <div className="cart-item-details">
                      <h3 className="cart-item-title">
                        {item.title || item.name}
                      </h3>
                      <p className="cart-item-price">
                        RS {Math.floor(item.price)}
                      </p>
                      <button
                        className="cart-item-remove"
                        onClick={() => removeFromcart(item.uniqueid)}
                      >
                        Remove
                      </button>
                    </div>
                  </li>
                );
              })}
            </ul>
            <div className="cart-total">
              <p>
                Total:{" "}
                <span className="cart-total-price">
                  RS : {total > 0 ? total.toFixed(2) : 0}
                </span>
              </p>
              <button className="checkout-button">Checkout</button>
            </div>
          </>
        ) : (
          "Cart is empty"
        )}
      </div>
    </div>
  );
}
