import { Box } from "@chakra-ui/react";
import { Editor } from "@monaco-editor/react";
import { useContext } from "react";
import { codeContext } from "../context/codeContext";

const CodeEditor = () => {
  const { value, setValue, selectedLanguage, onSelect } = useContext(codeContext);
  return (
    <Box w="50%">
      <Editor
        height="75vh"
        language={selectedLanguage}
        defaultValue={codeSnippets[selectedLanguage]}
        theme="vs-dark"
        value={value}
        onChange={value => setValue(value)}
      />
    </Box>
  );
};

export default CodeEditor;
