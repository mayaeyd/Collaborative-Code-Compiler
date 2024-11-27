import { Box, Text, Button, VStack, Input } from "@chakra-ui/react";
import axios from "axios";
import React, { useContext, useState } from "react";
import { codeContext } from "../context/codeContext";

const FilesTab = () => {
  const [files, setFiles] = useState([]);
  const [fileName, setFileName] = useState("");
  const { value, setValue, selectedLanguage } = useContext(codeContext);

  const handleAddFile = async () => {
    if (fileName.trim() === "") return;
    setFiles([...files, fileName]);
    setFileName("");
    
    try{
        const response = await axios.post("http://127.0.0.1:8000/api/files", {
            name: fileName,
            content: value,
            language: selectedLanguage,
            owner_id: 1,
          });
          console.log(response.data);
    }catch(error){
        console.error(error);
    }
    
  };

  return (
    <Box
      w="20%"
      h="90vh"
      border="1px solid white"
      p={4}
      bg="gray.800"
      color="white"
      alignSelf="flex-start"
      overflowY="scroll"
    >
      <Button colorScheme="teal" w="100%" mb={4} onClick={handleAddFile}>
        Add File
      </Button>
      <Input
        placeholder="Enter file name"
        value={fileName}
        onChange={(e) => setFileName(e.target.value)}
        mb={4}
        bg="gray.700"
        color="white"
        _placeholder={{ color: "gray.400" }}
      />
      <VStack align="start" spacing={2}>
        {files.length > 0 ? (
          files.map((file, index) => (
            <Text key={index} p={2} border="1px solid teal" borderRadius="md">
              {file}
            </Text>
          ))
        ) : (
          <Text color="gray.400">No files added</Text>
        )}
      </VStack>
    </Box>
  );
};

export default FilesTab;
