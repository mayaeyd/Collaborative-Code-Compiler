import React, { useContext } from "react";
import { EmailIcon } from "@chakra-ui/icons";
import { emailContext } from "../../context/emailContext";
import {
  Popover,
  PopoverFooter,
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
  const { email, handleChange , role , setRole } = useContext(emailContext);  

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
              <Input placeholder="Email" focusBorderColor="green.100" onChange={handleChange} value={email}/>
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
                <Button colorScheme="green">Send</Button>
              </ButtonGroup>
            </Flex>
          </PopoverBody>
        </PopoverContent>
      </Portal>
    </Popover>
  );
};

export default Popup;
