import { Box, Button, HStack } from "@chakra-ui/react";
import { Editor } from "@monaco-editor/react";
import * as monaco from "@monaco-editor/react";
import { useContext } from "react";
import { codeContext } from "../context/codeContext";
import { codeSnippets } from "../utils/enums/constants";
import LanguageSelector from "../components/base/LanguageSelector";
import Output from "./Output.jsx";
import FilesTab from "./FilesTab.jsx";

const CodeEditor = () => {
  const { value, setValue, selectedLanguage } = useContext(codeContext);

  return (
    <>
      <HStack spacing={4}>
        {/* files scroller  */}
        <FilesTab />
        <Box w="40%">
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
