import React from "react";
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
  Box,
  Button,
  Flex,
  Text,
  useToast,
  Input,
  InputGroup,
  InputLeftElement,
} from "@chakra-ui/react";

import { EmailIcon } from "@chakra-ui/icons";

const Popup = ({ children, header, body }) => {
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
              <Input placeholder="Email" focusBorderColor="green.100" />
            </InputGroup>
          </PopoverBody>
        </PopoverContent>
      </Portal>
    </Popover>
  );
};

export default Popup;
