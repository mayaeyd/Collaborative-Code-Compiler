import { useContext, useState } from "react"
import { codeContext } from "../context/codeContext"
import { Box, Button, Text } from "@chakra-ui/react";
import { LANGUAGE_VERSIONS } from "../utils/enums/constants";
import axios from "axios";

const Output = () => {
    const {value, selectedLanguage, output, setOutput} = useContext(codeContext);
    const version = LANGUAGE_VERSIONS[selectedLanguage];
    const [isLoading, setIsLoading] = useState(false);
    
    console.log(value, selectedLanguage, output);
    
    const runCode = async () => {
      try {
          setIsLoading(true);
        const response = await axios.post(
          "http://127.0.0.1:8000/api/compiler",
          {
            language : selectedLanguage,
            version,
            content : value,
          }
        );
        setIsLoading(false);
        setOutput(response.data.run.output);
      } catch (error) {
        console.error('Error running code:', error);
      } finally {
        setIsLoading(false);
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
        isLoading = {isLoading}
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
        {output ? output : 'Click "Run Code" to see the output here'}
      </Box>
    </Box>
  );
}

export default Output
