import './Input.scss';
import PropTypes from 'prop-types';
import React from 'react';

const Input = ({
  value = '',
  label = '',
  onChange = () => { }
}) => (
  <div className="button">
    <label>
      {label}
    </label>
    <input
      value={value}
      onChange={(e) => {
        onChange(e.target.value)
      }} />
  </div>
);

Input.propTypes = {
  value: PropTypes.string.isRequired,
  label: PropTypes.string.isRequired,
  onChange: PropTypes.func.isRequired,
};

export default Input;
