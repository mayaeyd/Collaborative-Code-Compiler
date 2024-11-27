import { createContext, useState } from "react";
import { codeSnippets } from "../utils/enums/constants";

export const codeContext = createContext();

const CodeProvider = ({ children }) => {
  const [value, setValue] = useState("");
  const [selectedLanguage, setSelectedLanguage] = useState("javascript");

  const onSelect = (language) => {
    setSelectedLanguage(language);
    setValue(codeSnippets[language]);
  };

  return (
    <codeContext.Provider value={{ value, setValue, selectedLanguage, setSelectedLanguage, onSelect }}>
      {children}
    </codeContext.Provider>
  );
};

export default CodeProvider;
