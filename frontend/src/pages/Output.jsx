import { useContext } from "react"
import { codeContext } from "../context/codeContext"
import { Box, Button, Text } from "@chakra-ui/react";
import { LANGUAGE_VERSIONS } from "../utils/enums/constants";
import axios from "axios";

const Output = () => {
    const {value, selectedLanguage, output, setOutput} = useContext(codeContext);
    const version = LANGUAGE_VERSIONS[selectedLanguage];
    
    console.log(value, selectedLanguage, output);
    
    const runCode = async () => {
      try {
          setOutput('Loading...');
        const response = await axios.post(
          "http://127.0.0.1:8000/api/compiler",
          {
            language : selectedLanguage,
            version,
            content : value,
          }
        );
        setOutput(response.data.run.output);
      } catch (error) {
          console.error('Error running code:', error);
      }
    };

  return (
    <Box w="50%">
      <Text mb={2} fontSize="lg">
        Output
      </Text>
      <Button
        variant="outline"
        colorScheme="green"
        mb={4}
        onClick={() => runCode()}
      >
        Run Code
      </Button>
      <Box
        height="75vh"
        p={2}
        border="1px solid"
        borderRadius={4}
        borderColor="#333"
      >
        {output}
      </Box>
    </Box>
  );
}

export default Output
