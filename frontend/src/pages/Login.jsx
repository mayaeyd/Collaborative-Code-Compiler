import React, { useState } from "react";
import {
  ChakraProvider,
  Box,
  Text,
  Link,
  VStack,
  Input,
  Button,
  theme,
  Container,
} from "@chakra-ui/react";
import { useAuth } from "../context/AuthContext";

const Login = () => {
  const { login, error, setError } = useAuth();
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const handleLogin = async (e) => {
    e.preventDefault();
    setError("");

    const result = await login(email, password);

    if (!result.success) {
      setError(result.message);
    }
  };

  return (
    <ChakraProvider theme={theme}>
      <Box backgroundColor="#0f0a19" minHeight="100vh">
        <Container
          display="flex"
          justifyContent="center"
          alignItems="center"
          minHeight="100vh"
        >
          <Box
            borderWidth="1px"
            borderRadius="lg"
            p={6}
            maxWidth="400px"
            width="100%"
            backgroundColor="#1a1420"
            borderColor="#333"
          >
            <Text fontSize="2xl" align="center" mb={4} color="#e0e0e0">
              Log In
            </Text>
            <Text fontSize="md" align="center" mb={6} color="#e0e0e0">
              Don't have an account?{" "}
              <Link color="#4db6ac" href="/register">
                Create one
              </Link>
            </Text>
            {error && (
              <Text color="red.500" fontSize="sm" mb={4} align="center">
                {error}
              </Text>
            )}
            <VStack
              as="form"
              spacing={4}
              align="stretch"
              mb={6}
              onSubmit={handleLogin}
            >
              <Input
                placeholder="Email"
                backgroundColor="#2c1f38"
                borderColor="#333"
                _focus={{ borderColor: "#4db6ac" }}
                color="#e0e0e0"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
              />
              <Input
                placeholder="Password"
                type="password"
                backgroundColor="#2c1f38"
                borderColor="#333"
                _focus={{ borderColor: "#4db6ac" }}
                color="#e0e0e0"
                value={password}
                onChange={(e) => setPassword(e.target.value)}
              />
              <Button
                type="submit"
                colorScheme="teal"
                variant="solid"
                width="100%"
                backgroundColor="#4db6ac"
                _hover={{ backgroundColor: "#26a69a" }}
              >
                Log In
              </Button>
            </VStack>
          </Box>
        </Container>
      </Box>
    </ChakraProvider>
  );
};

export default Login;

