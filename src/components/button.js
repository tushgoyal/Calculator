import React from "react";

// Create our Button component as a functional component.
const Button = ({ label, handleClick }) => (
  <input type="button" value={label} onClick={handleClick}  data-testid="btn-input" />
);
export default Button;
