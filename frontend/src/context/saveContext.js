import { createContext, useContext } from "react";
import axios from "axios";
import { codeContext } from "./codeContext";  

export const saveContext = createContext();

const SaveProvider = ({ children }) => {
  const { value, selectedLanguage } = useContext(codeContext);  

  
};

export default SaveProvider;
