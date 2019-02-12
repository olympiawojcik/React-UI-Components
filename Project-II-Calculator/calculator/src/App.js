import React from "react";
import "./App.css";
import NumberButton from "./components/ButtonComponents/NumberButton";
import ActionButton from "./components/ButtonComponents/ActionButton";

const App = () => {
  return (
    <div class="calculator-container">
      <ActionButton text="clear" />
      <NumberButton text="1" buttonStyle="buttonStyle" />
      <NumberButton text="2" buttonStyle="buttonStyle" />
      <NumberButton text="3" buttonStyle="buttonStyle" />
      <NumberButton text="4" buttonStyle="buttonStyle" />
      <NumberButton text="5" buttonStyle="buttonStyle" />
      <NumberButton text="6" buttonStyle="buttonStyle" />
      <NumberButton text="7" buttonStyle="buttonStyle" />
      <NumberButton text="8" buttonStyle="buttonStyle" />
      <NumberButton text="9" buttonStyle="buttonStyle" />
      <ActionButton text="0" buttonStyle="buttonStyle" />
    </div>
  );
};

export default App;
