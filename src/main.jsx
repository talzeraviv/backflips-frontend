import React from "react";
import ReactDOM from "react-dom/client";
import App from "./App.jsx";
import "./index.css";
import axios from "axios";
import { StoreProvider } from "./Context/StoreProvider.jsx";

// axios.defaults.baseURL = import.meta.env.VITE_BASE_URL;
axios.defaults.baseURL =
  import.meta.env.VITE_BASE_URL || "http://localhost:5000/api";

ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <StoreProvider>
      <App />
    </StoreProvider>
  </React.StrictMode>
);
