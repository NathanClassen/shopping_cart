import React from "react";
import EditableProduct from "./EditableProduct";

const ProductsList = ({ products, onAddToCart }) => {
  return (
    <div className="product-listing">
      <h2>Products</h2>
      {products.map(product => {
        return (
          <EditableProduct
            key={product.id}
            product={product}
            onAddToCart={onAddToCart}
          />
        );
      })}
    </div>
  );
};

export default ProductsList;
