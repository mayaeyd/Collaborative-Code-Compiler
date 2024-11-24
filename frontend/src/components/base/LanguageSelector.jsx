import {
  Box,
  Button,
  Menu,
  MenuButton,
  MenuItem,
  MenuList,
  Text,
} from "@chakra-ui/react";
import { LANGUAGE_VERSIONS } from "../../utils/enums/constants";

const languages = Object.entries(LANGUAGE_VERSIONS);

const LanguageSelector = () => {
  return (
    <Box>
      <Text ml={2} mb={4}>
        Language:
      </Text>
      <Menu>
        <MenuButton as={Button}>javascript</MenuButton>
        <MenuList bg="#110c1b">
            <MenuItem>javascript</MenuItem>
            <MenuItem>python</MenuItem>
            <MenuItem>csharp</MenuItem>
        </MenuList>
      </Menu>
    </Box>
  );
};

export default LanguageSelector;
