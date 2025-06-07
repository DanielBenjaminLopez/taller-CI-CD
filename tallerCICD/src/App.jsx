import { useState } from "react";
import "./App.css";

function App() {
  const [display, setDisplay] = useState("0");
  const [firstOperand, setFirstOperand] = useState(null);
  const [operator, setOperator] = useState(null);
  const [history, setHistory] = useState([]);

  const inputDigit = (digit) => {
    setDisplay(display === "0" ? digit : display + digit);
  };

  const inputOperator = (op) => {
    if (firstOperand === null) {
      setFirstOperand(parseFloat(display));
      setOperator(op);
      setDisplay("0");
    }
  };

  const calculate = () => {
    if (firstOperand !== null && operator) {
      const secondOperand = parseFloat(display);
      let result;

      switch (operator) {
        case "+":
          result = firstOperand + secondOperand;
          break;
        default:
          return;
      }

      const operationString = `${firstOperand} ${operator} ${secondOperand} = ${result}`;
      setHistory([...history, operationString]);

      setDisplay(result.toString());
      setFirstOperand(null);
      setOperator(null);
    }
  };

  const clearAll = () => {
    setDisplay("0");
    setFirstOperand(null);
    setOperator(null);
  };

  const clearHistory = () => {
    setHistory([]);
  };

  return (
    <div className="calculator">
      <div className="display">{display}</div>

      <div className="keypad">
        <button className="btn-clear" onClick={clearAll}>
          AC
        </button>

        <div className="number-pad">
          {[7, 8, 9, 4, 5, 6, 1, 2, 3, 0].map((num) => (
            <button key={num} onClick={() => inputDigit(num.toString())}>
              {num}
            </button>
          ))}
        </div>

        <div className="operator-pad">
          <button className="btn-operator" onClick={() => inputOperator("+")}>
            +
          </button>
          <button className="btn-equals" onClick={calculate}>
            =
          </button>
        </div>
      </div>

      <div className="history-section">
        <div className="history-header">
          <h3>Historial</h3>
          <button className="btn-clear-history" onClick={clearHistory}>
            Limpiar
          </button>
        </div>
        <div className="history-items">
          {history.map((item, index) => (
            <div key={index} className="history-item">
              {item}
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}

export default App;
