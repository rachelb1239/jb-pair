import React from 'react';

const Button = ({ toggleLoading }) => (
  <button type="button" className={`btn btn-primary`} onClick={toggleLoading}>Test button</button>
);

export default Button;