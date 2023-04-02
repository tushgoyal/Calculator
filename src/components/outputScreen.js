import OutputScreenRow from "./outputScreenRow.js";

// Use to hold two Screen Rows ie Input/Output.
const OutputScreen = ({ input, output }) => (
  <div className="screen" data-testid="screen">
    <OutputScreenRow value={input} />
    <OutputScreenRow value={output} />
  </div>
);

export default OutputScreen;
