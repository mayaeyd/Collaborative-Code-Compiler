import { useContext, useState } from "react";
import { codeContext } from "../context/codeContext";
import { LANGUAGE_VERSIONS } from "../utils/enums/constants";
import axios from "axios";
import { Box, Button, Flex, Text, useToast } from "@chakra-ui/react";
import Popup from "../components/common/Popup";
import { useAIAnalyze } from "../utils/aiAnalyze";
import AIPopup from "../components/common/AIPopup";

const Output = () => {
  const { value, selectedLanguage, output, setOutput, aiResponse, setAIResponse } = useContext(codeContext);
  const toast = useToast();
  const version = LANGUAGE_VERSIONS[selectedLanguage];
  const [isLoading, setIsLoading] = useState(false);
  const [isError, setIsError] = useState(false);
  const [showPopup, setShowPopup] = useState(false);
  const { aiAnalyze, loading } = useAIAnalyze();

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

  const handleAnalyzeClick = async (output) => {
    const error = output;
    const response = await aiAnalyze(error);
    let parsedResponse;
    if (typeof response === "string") {
      try {
        parsedResponse = JSON.parse(response);
      } catch (error) {
        console.error("Error parsing response string:", error);
        return; // Early return if parsing fails
      }
    } else {
      parsedResponse = response; // If it's already an object, use it directly
    }

    console.log(parsedResponse.line);
    console.log(parsedResponse.suggestion);
    setAIResponse(parsedResponse);

    if (parsedResponse) {
      setShowPopup(true);
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
            onClick={() => handleAnalyzeClick(output)}
          >
            <Flex align="center" gap="8px">
              {loading ? null : (
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  width="20"
                  height="20"
                  viewBox="0 0 24 24"
                  fill="none"
                  stroke="#1A202C"
                  strokeWidth="2"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  className="lucide lucide-sparkles"
                >
                  <path d="M9.937 15.5A2 2 0 0 0 8.5 14.063l-6.135-1.582a.5.5 0 0 1 0-.962L8.5 9.936A2 2 0 0 0 9.937 8.5l1.582-6.135a.5.5 0 0 1 .963 0L14.063 8.5A2 2 0 0 0 15.5 9.937l6.135 1.581a.5.5 0 0 1 0 .964L15.5 14.063a2 2 0 0 0-1.437 1.437l-1.582 6.135a.5.5 0 0 1-.963 0z" />
                  <path d="M20 3v4" />
                  <path d="M22 5h-4" />
                  <path d="M4 17v2" />
                  <path d="M5 18H3" />
                </svg>
              )}
              {loading ? "Analyzing..." : "AI Analyzer"}
            </Flex>
          </Button>
        </Flex>
      </Flex>

      {showPopup && (
        <AIPopup
          line={aiResponse.line}
          suggestion={aiResponse.suggestion}
          onClose={() => setShowPopup(false)}
        />
      )}
    </Box>
  );
};

export default Output;
