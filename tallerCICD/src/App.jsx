import "./App.css";
import { useState } from "react";
import sumar from "./suma";

function App() {
  const [a, setA] = useState(2);
  const [b, setB] = useState(3);

  return (
    <div style={{ textAlign: "center", marginTop: "50px" }}>
      <h1>Calculadora Pro Max</h1>
      <input
        type="number"
        value={a}
        onChange={(e) => setA(Number(e.target.value))}
      />
      <span> + </span>
      <input
        type="number"
        value={b}
        onChange={(e) => setB(Number(e.target.value))}
      />
      <p>Resultado: {sumar(a, b)}</p>
    </div>
  );
}

export default App;
