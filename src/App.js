import React from "react";
import "./App.css";

function App() {
  return (
    <div className="main">
      <header className="main-header">
        <h1>Calculator</h1>
      </header>

      <div className="content">
        <div className="display">
          <div className="calc">3.50 * 100.25</div>
          <div className="result">358.875</div>
        </div>

        <div className="keys">
          <button className="grey" value="c">
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
          <button className="equal" value="=">
            =
          </button>
        </div>
      </div>
    </div>
  );
}

export default App;
