import React, { Component } from "react";
import LoadingProduct from "./LoadingProduct";
import '../../Products/Products.scss'

class LoadingProducts extends Component {
  render() {
    return (
      <div className="products loading">
        <LoadingProduct />
        <LoadingProduct />
        <LoadingProduct />
        <LoadingProduct />
        <LoadingProduct />
        <LoadingProduct />
        <LoadingProduct />
        <LoadingProduct />
      </div>
    );
  }
}

export default LoadingProducts;