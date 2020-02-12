import React, { Component } from "react";
import Product from "./Product";
import EditProductForm from "./EditProductForm";

class EditableProduct extends Component {
  state = {
    isEditing: false
  };

  handleAddToCart = event => {
    event.preventDefault();
    if (this.props.product.quantity > 0) {
      this.props.onAddToCart(this.props.product);
    }
  };

  render() {
    return (
      <div className="product">
        <Product product={this.props.product} />
        {this.state.isEditing ? (
          <EditProductForm product={this.props.product} />
        ) : (
            <div className="actions product-actions">
              <a className={`button add-to-cart ${this.props.product.quantity === 0 ? 'disabled' : ''}`} onClick={this.handleAddToCart} >
                Add to Cart
            </a>
              <a className="button edit">Edit</a>
            </div>
          )}
        <a className="delete-button">
          <span>X</span>
        </a>
      </div>
    );
  }
}

export default EditableProduct;
