import React, { Component } from "react";
import PropTypes from 'prop-types';
import Header from "./components/Header/Header";
import Products from './components/Products/Products';
import Footer from './components/Footer/Footer';
import QuickView from "./components/QuickView/QuickView";
import productsData from './data/products';
import "./App.scss";

class App extends Component {
  constructor() {
    super();
    this.state = {
      products: [],
      basket: [],
      totalItems: 0,
      totalAmount: 0,
      term: "",
      basketBounce: false,
      quantity: 1,
      quickViewProduct: {},
      modalActive: false
    };

    this.handleSearch = this.handleSearch.bind(this);
    this.handleMobileSearch = this.handleMobileSearch.bind(this);
    this.handleBasket = this.handleBasket.bind(this);
    this.sumTotalItems = this.sumTotalItems.bind(this);
    this.sumTotalAmount = this.sumTotalAmount.bind(this);
    this.checkProduct = this.checkProduct.bind(this);
    this.updateQuantity = this.updateQuantity.bind(this);
    this.handleRemoveProduct = this.handleRemoveProduct.bind(this);
    this.openModal = this.openModal.bind(this);
    this.closeModal = this.closeModal.bind(this);
  }

  getProducts() {
    console.log(productsData)
    this.setState({
      products: productsData
    });
  }
  
  componentWillMount() {
    this.getProducts();
  }

  // Search by Keyword
  handleSearch(event) {
    this.setState({ term: event.target.value });
  }

  // Mobile Search Reset
  handleMobileSearch() {
    this.setState({ term: "" });
  }

  // Add to Basket
  handleBasket(selectedProducts) {
    let basketItem = this.state.basket;
    let productID = selectedProducts.productId;
    let productQty = selectedProducts.quantity;
    if (this.checkProduct(productID)) {
      console.log("hi");
      let index = basketItem.findIndex(x => x.productId === productID);

      basketItem[index].quantity = basketItem[index].quantity + productQty;
      this.setState({
        basket: basketItem
      });
    } else {
      basketItem.push(selectedProducts);
    }
    this.setState({
      basket: basketItem,
      basketBounce: true
    });
    setTimeout(
      function() {
        this.setState({
          basketBounce: false,
          quantity: 1
        });
        console.log(this.state.quantity);
        console.log(this.state.basket);
      }.bind(this),
      1000
    );
    this.sumTotalItems(this.state.basket);
    this.sumTotalAmount(this.state.basket);
  }

  handleRemoveProduct(id, e) {
    let basket = this.state.basket;
    let index = basket.findIndex(x => x.productId === id);
    basket.splice(index, 1);
    this.setState({
      basket: basket
    });
    this.sumTotalItems(this.state.basket);
    this.sumTotalAmount(this.state.basket);
    e.preventDefault();
  }

  checkProduct(productID) {
    let basket = this.state.basket;
    return basket.some((item) => {
      return item.productId === productID;
    });
  }

  sumTotalItems() {
    let total = 0;
    let basket = this.state.basket;
    total = basket.length;
    this.setState({
      totalItems: total
    });
  }

  sumTotalAmount() {
    let total = 0;
    let basket = this.state.basket;
    for (let i = 0; i < basket.length; i++) {
      total += basket[i].price * basket[i].quantity;
    }
    this.setState({
      totalAmount: total.toFixed(2)
    });
  }

  updateQuantity(qty) {
    console.log("quantity added...");
    this.setState({
      quantity: qty
    });
  }

  openModal(product) {
    this.setState({
      quickViewProduct: product,
      modalActive: true
    });
  }

  closeModal() {
    this.setState({
      modalActive: false
    });
  }

  render() {
    return (
      <div className="container">
        <Header
          basketBounce={this.state.basketBounce}
          total={this.state.totalAmount}
          totalItems={this.state.totalItems}
          basketItems={this.state.basket}
          removeProduct={this.handleRemoveProduct}
          handleSearch={this.handleSearch}
          handleMobileSearch={this.handleMobileSearch}
          updateQuantity={this.updateQuantity}
          productQuantity={this.state.moq}
        />
        <Products
          productsList={this.state.products}
          searchTerm={this.state.term}
          addToBasket={this.handleBasket}
          productQuantity={this.state.quantity}
          updateQuantity={this.updateQuantity}
          openModal={this.openModal}
        />
        <Footer />
        <QuickView
          product={this.state.quickViewProduct}
          openModal={this.state.modalActive}
          closeModal={this.closeModal}
        />
      </div>
    );
  }
}

App.propTypes = {
  products: PropTypes.arrayOf(PropTypes.object),
};

export default App;
