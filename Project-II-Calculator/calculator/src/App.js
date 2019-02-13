import React from "react";
import "./App.css";
import NumberButton from "./components/ButtonComponents/NumberButton";
import OperatorButton from "./components/ButtonComponents/OperatorButton";
import ActionButton from "./components/ButtonComponents/ActionButton";
import CalculatorDisplay from "./components/DisplayComponents/CalculatorDisplay";

const App = () => {
  return (
    <div className="calculator-container">
      <CalculatorDisplay text="0" />
      <div className="input-container">
        <div className="numbers-container">
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
        <div className="operators-container">
          <OperatorButton
            text={"\u00F7"}
            operatorButtonStyle="operatorButtonStyle"
          />
          <OperatorButton
            text={"\u00D7"}
            operatorButtonStyle="operatorButtonStyle"
          />
          <OperatorButton
            text={"\u2212"}
            operatorButtonStyle="operatorButtonStyle"
          />
          <OperatorButton text="+" operatorButtonStyle="operatorButtonStyle" />
          <OperatorButton text="=" operatorButtonStyle="operatorButtonStyle" />
        </div>
      </div>
    </div>
  );
};

export default App;
