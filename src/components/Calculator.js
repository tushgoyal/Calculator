import React, { useState } from "react";
import OutputScreen from "./outputScreen.js";
import Button from "./button.js";

const Calculator = () => {
  const [input, setInput] = useState("");
  const [output, setOutput] = useState("");

  const calculatorKeys = [
    ["AC", "Delete", "%", "/"],
    ["1", "2", "3", "+"],
    ["4", "5", "6", "-"],
    ["7", "8", "9", "*"],
    ["0", "="],
  ];

  const handleClick = (value) => {
    switch (value) {
      case "=": {
        // if it's an equal sign, use the eval module to evaluate the input convert the output
        if (input !== "") {
          let result = "";
          try {
            // result = eval(input);
            // eslint-disable-next-line no-new-func
            result = Function("return " + input)();
          } catch (err) {
            setOutput("Error");
          }
          // if eval giving no result hence show error
          if (!result) setOutput("Error");
          // else update answer in state.
          else {
            setOutput(result);
            setInput("");
          }
          break;
        }
        break;
      }
      case "AC": {
        // if it's the AC sign, just clean all
        setOutput("");
        setInput("");
        break;
      }

      case "Delete": {
        // if it's the Delete sign, just clean last digit
        const userInput = input.slice(0, -1);
        setInput(userInput);
        break;
      }

      default: {
        // for every other commmand, update the answer in the state
        setInput((prevInput) => prevInput + value);
        break;
      }
    }
  };

  return (
    <div className="mainCalc">
      <OutputScreen output={output} input={input} />
      {calculatorKeys.map((row, idx) => (
        <div key={idx} className="button-row">
          {row.map((digit) => (
            <Button
              key={digit}
              label={digit}
              handleClick={() => handleClick(digit)}
            />
          ))}
        </div>
      ))}
    </div>
  );
};
export default Calculator;
