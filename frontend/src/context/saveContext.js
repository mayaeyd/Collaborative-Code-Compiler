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

      const response = await axios.post(
        'http://127.0.0.1:8000/api/files/save',  
        {
          name: fileName,  
          content: value,  
          language: selectedLanguage,  
        },
        {
          headers: {
            Authorization: `Bearer ${token}`,  
          }
        }
      );

      if (response.status === 201) {
        console.log('File saved successfully');
        alert('File saved successfully');
      } else {
        console.log('Unexpected response status:', response.status);
      }
    } catch (error) {
      console.error('Error saving file:', error);
      alert('Error saving file');
    }
  };

 
};

export default SaveProvider;
