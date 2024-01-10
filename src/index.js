// This is the bridge between the components we create in the App.js file and the web browser
import React, { StrictMode } from "react"; // React
import { createRoot } from "react-dom/client"; // This is the react's library to talk to the broser (React DOM)
import "./styles.css";

import App from "./App"; // This is our components

// The code brings all the pieces together and puts them in the index.html files in the public folder
const root = createRoot(document.getElementById("root"));
root.render(
  <StrictMode>
    <App />
  </StrictMode>
);