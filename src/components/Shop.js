import React, { Component } from "react";
import Cart from "./Cart";
import ProductsList from "./ProductsList";
import client from "../lib/client.js";
import ToggleableProductForm from "./ToggleableProductForm";

class Shop extends Component {
  state = {
    products: [],
    cart: {}
  };

  componentDidMount() {
    client
      .get("/api/products")
      .then(products => this.setState({ products: products }));
  }

  handleAddProduct = newProduct => {
    client.post(`/api/products`, newProduct).then(product => {
      this.setState(prevState => ({
        products: [...prevState.products, product]
      }));
    });
  };

  handleDecrementProductQuantity = productId => {
    const product = this.state.products.find(
      product => productId === product.id
    );

    client
      .put(`/api/products/${productId}`, { quantity: product.quantity - 1 })
      .then(updatedProduct => {
        this.setState(prevState => ({
          products: prevState.products.map(product => {
            if (product.id === productId) {
              return updatedProduct;
            }
            return product;
          })
        }));
      });
  };

  handleAddToCart = productToAdd => {
    // To be completed: update cart, either increment quantity for existing product
    // or add product to cart with quantity of 1

    // this.setState(prevState => {
    //   let newProduct =

    //   if (prevState.cart[productToAdd.id] !== undefined) {
    //     return
    //   }

    //   cart: [...prevState.cart, productToAdd]
    // });
    this.setState(prevState => ({
      cart: [...prevState.cart, productToAdd]
    }));

    this.handleDecrementProductQuantity(productToAdd.id);
  };

  render() {
    return (
      <div id="app">
        <header>
          <h1>The Shop!</h1>
          <Cart cart={this.state.cart} />
        </header>

        <main>
          <ProductsList
            products={this.state.products}
            onAddToCart={this.handleAddToCart}
          />
        </main>
        <ToggleableProductForm onSubmitProduct={this.handleAddProduct} />
      </div>
    );
  }
}

/*
  Shop
    Cart
    ProductList
      Product
        EditProductForm
    AddProductForm

*/

export default Shop;
