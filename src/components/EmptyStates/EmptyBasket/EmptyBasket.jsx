import React from "react";
import emptybasket from '../../../images/empty-basket.png';
import './EmptyBasket.scss';

const EmptyBasket = () => {
  return (
    <div className="empty-basket">
      <img
        src={emptybasket}
        alt="empty-basket"
      />
      <h2>Your basket is empty!</h2>
    </div>
  );
};

export default EmptyBasket;
