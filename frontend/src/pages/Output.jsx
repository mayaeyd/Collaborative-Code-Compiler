import { useContext, useState } from "react";
import { codeContext } from "../context/codeContext";
import { Box, Button, Text, useToast } from "@chakra-ui/react";
import { LANGUAGE_VERSIONS } from "../utils/enums/constants";
import axios from "axios";

const Output = () => {
  const { value, selectedLanguage, output, setOutput } =
    useContext(codeContext);
  const toast = useToast();
  const version = LANGUAGE_VERSIONS[selectedLanguage];
  const [isLoading, setIsLoading] = useState(false);
  const [isError, setIsError] = useState(false);

  console.log(value, selectedLanguage, output);

  const runCode = async () => {
    try {
      setIsLoading(true);
      const response = await axios.post("http://127.0.0.1:8000/api/compiler", {
        language: selectedLanguage,
        version,
        content: value,
      });
      setIsLoading(false);
      setOutput(response.data.run.output);
      response.data.run.stderr ? setIsError(true) : setIsError(false);
    } catch (error) {
      console.error(error);
      toast({
        title: "An error occurred.",
        description: error.message || "Unable to run code",
        status: "error",
        duration: 6000,
      });
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
        isLoading={isLoading}
        onClick={() => runCode()}
      >
        Run Code
      </Button>
      <Box
        height="75vh"
        p={2}
        color={isError ? "red.400" : ""}
        border="1px solid"
        borderRadius={4}
        borderColor={isError ? "red.500" : "#333"}
      >
        {output ? output : 'Click "Run Code" to see the output here'}
      </Box>
    </Box>
  );
};

export default Output;
