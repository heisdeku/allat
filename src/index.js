import "bootstrap/dist/css/bootstrap.css";
import React from "react";
import ReactDOM from "react-dom";
import App from "./App";
import { ChakraProvider } from "@chakra-ui/react";
import "./App.css";
import { theme } from "./styles/theme";
import AdminContextProvider from "./pages/contexts/AdminContext.context";
import PropertyContextProvider from "./pages/contexts/PropertyContext.context";
import { Toaster } from "react-hot-toast";
import Modal from 'react-modal';

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

Modal.setAppElement('#root');
