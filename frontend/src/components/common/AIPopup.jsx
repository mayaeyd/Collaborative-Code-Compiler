import React, { useEffect } from "react";
import { Box, Text, Button, background } from "@chakra-ui/react";

const AIPopup = ({ line, suggestion, onClose }) => {

  const popupStyle = {
    position: "absolute",
    top: `35%`,
    left: "35%",
    border: "1px solid #ccc",
    borderRadius: "5px",
    padding: "20px",
    zIndex: 1000,
    maxWidth:'400px'
  };

  return (
    <Box style={popupStyle} backgroundColor="green.200">
      <Text fontWeight="bold">AI Suggestion:</Text>
      <Text>On line {line}</Text>
      <Text>{suggestion}</Text>
      <Button mt={2} size="sm" colorScheme="blue" onClick={onClose}>
        Close
      </Button>
    </Box>
  );
};

export default AIPopup;
