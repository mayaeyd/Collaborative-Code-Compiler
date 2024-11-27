import { useContext, useState } from "react";
import { codeContext } from "../context/codeContext";
import { LANGUAGE_VERSIONS } from "../utils/enums/constants";
import axios from "axios";
import { Box, Button, Flex, Text, useToast } from "@chakra-ui/react";
import Popup from "../components/common/Popup";
import { aiAnalyze } from "../utils/aiAnalyze";

const Output = () => {
  const { value, selectedLanguage, output, setOutput } =
    useContext(codeContext);
  const toast = useToast();
  const version = LANGUAGE_VERSIONS[selectedLanguage];
  const [isLoading, setIsLoading] = useState(false);
  const [isError, setIsError] = useState(false);

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
      <Flex justify={"space-between"}>
        <Button
          variant="outline"
          colorScheme="green"
          mb={4}
          isLoading={isLoading}
          onClick={() => runCode()}
        >
          Run Code
        </Button>
        <Popup
          header="Enter the email"
          body="Enter the email of the person you want to collaborate with to start coding together in real time!"
        >
          <Button variant="solid" colorScheme="green" mb={4}>
            Collaborate
          </Button>
        </Popup>
      </Flex>
      <Flex
        flexDirection="column"
        width="100%"
        height="75vh"
        p={2}
        border="1px solid"
        borderRadius={4}
        borderColor={isError ? "red.500" : "#333"}
        color={isError ? "red.400" : ""}
      >
        <Box flex="1" overflowY="auto">
          {output ? output : 'Click "Run Code" to see the output here'}
        </Box>
        <Flex justify="flex-end" mt={2}>
          <Button
            display={isError ? "" : "none"}
            colorScheme="blue"
            onClick={() => aiAnalyze(output)}
          >
            AI Analyzer
          </Button>
        </Flex>
      </Flex>
    </Box>
  );
};

export default Output;
