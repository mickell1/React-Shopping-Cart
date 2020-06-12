import React from "react";
import PropTypes from 'prop-types';

import './Button.scss'; 

const Button = ({ className, type, onClick, children, disabled }) => {
  return (
    <button
      className={className}
      type={type}
      onClick={onClick}
      disabled={disabled}
    >
      {children}
    </button>
  );
 }

 Button.propTypes = {
  className: PropTypes.string,
  onClick: PropTypes.func,
  children: PropTypes.node,
  disabled: PropTypes.bool,
}
 
 Button.defaultProps = {
  className: "button",
  type: "button",
  disabled: false,
 };

 export default Button;