import React from "react";
import ReactDOM from "react-dom/client";
import "./styles/index.css";
import App from "./App";
import { ChakraProvider } from "@chakra-ui/react";
import theme from "./theme";
import CodeProvider from "./context/codeContext";
import EmailProvider from "./context/emailContext";

ReactDOM.createRoot(document.getElementById("root")).render(
  <ChakraProvider theme={theme}>
    <CodeProvider>
      <EmailProvider>
        <App />
      </EmailProvider>
    </CodeProvider>
  </ChakraProvider>
);
