import React from "react";
import "./App.css";
import NumberButton from "./components/ButtonComponents/NumberButton";
import ActionButton from "./components/ButtonComponents/ActionButton";

const App = () => {
  return (
    <div class="calculator-container">
      <div class="numbers-container">
        <ActionButton text="clear" actionButtonStyle="actionButtonStyle" />
        <NumberButton text="1" buttonStyle="buttonStyle" />
        <NumberButton text="2" buttonStyle="buttonStyle" />
        <NumberButton text="3" buttonStyle="buttonStyle" />
        <NumberButton text="4" buttonStyle="buttonStyle" />
        <NumberButton text="5" buttonStyle="buttonStyle" />
        <NumberButton text="6" buttonStyle="buttonStyle" />
        <NumberButton text="7" buttonStyle="buttonStyle" />
        <NumberButton text="8" buttonStyle="buttonStyle" />
        <NumberButton text="9" buttonStyle="buttonStyle" />
        <ActionButton text="0" actionButtonStyle="actionButtonStyle" />
      </div>
      <div class="operator-container">
        <NumberButton text={"\u2212"} buttonStyle="buttonStyle" />
        <NumberButton text={"\u00D7"} buttonStyle="buttonStyle" />
        <NumberButton text={"\u2212"} buttonStyle="buttonStyle" />
        <NumberButton text="+" buttonStyle="buttonStyle" />
        <NumberButton text="=" buttonStyle="buttonStyle" />
      </div>
    </div>
  );
};

export default App;
