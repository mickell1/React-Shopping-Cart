import React, { Component } from "react";
import BasketScrollBar from "../BasketScrollBar/BasketScrollBar";
import EmptyBasket from "../EmptyStates/EmptyBasket/EmptyBasket";
import Button from '../Button/Button';
import { findDOMNode } from "react-dom";

import logo from '../../images/logo.png';
import search from '../../images/search-small.png';
import back from '../../images/back.png';
import basket from '../../images/basket.png';
import searchButton from '../../images/search.png';

import './Header.scss';

class Header extends Component {
  constructor(props) {
    super(props);
    this.state = {
      showBasket: false,
      basket: this.props.basketItems,
      mobileSearch: false
    };
  }

  handleBasket(e) {
    e.preventDefault();
    this.setState({
      showBasket: !this.state.showBasket
    });
  }

  handleSubmit(e) {
    e.preventDefault();
  }

  handleMobileSearch(e) {
    e.preventDefault();
    this.setState({
      mobileSearch: true
    });
  }

  handleSearchNav(e) {
    e.preventDefault();
    this.setState(
      {
        mobileSearch: false
      },
      () => {
        this.refs.searchBox.value = "";
        this.props.handleMobileSearch();
      }
    );
  }
  
  handleClickOutside(event) {
    const basketNode = findDOMNode(this.refs.basketPreview);
    if (basketNode.classList.contains("active")) {
      if (!basketNode || !basketNode.contains(event.target)) {
        this.setState({
          showBasket: false
        });
        event.stopPropagation();
      }
    }
  }

  componentDidMount() {
    document.addEventListener(
      "click",
      this.handleClickOutside.bind(this),
      true
    );
  }

  componentWillUnmount() {
    document.removeEventListener(
      "click",
      this.handleClickOutside.bind(this),
      true
    );
  }

  render() {
    let basketItems;
    basketItems = this.state.basket.map(product => {
      console.log(product)
      return (
        <li className="basket-item" key={product.title}>
          <img className="product-image" src={product.image} alt={product.title} />
          <div className="product-info">
            <p className="product-name">{product.title}</p>
            <p className="product-price">{product.price}</p>
          </div>
          <div className="product-total">
            <p className="quantity">
              {product.quantity} {product.quantity > 1 ? "Nos." : "No."}{" "}
            </p>
            <p className="amount">{product.quantity * product.price}</p>
          </div>
          <a
            className="product-remove"
            href="/#"
            onClick={this.props.removeProduct.bind(this, product.id)}
          >
            ×
          </a>
        </li>
      );
    });

    let view;
    basketItems.length <= 0 ? (view = <EmptyBasket />) : (view = basketItems);
    
    return (
      <header>
        <div className="container">
          <div className="brand">
            <img
              className="logo"
              src={logo}
              alt="Logo"
            />
          </div>

          <div className="search">
            <a
              className="mobile-search"
              href="/#"
              onClick={this.handleMobileSearch.bind(this)}
            >
              <img
                src={search}
                alt="search"
              />
            </a>
            <form
              action="#"
              method="get"
              className={
                this.state.mobileSearch ? "search-form active" : "search-form"
              }
            >
              <a
                className="back-button"
                href="/#"
                onClick={this.handleSearchNav.bind(this)}
              >
                <img
                  src={back}
                  alt="back"
                />
              </a>
              <input
                type="search"
                ref="searchBox"
                placeholder="Search for products"
                className="search-keyword"
                onChange={this.props.handleSearch}
              />
              <Button
                className="search-button"
                type="submit"
                onClick={this.handleSubmit.bind(this)}
              >
                <img src={searchButton} alt="Search" />
              </Button>
              
            </form>
          </div>

          <div className="basket">
            <div className="basket-info">
              <table>
                <tbody>
                  <tr>
                    <td>No. of items</td>
                    <td>:</td>
                    <td>
                      <strong>{this.props.totalItems}</strong>
                    </td>
                  </tr>
                  <tr>
                    <td>Sub Total</td>
                    <td>:</td>
                    <td>
                      <strong>{this.props.total}</strong>
                    </td>
                  </tr>
                </tbody>
              </table>
            </div>
            <a
              className="basket-icon"
              href="/#"
              onClick={this.handleBasket.bind(this)}
              ref="basketButton"
            >
              <img
                className={this.props.basketBounce ? "shake" : " "}
                src={basket}
                alt="Basket"
              />
              {this.props.totalItems ? (
                <span className="basket-count">{this.props.totalItems}</span>
              ) : (
                ""
              )}
            </a>
            <div
              className={
                this.state.showBasket ? "basket-preview active" : "basket-preview"
              }
              ref="basketPreview"
            >
              <BasketScrollBar>{view}</BasketScrollBar>
              <div className="action-block">
                <Button
                  className={this.state.basket.length > 0 ? " " : "disabled"}
                >
                  PROCEED TO CHECKOUT
                </Button>
              </div>
            </div>
          </div>
        </div>
      </header>
    );
  }
}

export default Header;
