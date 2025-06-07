import "./App.css";
import { useState } from "react";
import sumar from "./suma";

function App() {
  const [a, setA] = useState(2);
  const [b, setB] = useState(3);

  const calculadoraStyle = {
    backgroundColor: "#f4f4f4",
    border: "1px solid #ddd",
    borderRadius: "8px",
    padding: "30px",
    maxWidth: "300px",
    margin: "50px auto",
    boxShadow: "0 2px 4px rgba(0, 0, 0, 0.1)",
    textAlign: "center",
  };

  const tituloStyle = {
    color: "#333",
    marginBottom: "20px",
  };

  const inputStyle = {
    padding: "10px",
    margin: "0 5px",
    borderRadius: "4px",
    border: "1px solid #ccc",
    fontSize: "16px",
    width: "80px",
    textAlign: "center",
  };

  const signoStyle = {
    fontSize: "20px",
    margin: "0 10px",
    color: "#555",
  };

  const resultadoStyle = {
    marginTop: "25px",
    fontSize: "18px",
    fontWeight: "bold",
    color: "#28a745" /* Verde para indicar el resultado */,
  };

  return (
    <div style={calculadoraStyle}>
      <h1 style={tituloStyle}>Calculadora Pro Max 2</h1>
      <input
        type="number"
        style={inputStyle}
        value={a}
        onChange={(e) => setA(Number(e.target.value))}
      />
      <span style={signoStyle}> + </span>
      <input
        type="number"
        style={inputStyle}
        value={b}
        onChange={(e) => setB(Number(e.target.value))}
      />
      <p style={resultadoStyle}>Resultado: {sumar(a, b)}</p>
    </div>
  );
}

export default App;
