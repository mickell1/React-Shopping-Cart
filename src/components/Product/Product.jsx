import React, { Component } from "react";
import PropTypes from 'prop-types'
import Counter from "../Counter/Counter";
import Button from '../Button/Button'
import './Product.scss'

class Product extends Component {
  constructor(props) {
    super(props);
    this.state = {
      selectedProduct: {},
      quickViewProduct: {},
      isAdded: false
    };
  }
  addToBasket(image, title, price, productId, quantity) {
    this.setState(
      {
        selectedProduct: {
          image: image,
          title: title,
          price: price,
          productId: productId,
          quantity: quantity
        }
      },
      () => {
        this.props.addToBasket(this.state.selectedProduct);
      }
    );
    this.setState(
      {
        isAdded: true
      },
      () => {
        setTimeout(() => {
          this.setState({
            isAdded: false,
            selectedProduct: {}
          });
        }, 3500);
      }
    );
  }
  quickView(image, title, price, productId, quantity) {
    this.setState(
      {
        quickViewProduct: {
          image: image,
          title: title,
          price: price,
          productId: productId,
          quantity: quantity,
        }
      },
      () => {
        this.props.openModal(this.state.quickViewProduct);
      }
    );
  }
  render() {
    let image = this.props.image;
    let title = this.props.title;
    let price = this.props.price;
    let productId = this.props.productId;
    let quantity = this.props.productQuantity;
    return (
      <div className="product">
        <div className="product-image">
          <img
            src={this.props.image}
            alt={this.props.title}
            onClick={this.quickView.bind(
              this,
              image,
              title,
              price,
              productId,
              quantity
            )}
          />
        </div>
        <h4 className="product-name">{this.props.title}</h4>
        <p className="product-price">{this.props.price}</p>
        <Counter
          productQuantity={quantity}
          updateQuantity={this.props.updateQuantity}
          resetQuantity={this.resetQuantity}
        />
        <div className="product-action">
          <Button
            className={!this.state.isAdded ? "" : "added"}
            onClick={this.addToBasket.bind(
              this,
              image,
              title,
              price,
              productId,
              quantity
            )}
          >
            {!this.state.isAdded ? "ADD TO CART" : "✔ ADDED"}
          </Button>
        </div>
      </div>
    );
  }
}

Product.propTypes = {
  product: PropTypes.shape({
  productId: PropTypes.string.isRequired,
  price: PropTypes.number.isRequired,
  title: PropTypes.string.isRequired,
  image: PropTypes.string.isRequired,
  }),
}

export default Product;
