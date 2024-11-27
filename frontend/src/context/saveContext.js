import { createContext, useContext, useEffect } from "react";
import axios from "axios";
import { codeContext } from "./codeContext";

export const saveContext = createContext();

const SaveProvider = ({ children }) => {
  const { value, selectedLanguage, setValue, setSelectedLanguage } = useContext(codeContext);

  // Save code and language to localStorage
  const saveToLocalStorage = () => {
    localStorage.setItem("codeValue", value);
    localStorage.setItem("codeLanguage", selectedLanguage);
  };

  // Load code and language from localStorage on mount
  useEffect(() => {
    const storedValue = localStorage.getItem("codeValue");
    const storedLanguage = localStorage.getItem("codeLanguage");
    if (storedValue) setValue(storedValue);
    if (storedLanguage) setSelectedLanguage(storedLanguage);
  }, [setValue, setSelectedLanguage]);

  const handleSave = async (fileName) => {
    try {
      saveToLocalStorage(); 

      const token = localStorage.getItem("token");
      if (!token) return; 

      const response = await axios.post(
        "http://127.0.0.1:8000/api/files/save",
        {
          name: fileName,
          content: value,
          language: selectedLanguage,
        },
        {
          headers: {
            Authorization: `Bearer ${token}`,
          },
        }
      );

      if (response.status !== 201) {
      }
    } catch (error) {
    }
  };

  return (
    <saveContext.Provider value={{ handleSave, saveToLocalStorage }}>
      {children}
    </saveContext.Provider>
  );
};

export default SaveProvider;
