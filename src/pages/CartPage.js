import React from "react";
import img1 from "../img/img-1.png";

class CartPage extends React.Component {
  render() {
    return (
      <>
        <section className="section-cart">
          <div className="container">
            <div className="cart-title">
              <h2>Shopping Cart</h2>
            </div>
            <div className="book-checkout">
              <div className="book-review">
                <img src={img1} alt="book cover" />
                <div className="book-desc">
                  <h2>19 $</h2>
                  <h2>Sold By : Sara</h2>
                </div>
              </div>
              <div className="cart-btns">
                <button className="delete-btn">Delete</button>
                <button className="back-btns">Back To Shopping</button>
              </div>
            </div>
            <div className="total-order">
              <div className="total-price">
                <h2>Total : 19 $</h2>
                <h2>QTY : 2</h2>
              </div>
              <button>Proceed To Checkout</button>
            </div>
          </div>
        </section>
      </>
    );
  }
}

export default CartPage;
