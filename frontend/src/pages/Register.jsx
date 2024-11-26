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
import { useNavigate } from "react-router-dom";
import { useAuth } from "../context/AuthContext";

const Register = () => {
  const { register, error, setError } = useAuth();
  const [formData, setFormData] = useState({
    username: "",
    email: "",
    password: "",
    confirmPassword: "",
  });
  const navigate = useNavigate();

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setFormData((prevState) => ({
      ...prevState,
      [name]: value,
    }));
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setError("");

    const result = await register(formData);

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
              Create Account
            </Text>
            <Text fontSize="md" align="center" mb={6} color="#e0e0e0">
              Already have an account?{" "}
              <Link color="#4db6ac" href="/login">
                Log in
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
              onSubmit={handleSubmit}
            >
              <Input
                name="username"
                value={formData.username}
                onChange={handleInputChange}
                placeholder="Username"
                backgroundColor="#2c1f38"
                borderColor="#333"
                _focus={{ borderColor: "#4db6ac" }}
                color="#e0e0e0"
              />
              <Input
                name="email"
                value={formData.email}
                onChange={handleInputChange}
                placeholder="Email"
                backgroundColor="#2c1f38"
                borderColor="#333"
                _focus={{ borderColor: "#4db6ac" }}
                color="#e0e0e0"
              />
              <Input
                name="password"
                type="password"
                value={formData.password}
                onChange={handleInputChange}
                placeholder="Password"
                backgroundColor="#2c1f38"
                borderColor="#333"
                _focus={{ borderColor: "#4db6ac" }}
                color="#e0e0e0"
              />
              <Input
                name="confirmPassword"
                type="password"
                value={formData.confirmPassword}
                onChange={handleInputChange}
                placeholder="Confirm Password"
                backgroundColor="#2c1f38"
                borderColor="#333"
                _focus={{ borderColor: "#4db6ac" }}
                color="#e0e0e0"
              />
            </VStack>
            <Button
              type="submit"
              colorScheme="teal"
              variant="solid"
              width="100%"
              backgroundColor="#4db6ac"
              _hover={{ backgroundColor: "#26a69a" }}
              onClick={(e) => handleSubmit(e)}
            >
              Create Account
            </Button>
          </Box>
        </Container>
      </Box>
    </ChakraProvider>
  );
};

export default Register;
