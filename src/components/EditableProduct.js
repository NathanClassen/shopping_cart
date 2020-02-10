import React, { Component } from 'react';
import Product from './Product';
import EditProductForm from './EditProductForm';

class EditableProduct extends Component {
  state = {
    isEditing: true,
  }

  render() {
    return (
      <div className="product">
        <Product product={this.props.product}/>
        {this.state.isEditing ? <EditProductForm product={this.props.product}/> :
          (
            <div className="actions product-actions">
              <a className="button add-to-cart">Add to Cart</a>
              <a className="button edit">Edit</a>
            </div>
          )}
        <a className="delete-button"><span>X</span></a>
      </div>
    )
  }
}

export default EditableProduct;
