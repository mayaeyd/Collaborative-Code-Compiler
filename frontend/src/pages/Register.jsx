import React from 'react';
import { ChakraProvider, Box, Text, Link, VStack, Input, Button, theme, Container } from '@chakra-ui/react';

const Register = () => {
  return (
    <ChakraProvider theme={theme}>
      <Container
        display="flex"
        justifyContent="center"
        alignItems="center"
        minHeight="100vh"
      >
        <Box borderWidth="1px" borderRadius="lg" p={6} maxWidth="400px" width="100%">
          <Text fontSize="2xl" align="center" mb={4}>
            Create Account
          </Text>
          <Text fontSize="md" align="center" mb={6}>
            Already have an account?{' '}
            <Link color="teal.500" href="#">
              Log in
            </Link>
          </Text>
          <VStack spacing={4} align="stretch" mb={6}>
            <Input placeholder="Username" />
            <Input placeholder="Email" />
            <Input placeholder="Password" type="password" />
            <Input placeholder="Confirm Password" type="password" />
          </VStack>
          <Button colorScheme="teal" variant="solid" width="100%">
            Create Account
          </Button>
        </Box>
      </Container>
    </ChakraProvider>
  );
};

export default Register;
