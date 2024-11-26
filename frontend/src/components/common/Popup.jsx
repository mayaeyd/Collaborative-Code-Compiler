import React, { useContext, useState } from "react";
import { EmailIcon } from "@chakra-ui/icons";
import { emailContext } from "../../context/emailContext";
import {
  Popover,
  PopoverHeader,
  PopoverArrow,
  PopoverBody,
  PopoverContent,
  PopoverCloseButton,
  PopoverTrigger,
  Portal,
  Input,
  InputGroup,
  InputLeftElement,
  Button,
  ButtonGroup,
  RadioGroup,
  Radio,
  Stack,
  Flex,
  Text,
} from "@chakra-ui/react";
import axios from "axios";

const Popup = ({ children, header, body }) => {
  const { email, handleChange, role, setRole, setEmail } =
    useContext(emailContext);
  const [error, setError] = useState(false);
  const [message, setMessage] = useState("");
  const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;

  const handleSend = async () => {
    if (email && role) {
      if (!emailRegex.test(email)) {
        setError(true);
        setMessage("Enter a valid email");
        return;
      }
      setError(false);
      try {
        setEmail("");
        setMessage("...");
        await axios.post("http://127.0.0.1:8000/api/send-email", { email });
        setMessage("Email successfully sent");
      } catch (error) {
        console.log(error);
      }
    }
  };

  return (
    <Popover
      onClose={() => {
        setEmail("");
        setMessage("");
      }}
    >
      <PopoverTrigger>{children}</PopoverTrigger>
      <Portal>
        <PopoverContent>
          <PopoverArrow />
          <PopoverHeader fontWeight="bold">{header}</PopoverHeader>
          <PopoverCloseButton />
          <PopoverBody>
            {body}
            <Text fontSize="sm">{message}</Text>
            <InputGroup mt={4}>
              <InputLeftElement pointerEvents="none" children={<EmailIcon />} />
              <Input
                placeholder={error ? "Enter a valid email" : "Email"}
                focusBorderColor={error ? "red.300" : "green.100"}
                errorBorderColor="red.300"
                onChange={handleChange}
                value={email}
              />
            </InputGroup>
            <Flex justify="space-between" align="center">
              <RadioGroup onChange={setRole} value={role}>
                <Stack direction="row">
                  <Radio value="editor" size="sm">
                    Editor
                  </Radio>
                  <Radio value="viewer" size="sm">
                    Viewer
                  </Radio>
                </Stack>
              </RadioGroup>
              <ButtonGroup
                size="sm"
                mt={2}
                display="flex"
                justifyContent="flex-end"
              >
                <Button colorScheme="green" onClick={handleSend}>
                  Send
                </Button>
              </ButtonGroup>
            </Flex>
          </PopoverBody>
        </PopoverContent>
      </Portal>
    </Popover>
  );
};

export default Popup;
