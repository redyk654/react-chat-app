import React, { useState } from 'react';
import { Container, Box, VStack, InputLeftElement, InputRightElement, InputGroup, Text, Link } from '@chakra-ui/react';
import { EmailIcon, LockIcon, ViewIcon, ViewOffIcon } from "@chakra-ui/icons";
import Input from './Input/Input';
import Header from './Header/Header';
import ButtonL from "./ButtonL/ButtonL";

export default function Login() {
    
    const [passwordIsShow, setPasswordIsShow] = useState(false);
    const [username, setUsername] = useState('');
    const [pass, setPass] = useState('');
    const [erreur, setErreur] = useState('');

  return (
    <Container bg='twitter.300' maxW='100%' h='100vh' p='90px'>
        <Container bg='#fff' maxW='md' h='70vh' p={12} borderRadius='15px' boxShadow='2xl' >
            <Box>
                <Header>
                    Login
                </Header>
            </Box>
            <VStack spacing={6} mt='65px'>
                <InputGroup>
                    <InputLeftElement mt={1} pointerEvents='none' children={<EmailIcon w={6} h={6} />} />
                    <Input placeholder="Email" type='text' username={username} setUsername={setUsername} />
                </InputGroup>
                <InputGroup>
                    <InputLeftElement mt={1} pointerEvents='none' children={<LockIcon w={6} h={6} />} />
                    <Input placeholder="Password" pass={pass} setPass={setPass} type={!passwordIsShow ? 'password' : 'text'}  />
                    <InputRightElement
                        onClick={() => setPasswordIsShow(!passwordIsShow)}
                        _hover={{cursor: 'pointer'}} 
                        children={passwordIsShow ? <ViewOffIcon mt={2} w={5} h={5} /> : <ViewIcon mt={2} w={5} h={5} /> } 
                    />
                </InputGroup>
            </VStack>
            <VStack spacing={4} mt={4}>
                <Box>
                    <Text color='red.400'>{erreur}</Text>
                </Box>
                <Link href='#' color='gray.700' _hover={{textDecoration: 'none', color: '#000'}}>
                    Forgot your password ?
                </Link>
                <ButtonL username={username} pass={pass} setErreur={setErreur} />
            </VStack>
        </Container>
    </Container>
  )
}
