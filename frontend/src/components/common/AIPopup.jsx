import React, { useEffect } from "react";
import { Box, Text, Button, background } from "@chakra-ui/react";

const AIPopup = ({ line, suggestion, onClose }) => {
    
  const popupStyle = {
    position: "absolute",
    top: `${line * 26}px`,
    left: "40%",
    border: "1px solid #ccc",
    borderRadius: "5px",
    padding: "20px",
    zIndex: 1000,
  };

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
