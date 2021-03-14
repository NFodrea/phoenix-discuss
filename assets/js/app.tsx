import React from "react";
import ReactDOM from "react-dom";
import Hello from "./app/index";

document.addEventListener("DOMContentLoaded", () => {
  const container = document.getElementById("app");
  if (!container) return;
  ReactDOM.render(<Hello />, container);
});
