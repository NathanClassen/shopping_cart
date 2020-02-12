import React, { Component } from "react";
import Cart from "./Cart";
import ProductsList from "./ProductsList";
import client from "../lib/client.js";
import ToggleableProductForm from "./ToggleableProductForm";

class Shop extends Component {
  state = {
    products: [],
    cart: {},
    totalPrice: 0
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
      .put(`/api/products/${productId}`, { ...product, quantity: product.quantity - 1 })
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
    this.addProductToCart(productToAdd);
    this.handleDecrementProductQuantity(productToAdd.id);
  };

  addProductToCart = (product) => {
    this.setState(prevState => {
      let foundProduct = prevState.cart[product.id];
      let updatedCart
      if (foundProduct) {
        const updatedProduct = Object.assign({}, foundProduct, { quantity: foundProduct.quantity + 1 })
        updatedCart = Object.assign({}, prevState.cart, { [product.id]: updatedProduct })
        return {
          cart: updatedCart,
          totalPrice: prevState.totalPrice + product.price,
        }
      } else {
        const newProduct = {
          title: product.title,
          quantity: 1,
          price: product.price,
        }
        updatedCart = Object.assign({}, prevState.cart, { [product.id]: newProduct })
        return {
          cart: updatedCart,
          totalPrice: prevState.totalPrice + product.price,
        }
      }
    })
  }



  render() {
    return (
      <div id="app">
        <header>
          <h1>The Shop!</h1>
          <Cart cart={this.state.cart} totalPrice={this.state.totalPrice} />
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
