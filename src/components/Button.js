import React from 'react';
import PropTypes from 'prop-types';
import './Button.css';

function Button({ text }) {
  const btnClass = text === '0' ? 'zeroBtn btn' : 'btn';
  const orangeColor = ['/', '+', '=', '-', 'x'].includes(text) ? 'orangeColor' : '';
  return (
    <button type="button" className={`${btnClass} ${orangeColor}`}>{text}</button>
  );
}

Button.propTypes = {
  text: PropTypes.string.isRequired,
};

export default Button;
