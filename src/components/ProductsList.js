import React from 'react';
import EditableProduct from './EditableProduct';

const ProductsList = (({ products }) => {
  return (
    <div className="product-listing">
      <h2>Products</h2>
      {products.map(product => {
        return <EditableProduct key={product.id} product={product}/>
      })}
    </div>
  )
});

export default ProductsList;
