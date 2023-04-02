import React from "react";

// Create our Button component for input.
const Button = ({ label, handleClick }) => (
  <input type="button" value={label} onClick={handleClick}  data-testid="btn-input" />
);
export default Button;
