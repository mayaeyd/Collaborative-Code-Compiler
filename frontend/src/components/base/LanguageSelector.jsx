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
        <MenuList>
          {languages.map(([language, version]) => (
            <MenuItem
              key={language}
              onClick={() => onSelect(language)}
            >
              {language}
              &nbsp;&nbsp;&nbsp;
              <Text as="span" fontSize={"sm"}>
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
