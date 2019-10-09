import React from 'react';

const Button = ({ toggleLoading }) => (
  <button type="button" className={`btn btn-primary`} onClick={toggleLoading}>Toggle Loading</button>
);

export default Button;