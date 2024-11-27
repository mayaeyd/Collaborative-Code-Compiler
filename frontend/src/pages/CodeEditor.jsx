import { Box, Button, HStack } from "@chakra-ui/react";
import { Editor } from "@monaco-editor/react";
import { useContext } from "react";
import { codeContext } from "../context/codeContext";
import { saveContext } from "../context/saveContext";
import LanguageSelector from "../components/base/LanguageSelector";
import Output from "./Output.jsx";
import { codeSnippets } from "../utils/enums/constants";

const CodeEditor = () => {
  const { value, setValue, selectedLanguage } = useContext(codeContext);
  const { handleSave } = useContext(saveContext);

  const fileName = "my_code_file";

  return (
    <>
      <HStack spacing={4} position="relative">
        <Box position="fixed" bottom="20px" right="20px">
          <Button colorScheme="blue" onClick={() => handleSave(fileName)}>
            Save
          </Button>
        </Box>

        <Box w="50%">
          <LanguageSelector />
          <Editor
            height="75vh"
            language={selectedLanguage}
            defaultValue={codeSnippets[selectedLanguage]}
            theme="vs-dark"
            value={value}
            onChange={(newValue) => setValue(newValue)}
          />
        </Box>

        <Output />
      </HStack>
    </>
  );
};

export default CodeEditor;
