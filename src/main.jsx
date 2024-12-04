import React from "react";
import ReactDOM from "react-dom/client";
import App from "./App";
import { AppProvider } from "./context";
import "react-toastify/dist/ReactToastify.css";

import "./index.css";
import { ToastContainer } from "react-toastify";

ReactDOM.createRoot(document.getElementById("root")).render(
  <AppProvider>
    {/* <React.StrictMode> */}
    <ToastContainer position="top-center" autoClose={2000} theme="colored"/>
    <App />
    {/* </React.StrictMode> */}
  </AppProvider>
);
