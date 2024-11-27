import { Box, Button, HStack, VStack, Text } from "@chakra-ui/react";
import { Editor } from "@monaco-editor/react";
import { useContext } from "react";
import { codeContext } from "../context/codeContext";
import { codeSnippets } from "../utils/enums/constants";
import LanguageSelector from "../components/base/LanguageSelector";
import Output from "./Output.jsx";

const CodeEditor = () => {
  const { value, setValue, selectedLanguage } = useContext(codeContext);

  const handleLogout = () => {
    alert("Logged out!");
  };


  return (
    <>
      <HStack spacing={4}>
        {/* Editor and Output */}
        <Box w="50%">
        <Text fontSize="lg" fontWeight="bold">
          Welcome, John Doe!
        </Text>
          <LanguageSelector />
          <Editor
            height="75vh"
            language={selectedLanguage}
            defaultValue={codeSnippets[selectedLanguage]}
            theme="vs-dark"
            value={value}
            onChange={(value) => setValue(value)}
          />
        </Box>
        <Output />
      </HStack>
    </>
  );
};

export default CodeEditor;
