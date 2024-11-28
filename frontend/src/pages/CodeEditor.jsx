import { Box, Button, HStack } from "@chakra-ui/react";
import { Editor } from "@monaco-editor/react";
import * as monaco from "@monaco-editor/react";
import { useContext } from "react";
import { useState, useEffect, useCallback } from "react";
import { codeContext } from "../context/codeContext";
import { saveContext } from "../context/saveContext";
import LanguageSelector from "../components/base/LanguageSelector";
import Output from "./Output.jsx";
import FilesTab from "./FilesTab.jsx";
import Echo from "laravel-echo";
import Pusher from "pusher-js";
import { useDebouncedCallback } from "use-debounce";

const CodeEditor = () => {
  const { value, setValue, selectedLanguage } =
    useContext(codeContext);
    const [isTyping, setIsTyping] = useState(false);
    const [text, setText] = useState("");
    const { handleSave } = useContext(saveContext);

    window.Pusher = Pusher;

    useEffect(() => {
      const echo = new Echo({
        broadcaster: 'reverb',
        key: 'fgzztbpaq3qu9r6ibtco', 
        host: "localhost",
        wsHost: "localhost",
        wsPort: 8080,  
        forceTLS: false, 
        disableStats: true, 
        enabledTransports: ['ws', 'wss'], 
      });
  
      console.log(echo);
  
      echo.channel('text-updates').listen('TextChangedEvent', (event) => {
        if (!isTyping && event.text !== text) {
          // setIncomingText(event.text);
          console.log("Received: ", event.text);
          setValue(event.text); 
        }
      });
  
      return () => {
        echo.disconnect();
      };
    }, []); 

    const postRequest = useCallback(() => {
      fetch('http://127.0.0.1:8000/api/update-text', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({ text }),
      })
    }, [text]);

    const debouncedPostRequest = useDebouncedCallback(postRequest, 500);


    const handleInputChange = (newValue) => {
      // setText(newValue);
      debouncedPostRequest(); 
      setIsTyping(true);
      setTimeout(() => setIsTyping(false), 500);
    };

  return (
    <>
    <HStack spacing={4}>
    <FilesTab />
      <Box w="50%">
        <LanguageSelector />
        <Button
              mt={5}
              colorScheme="blue"
              onClick={() => handleSave(fileName)}
            >
              Save
            </Button>
        <Editor
          height="75vh"
          language={selectedLanguage}
          defaultValue={codeSnippets[selectedLanguage]}
          theme="vs-dark"
          value={value}
          onChange={handleInputChange}
        />
      </Box>
      <Output />
    </HStack>
    </>
  );
};

export default CodeEditor;
