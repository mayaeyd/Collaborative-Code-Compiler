import { createContext, useContext, useEffect, useState } from "react";
import axios from "axios";
import { codeContext } from "./codeContext";

export const saveContext = createContext();

const SaveProvider = ({ children }) => {
  const { value, selectedLanguage, setValue, setSelectedLanguage } = useContext(codeContext);
  const [fileId, setFileId] = useState(null);
  const [userFiles, setUserFiles] = useState([]); 

  useEffect(() => {
    const fetchUserFiles = async () => {
      try {
        const token = localStorage.getItem("token");
        if (!token) return;
  
        const response = await axios.get("http://127.0.0.1:8000/api/files/owner", {
          headers: {
            Authorization: `Bearer ${token}`,
          },
        });
  
        if (response.status === 200) {
          setUserFiles(response.data.files);  
        }
      } catch (error) {
        console.error("Error fetching user files:", error);
      }
    };
  
    fetchUserFiles();
  }, []);
  

  useEffect(() => {
    const fetchFile = async () => {
      if (!fileId) return;

      try {
        const token = localStorage.getItem("token");
        const response = await axios.get(`http://127.0.0.1:8000/api/files/${fileId}`, {
          headers: {
            Authorization: `Bearer ${token}`,
          },
        });

        if (response.status === 200) {
          setValue(response.data.content);
          setSelectedLanguage(response.data.language);
        }
      } catch (error) {
        console.error("Error fetching file:", error);
      }
    };

    fetchFile();
  }, [fileId, setValue, setSelectedLanguage]);

  const handleSave = async (fileName) => {
    try {
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

      if (response.status === 201) {
        const savedFileId = response.data.id; 
        setFileId(savedFileId);

        setUserFiles((prevFiles) => [...prevFiles, response.data]);
      }
    } catch (error) {
      console.error("Error saving file:", error);
    }
  };

  return (
    <saveContext.Provider value={{ handleSave, fileId, userFiles, setFileId }}>
      {children}
    </saveContext.Provider>
  );
};

export default SaveProvider;
