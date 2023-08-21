import React from 'react';
import PropTypes from 'prop-types';
import '../styles/Button.css';

function Button({ text, handleClick }) {
  const btnClass = text === '0' ? 'zeroBtn btn' : 'btn';
  const orangeColor = ['÷', '+', '=', '-', 'x'].includes(text) ? 'orangeColor' : '';
  return (
    <button type="button" className={`${btnClass} ${orangeColor}`} onClick={handleClick}>{text}</button>
  );
}

Button.propTypes = {
  text: PropTypes.string.isRequired,
  handleClick: PropTypes.func.isRequired,
};

export default Button;
