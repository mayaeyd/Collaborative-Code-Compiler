import { Box, Text, Button, VStack, Input } from "@chakra-ui/react";
import axios from "axios";
import React, { useContext, useState } from "react";
import { codeContext } from "../context/codeContext";
import { filesContext } from "../context/filesContext";

const FilesTab = () => {
  const [fileName, setFileName] = useState("");
  const { value, setValue, selectedLanguage , setSelectedLanguage } = useContext(codeContext);
  const {createFile , files , setFiles} = useContext(filesContext);
  
  const handleAddFile = ()=>{
    if (fileName.trim() === "") return;
    const newFile = {
      name: fileName
    };
    createFile(fileName , value, selectedLanguage);
    setFiles([...files, newFile]);
    setFileName("");
  }

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
            <Text
              key={index}
              p={2}
              border="1px solid teal"
              borderRadius="md"
              w="100%"
              onClick={()=>{
                console.log(file.id, file.content, file.language);
                setValue(file.content);
                setSelectedLanguage(file.language);
              }}
            >
              {file.name}
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
