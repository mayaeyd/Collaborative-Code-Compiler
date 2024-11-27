import { Box, HStack, Button, Text } from "@chakra-ui/react";
import { useAuth } from "../context/AuthContext.jsx";
import CodeEditor from "./CodeEditor.jsx";

function Compiler() {
  const { user, logout } = useAuth();

  const handleLogout = () => {
    logout();
  };

  return (
    <Box minH="100vh" bg="#0f0a19" color="gray.500" px={6} py={8}>
      <HStack spacing={4} mb={4} align="center">
        <Text fontSize="lg" fontWeight="bold">
          Welcome, {user ? user.name : "Guest"}!
        </Text>
        <Button colorScheme="red" onClick={handleLogout}>
          Logout
        </Button>
      </HStack>

      <CodeEditor />
    </Box>
  );
}

export default Compiler;
