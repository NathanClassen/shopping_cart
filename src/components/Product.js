import React from 'react';

const Product = (props) => {
  return (
    <div className="product">
      <div className="product-details">
        <h3>{props.product.title}</h3>
        <p className="price">{props.product.price}</p>
        <p className={`quantity ${props.product.quantity === 0 ? 'none-left' : ''}`}>{props.product.quantity} left in stock</p>
      </div>
    </div >
  )
}

export default Product;
