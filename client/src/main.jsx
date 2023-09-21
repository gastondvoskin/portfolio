import React from "react";
import ReactDOM from "react-dom/client";
import App from "./App.jsx";
import "./index.css";
import axios from "axios";

axios.defaults.baseURL = import.meta.env.VITE_API_BASEURL || "http://localhost:3001";
ReactDOM.createRoot(document.getElementById("root")).render(<App />);
