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
import { useContext } from "react";
import { codeContext } from "../../context/codeContext";

const languages = Object.entries(LANGUAGE_VERSIONS);
const activeColor = "blue.400";

const LanguageSelector = () => {
  const { selectedLanguage, onSelect } = useContext(codeContext);

  return (
    <Box ml={2} mb={4}>
      <Text mb={2} fontSize="lg">
        Language:
      </Text>
      <Menu isLazy>
        <MenuButton as={Button}>{selectedLanguage}</MenuButton>
        <MenuList bg="#110c1b">
          {languages.map(([language, version]) => (
            <MenuItem
              key={language}
              color={language === selectedLanguage ? activeColor : ""}
              bg={language === selectedLanguage ? "gray.900" : "transparent"}
              _hover={{
                color: activeColor,
                bg: "gray.900",
              }}
              onClick={() => onSelect(language)}
            >
              {language}
              &nbsp;&nbsp;&nbsp;
              <Text as="span" color="gray.600" fontSize={"sm"}>
                ({version})
              </Text>
            </MenuItem>
          ))}
        </MenuList>
      </Menu>
    </Box>
  );
};

export default LanguageSelector;
