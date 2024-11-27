import { Box, Button, HStack } from "@chakra-ui/react";
import { Editor } from "@monaco-editor/react";
import { useContext } from "react";
import { codeContext } from "../context/codeContext";
import { codeSnippets } from "../utils/enums/constants";
import LanguageSelector from "../components/base/LanguageSelector";
import Output from "./Output.jsx";

const CodeEditor = () => {
  const { value, setValue, selectedLanguage } = useContext(codeContext);

  const handleSave = () => {
    alert("Code saved!");
  };

  return (
    <>
      <HStack spacing={4}>
        <Box w="50%">
          <HStack spacing={4} align="center">
            <LanguageSelector />
            <Button colorScheme="blue" onClick={handleSave} mt={5}>
              Save
            </Button>
          </HStack>
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
