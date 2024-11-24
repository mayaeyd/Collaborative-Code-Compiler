import { createContext, useState } from "react";

export const codeContext = createContext();

const CodeProvider = ({ children }) => {
  const [value, setValue] = useState("");
  const [selectedLanguage, setSelectedLanguage] = useState("javascript");

  return (
    <codeContext.Provider>
      {children}
    </codeContext.Provider>
  );
};

export default CodeProvider;
