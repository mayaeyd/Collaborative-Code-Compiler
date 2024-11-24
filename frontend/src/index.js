import React from "react";
import ReactDOM from "react-dom/client";
import "./styles/index.css";
import App from "./App";
import { ChakraProvider } from "@chakra-ui/react"
import theme from "./theme";
import CodeProvider from "./context/codeContext";

ReactDOM.createRoot(document.getElementById("root")).render(
  <ChakraProvider theme={theme}>
    <CodeProvider>
      <App />
    </CodeProvider>
  </ChakraProvider>
);

