import { createContext, useState } from "react";
import { codeSnippets } from "../utils/enums/constants";

export const codeContext = createContext();

const CodeProvider = ({ children }) => {
  const [value, setValue] = useState("");
  const [selectedLanguage, setSelectedLanguage] = useState("javascript");
  const [output, setOutput] = useState("");
  const [aiResponse, setAIResponse] = useState({});

  const onSelect = (language) => {
    setSelectedLanguage(language);
    setValue(codeSnippets[language]);
  };

  return (
    <codeContext.Provider
      value={{
        value,
        setValue,
        selectedLanguage,
        setSelectedLanguage,
        onSelect,
        output,
        setOutput,
        aiResponse,
        setAIResponse,
      }}
    >
      {children}
    </codeContext.Provider>
  );
};

export default CodeProvider;
