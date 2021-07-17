import './Input.scss';
import PropTypes from 'prop-types';
import React from 'react';

const Input = ({
  value = '',
  label = '',
  onChange = () => { }
}) => (
  <div className="input">
    <label>
      {label}
    </label>
    <input
      value={value}
      onChange={(e) => {
        onChange(e.target.value)
      }} />
    <div className="input__line"></div>
  </div>
);

Input.propTypes = {
  value: PropTypes.string.isRequired,
  label: PropTypes.string.isRequired,
  onChange: PropTypes.func.isRequired,
};

export default Input;
