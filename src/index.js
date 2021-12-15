import "bootstrap/dist/css/bootstrap.css";
import React from "react";
import ReactDOM from "react-dom";
import App from "./App";
import reportWebVitals from "./reportWebVitals";
import { ChakraProvider } from "@chakra-ui/react";
import "./App.css";
import { theme } from "./styles/theme";
import AdminContextProvider from "./pages/contexts/AdminContext.context";
import PropertyContextProvider from "./pages/contexts/PropertyContext.context";
import { Toaster } from "react-hot-toast";

ReactDOM.render(
  <React.StrictMode>
    <ChakraProvider theme={theme}>
      <AdminContextProvider>
        <PropertyContextProvider>
          <App />
          <Toaster position="top-right" reverseOrder={true} />
        </PropertyContextProvider>
      </AdminContextProvider>
    </ChakraProvider>
  </React.StrictMode>,
  document.getElementById("root")
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
