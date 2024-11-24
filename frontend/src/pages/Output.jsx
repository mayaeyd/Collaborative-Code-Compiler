import { useContext } from "react"
import { codeContext } from "../context/codeContext"
import { Box, Button, Text } from "@chakra-ui/react";

const Output = () => {
    const {value, setValue, selectedLanguage, onSelect} = useContext(codeContext);
  return (
    <Box w="50%">
      <Text mb={2} fontSize="lg">
        Output
      </Text>
      <Button
        variant="outline"
        colorScheme="green"
        mb={4}
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
        Hello
      </Box>
    </Box>
  );
}

export default Output
