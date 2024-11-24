import React from 'react';
import { ChakraProvider, Box, Text, Link, VStack, Code, Grid, theme, Container, Input, StackDivider } from '@chakra-ui/react';

const Register = () => {
  return (
    <ChakraProvider theme={theme}>
      <Container>
        <Box borderWidth="1px" borderRadius="1g" p={4}>
          <Text fontSize="2xl" align="center">Create Account</Text>
          <Text fontSize="md" align="center" pb={4}>Already have an account? <Link color="teal.500" href='#'>Log in</Link></Text>
          <VStack
            spacing={2}
            align="stretch"
          >
            <Input placeholder='Username' />
            <Input placeholder='Email' />
            <Input placeholder='Password' />
            <Input placeholder='Confirm Password' />
          </VStack>


        </Box>
      </Container>
    </ChakraProvider>
  );
}

export default Register;
