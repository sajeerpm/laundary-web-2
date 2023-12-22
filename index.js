// src/index.js

// Import React and other necessary modules
import React from "react";
import ReactDOM from "react-dom";
import App from "./src/App";

// Set the canonical link dynamically
document
  .getElementById("canonical-link")
  .setAttribute("href", window.location.href);

// Render your React app
ReactDOM.render(<App />, document.getElementById("root"));
