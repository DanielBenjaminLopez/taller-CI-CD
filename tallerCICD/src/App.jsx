import { useState } from "react";
import "./App.css";

function App() {
  const [num1, setNum1] = useState("");
  const [num2, setNum2] = useState("");
  const [result, setResult] = useState("0");
  const [history, setHistory] = useState([]);
  const [currentInput, setCurrentInput] = useState(1); // 1 for num1, 2 for num2

  const handleNumInput = (digit) => {
    // Solo permitir dígitos, ignorar el punto para números enteros
    if (digit === ".") return;

    if (currentInput === 1) {
      setNum1((prev) => (prev === "0" ? digit : prev + digit));
    } else {
      setNum2((prev) => (prev === "0" ? digit : prev + digit));
    }
    setResult("0"); // Clear result when new input starts
  };

  const handleOperatorClick = () => {
    if (currentInput === 1 && num1 !== "") {
      setCurrentInput(2); // Move to inputting the second number
    }
  };

  const calculateSum = () => {
    // Usar parseInt para asegurar que sean números enteros
    const n1 = parseInt(num1);
    const n2 = parseInt(num2);

    if (!isNaN(n1) && !isNaN(n2)) {
      // De acuerdo a tu solicitud de precisión, la suma de enteros es directa.
      const sum = n1 + n2;
      const operationString = `${n1} + ${n2} = ${sum}`;
      setHistory((prevHistory) => [operationString, ...prevHistory]); // Add to top of history
      setResult(sum.toString());
      setNum1("");
      setNum2("");
      setCurrentInput(1); // Reset for next calculation
    } else {
      setResult("Error");
    }
  };

  const clearAll = () => {
    setNum1("");
    setNum2("");
    setResult("0");
    setCurrentInput(1);
  };

  const clearHistory = () => {
    setHistory([]);
  };

  const handleBackspace = () => {
    if (currentInput === 1) {
      setNum1((prev) => (prev.length > 1 ? prev.slice(0, -1) : ""));
    } else {
      setNum2((prev) => (prev.length > 1 ? prev.slice(0, -1) : ""));
    }
    setResult("0");
  };

  return (
    <div className="main-container">
      <h1 className="main-title glow-title">Taller de CI/CD</h1>
      <div className="calculator-wrapper">
        <div className="calculator-cyberpunk">
          <div className="display-cyberpunk">
            <div className="input-line">
              <span className={currentInput === 1 ? "active-input" : ""}>
                {num1 === "" ? "0" : num1}
              </span>
              <span className="operator-display">+</span>
              <span className={currentInput === 2 ? "active-input" : ""}>
                {num2 === "" ? "0" : num2}
              </span>
            </div>
            <div className="result-line">
              <span className="equals-sign">=</span> {result}
            </div>
          </div>

          <div className="keypad-cyberpunk">
            <button className="btn-clear glow" onClick={clearAll}>
              CLEAR
            </button>

            <div className="number-pad-cyberpunk">
              {[7, 8, 9, 4, 5, 6, 1, 2, 3].map(
                (
                  num // Eliminado el 0 y el punto
                ) => (
                  <button
                    key={num}
                    className="glow"
                    onClick={() => handleNumInput(num.toString())}
                  >
                    {num}
                  </button>
                )
              )}
              <button
                className="btn-zero glow"
                onClick={() => handleNumInput("0")}
              >
                0
              </button>{" "}
              {/* Botón 0 separado para el layout */}
              <button className="btn-backspace glow" onClick={handleBackspace}>
                {"<"}
              </button>
            </div>

            <div className="operator-pad-cyberpunk">
              <button
                className="btn-operator glow"
                onClick={handleOperatorClick}
              >
                +
              </button>
              <button className="btn-equals glow" onClick={calculateSum}>
                ENTER
              </button>
            </div>
          </div>
        </div>

        <div className="history-section-cyberpunk">
          <div className="history-header-cyberpunk">
            <h3>LOG</h3>
            <button className="btn-clear-history glow" onClick={clearHistory}>
              WIPE
            </button>
          </div>
          <div className="history-items-cyberpunk">
            {history.length > 0 ? (
              history.map((item, index) => (
                <div key={index} className="history-item-cyberpunk">
                  {item}
                </div>
              ))
            ) : (
              <div className="history-placeholder">No data streams</div>
            )}
          </div>
        </div>
      </div>
    </div>
  );
}

export default App;
