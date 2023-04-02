import React from "react";

// Used to show Input/Output.
const OutputScreenRow = ({ value }) => (
  <div className="screen-row">
    <input type="text" value={value} readOnly />
  </div>
);

export default OutputScreenRow;
