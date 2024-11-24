import { Box } from "@chakra-ui/react";
import { Editor } from "@monaco-editor/react";

const CodeEditor = () => {
  return (
    <Box w="50%">
      <Editor
        height="75vh"
        language="javascript"
        defaultValue="// some comment"
        theme="vs-dark"
      />
    </Box>
  );
};

export default CodeEditor;
