import React from 'react';

const EditProductForm = (props) => {
  return (
    <div className="edit-form">
      <h3>Edit Product</h3>
      <form>
        <div className="input-group">
          <label htmlFor="product-name">Product Name</label>
          <input type="text" id="product-name" value={props.product.title} />
        </div>

        <div className="input-group">
          <label htmlFor="product-price">Price</label>
          <input type="text" id="product-price" value={props.product.price} />
        </div>

        <div className="input-group">
          <label htmlFor="product-quantity">Quantity</label>
          <input type="text" id="product-quantity" value={props.product.quantity} />
        </div>

        <div className="actions form-actions">
          <a className="button">Update</a>
          <a className="button">Cancel</a>
        </div>
      </form>
    </div>
  )
}

export default EditProductForm;
