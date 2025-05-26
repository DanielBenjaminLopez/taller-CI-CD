import test from "node:test";
import assert from "node:assert/strict";
import sumar from "./suma.js";

test("sumatoria", () => {
  const result = sumar(2, 3);
  const esperado = 5;
  assert.equal(result, esperado);
});
