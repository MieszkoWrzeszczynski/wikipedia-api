import './Button.scss';
import PropTypes from 'prop-types';
import React from 'react';

const Button = ({
  text = '',
  onClick = () => { }
}) => (
  <button
    className="button"
    onClick={onClick}
  >
    {text}
  </button>
);

Button.propTypes = {
  text: PropTypes.string.isRequired,
  onClick: PropTypes.func.isRequired,
};

export default Button;
