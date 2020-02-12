import React, { Component } from "react";

class ToggleableProductForm extends Component {
  state = {
    title: "",
    price: "",
    quantity: ""
  };

  onFormChange = event => {
    event.preventDefault();
    const name = event.target.name;

    this.setState({
      [name]: event.target.value
    });
  };

  // refactor: extract / combine forms to single component
  handleFormSubmit = event => {
    event.preventDefault();

    this.props.onSubmitProduct({
      title: this.state.title,
      price: this.state.price,
      quantity: this.state.quantity
    });
  };

  render() {
    return (
      <div className="add-form visible">
        <p>
          <a className="button add-product-button">Add A Product</a>
        </p>
        <h3>Add Product</h3>
        <form>
          <div className="input-group">
            <label for="product-name">Product Name</label>
            <input
              name="title"
              type="text"
              id="product-name"
              value={this.state.name}
              onChange={this.onFormChange}
            />
          </div>

          <div className="input-group">
            <label for="product-price">Price</label>
            <input
              name="price"
              type="text"
              id="product-price"
              value={this.state.price}
              onChange={this.onFormChange}
            />
          </div>

          <div className="input-group">
            <label for="product-quantity">Quantity</label>
            <input
              name="quantity"
              type="text"
              id="product-quantity"
              value={this.state.quantity}
              onChange={this.onFormChange}
            />
          </div>

          <div className="actions form-actions">
            <a className="button" onClick={this.handleFormSubmit}>
              Add
            </a>
            <a className="button">Cancel</a>
          </div>
        </form>
      </div>
    );
  }
}

export default ToggleableProductForm;
