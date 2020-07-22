import React, { useState } from "react";
import "./App.css";
const { getValue } = require("./utils");

function App() {
  const [result, setResult] = useState("");
  const [mathOperation, setMathOperation] = useState("");
  let numbers = [];
  let naturalNumbers = ["00", "0", "1", "2", "3", "4", "5", "6", "7", "8", "9"];
  let operators = ["%", "/", "*", "+", "-", "+/-", "."];
  //let functions = ["C", "="];

  function roleOfOperators(value) {
    if (value === "C") erased();
    if (value === "=") calculate(numbers);
  }

  function getMathOperation(value) {
    roleOfOperators(value);

    if (naturalNumbers.includes(value) || operators.includes(value)) {
      if (value !== "=") numbers.push(value);
      setMathOperation(numbers.join(""));
    }
  }

  function calculate(numbers) {
    let operation = numbers.join("");

    let resolve = eval(operation);

    setResult(resolve);
  }

  function erased() {
    numbers = [];
    setResult("");
    setMathOperation("");
  }

  function handleClickButtons() {
    let allButtons = document.querySelectorAll("button");

    for (let button of allButtons) {
      button.addEventListener("click", (e) =>
        getMathOperation(getValue(e.target.value))
      );
    }
  }
  window.addEventListener("load", handleClickButtons);
  return (
    <div className="main">
      <header className="main-header">
        <h1>Calculator</h1>
      </header>

      <div className="content">
        <div className="display">
          <div className="calc">{mathOperation}</div>
          <div className="result">{result}</div>
        </div>

        <div className="keys">
          <button className="grey" value="C">
            C
          </button>
          <button className="grey" value="+/-">
            +/-
          </button>
          <button className="grey" value="%">
            %
          </button>
          <button className="orange" value="/">
            /
          </button>
          <button value="7">7</button>
          <button value="8">8</button>
          <button value="9">9</button>
          <button className="orange" value="*">
            *
          </button>
          <button value="4">4</button>
          <button value="5">5</button>
          <button value="6">6</button>
          <button className="orange" value="+">
            +
          </button>
          <button value="1">1</button>
          <button value="2">2</button>
          <button value="3">3</button>
          <button className="orange" value="-">
            -
          </button>
          <button className="grey" value="00">
            00
          </button>
          <button value="0">0</button>
          <button value=".">,</button>
          <button className="equal" value="=">
            =
          </button>
        </div>
      </div>
    </div>
  );
}

export default App;
