import React from "react";

const Cart = ({ cart, totalPrice }) => {
  const cartSize = Object.keys(cart).length;
  return (
    <div className="cart">
      <h2>Your Cart</h2>
      {cartSize === 0 ? (
        <div>
          <p>Your cart is empty</p>
          <p>Total: $0</p>
        </div>
      )
        : (
          <table className="cart-items">
            <thead>
              <tr>
                <th>Item</th>
                <th>Quantity</th>
                <th>Price</th>
              </tr>
            </thead>
            <tbody>
              {Object.keys(cart).map((productId) => (
                <tr key={productId}>
                  <td>{cart[productId].title}</td>
                  <td>{cart[productId].quantity}</td>
                  <td>{cart[productId].price}</td>
                </tr>
              ))}
            </tbody>
            <tfoot>
              <tr>
                <td colSpan="3" className="total">Total: ${totalPrice}</td>
              </tr>
            </tfoot>
          </table>
        )}

      <a className={`button checkout ${cartSize === 0 ? 'disabled' : ''}`} >Checkout</a>
    </div>
  );
};

export default Cart;
