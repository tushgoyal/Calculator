import React from "react";

// Used to show Input/Output.
const OutputScreenRow = ({ value }) => (
  <div className="screen-row" data-testid="screen-row">
    <input type="text" value={value} readOnly data-testid="input-text" />
  </div>
);

export default OutputScreenRow;
