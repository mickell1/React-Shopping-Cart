import React from "react";
import Product from "../Product/Product";
import LoadingProducts from "../Skeletons/ProductSkeleton/LoadingProducts";
import NoResults from "../EmptyStates/NoResults/NoResults";
import CSSTransitionGroup from "react-transition-group/CSSTransitionGroup";
import './Products.scss'

const Products = (props) => {  
  let productsData;
  let term = props.searchTerm;

  const searchingFor = (term) => {
    return x => {
      return x.title.toLowerCase().includes(term.toLowerCase()) || !term;
    };
  }
  productsData = props.productsList
    .filter(searchingFor(term))
    .map(product => {
      return (
        <Product
          key={product.productId}
          price={product.price}
          title={product.title}
          image={product.image}
          productId={product.productId}
          addToBasket={props.addToBasket}
          productQuantity={props.productQuantity}
          updateQuantity={props.updateQuantity}
          openModal={props.openModal}
        />
      );
    });

  // Empty and Loading States
  let view;
  if (productsData.length <= 0 && !term) {
    view = <LoadingProducts />;
  } else if (productsData.length <= 0 && term) {
    view = <NoResults />;
  } else {
    view = (
      <CSSTransitionGroup
        transitionName="fadeIn"
        transitionEnterTimeout={500}
        transitionLeaveTimeout={300}
        component="div"
        className="products"
      >
        {productsData}
      </CSSTransitionGroup>
    );
  }
  return <div className="products-wrapper">{view}</div>;
}

export default Products;
