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
      <HStack spacing={4}>
        <Box w="50%">
          <HStack spacing={2} mt={4}>
            <LanguageSelector />
            <Button
              mt={5}
              colorScheme="blue"
              onClick={() => handleSave(fileName)}
            >
              Save
            </Button>
          </HStack>

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
