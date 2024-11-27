import React, { useEffect } from "react";
import { Box, Text, Button, background } from "@chakra-ui/react";

const AIPopup = ({ line, suggestion, onClose }) => {

  return (
    <Box style={popupStyle} backgroundColor="green.200">
      <Text fontWeight="bold">AI Suggestion:</Text>
      <Text>{suggestion}</Text>
      <Button mt={2} colorScheme="blue" size="sm" onClick={onClose}>
        Close
      </Button>
    </Box>
  );
};

export default AIPopup;
