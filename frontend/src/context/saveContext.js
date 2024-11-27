import { createContext, useContext } from "react";
import axios from "axios";
import { codeContext } from "./codeContext";  

export const saveContext = createContext();

const SaveProvider = ({ children }) => {
  const { value, selectedLanguage } = useContext(codeContext);  

  const handleSave = async (fileName) => {
    try {
      console.log('Saving file with the following details:');
      console.log('Name:', fileName);
      console.log('Content:', value);  
      console.log('Language:', selectedLanguage);  

      const token = localStorage.getItem('token');  
      if (!token) {
        console.log('No token found. Please log in again.');
        alert('You need to be logged in to save files.');
        return;  
      }

      
  };

  return (
    <saveContext.Provider value={{ handleSave }}>
      {children}
    </saveContext.Provider>
  );
};

export default SaveProvider;
