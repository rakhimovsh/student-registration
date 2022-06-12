import React from "react";
import ReactDOM from "react-dom/client";
import App from "./App";
import { BrowserRouter } from "react-router-dom";
import { Provider as LoginProvider } from "./Context/Login";
import { Provider as ModalProvider } from "./Context/Modal";
const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
  <React.StrictMode>
    <BrowserRouter>
      <LoginProvider>
        <ModalProvider>
          <App />
        </ModalProvider>
      </LoginProvider>
    </BrowserRouter>
  </React.StrictMode>
);
