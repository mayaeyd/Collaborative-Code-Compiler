import React from "react";
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
import { Link as RouterLink } from "react-router-dom"; 


const Register = () => {
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
              <Link color="#4db6ac" href="/">
                Log in
              </Link>
            </Text>
            <VStack spacing={4} align="stretch" mb={6}>
              <Input
                placeholder="Username"
                backgroundColor="#2c1f38"
                borderColor="#333"
                _focus={{ borderColor: "#4db6ac" }}
                color="#e0e0e0"
              />
              <Input
                placeholder="Email"
                backgroundColor="#2c1f38"
                borderColor="#333"
                _focus={{ borderColor: "#4db6ac" }}
                color="#e0e0e0"
              />
              <Input
                placeholder="Password"
                type="password"
                backgroundColor="#2c1f38"
                borderColor="#333"
                _focus={{ borderColor: "#4db6ac" }}
                color="#e0e0e0"
              />
              <Input
                placeholder="Confirm Password"
                type="password"
                backgroundColor="#2c1f38"
                borderColor="#333"
                _focus={{ borderColor: "#4db6ac" }}
                color="#e0e0e0"
              />
            </VStack>
            <Button
              colorScheme="teal"
              variant="solid"
              width="100%"
              backgroundColor="#4db6ac"
              _hover={{ backgroundColor: "#26a69a" }}
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
