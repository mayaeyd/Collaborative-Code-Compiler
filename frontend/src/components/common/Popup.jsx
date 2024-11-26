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
} from "@chakra-ui/react";

const Popup = ({ children, header, body }) => {
  const { email, handleChange, role, setRole } = useContext(emailContext);
  const [error, setError] = useState(false);
  const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
  const handleClick = () => {
    if (email && role) {
      if (!emailRegex.test(email)) {
        setError(true);
        return console.log("enter a valid email");
      }
      setError(false);
      console.log("submitted ", email, role);
    }
  };

  return (
    <Popover>
      <PopoverTrigger>{children}</PopoverTrigger>
      <Portal>
        <PopoverContent>
          <PopoverArrow />
          <PopoverHeader fontWeight="bold">{header}</PopoverHeader>
          <PopoverCloseButton />
          <PopoverBody>
            {body}
            <InputGroup mt={4}>
              <InputLeftElement pointerEvents="none" children={<EmailIcon />} />
              <Input
                placeholder={error ? "Enter a valid email" : "Email"}
                
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
                <Button colorScheme="green" onClick={handleClick}>
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
