/*eslint-disable*/
import React from "react";

const DisplayScreen = (props) => {
  // const [inputValue, setInputValue] = useState("");
  // const onInputChange = (value) => {
  //   setInputValue(value)
  // };
  
  const { total, next, operation } = props;

  return (
    <div className="displayscreen-cont">
      {/* <input
      className="display-screen"
        type="text"
        value={inputValue}
        onChange={(e) => onInputChange(e.target.value)}
      /> */}
      <span className="display-screen">
        {total}
        {operation}
        {next}
      </span>
    </div>
  );
};

export default DisplayScreen;
