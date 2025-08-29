// src/main.jsx
import React from "react";
import ReactDOM from "react-dom/client";
import { BrowserRouter } from "react-router-dom";
import { Provider } from "react-redux"; // ✅ import Provider
import store from "./store/store";
import AppRouter from "./router/AppRouter";
import "./index.css";

ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <Provider store={store}>
      <BrowserRouter>
        <AppRouter /> {/* Your routing will happen here */}
      </BrowserRouter>
    </Provider>
  </React.StrictMode>
);
