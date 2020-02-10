import React from 'react';
import Product from './Product';

const ProductsList = () => {
  return (
    <div className="product-listing">
      <h2>Products</h2>
      {[1,2,3].map(_ => <Product /> )}
    </div>
  )
}

export default ProductsList;
