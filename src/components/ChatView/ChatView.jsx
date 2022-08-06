import React from 'react';
import { Container, Box, Flex } from "@chakra-ui/react";
import ChatViewHeader from './ChatViewHeader/ChatViewHeader';
import ChatInput from './ChatInput/ChatInput';
import ChatBody from './ChatBody/ChatBody';

export default function ChatView() {
  return (
    <Container bg='twitter.300' maxW='100%' h='100vh' p='90px'>
        <Box bg='#fff' maxW='34vw' h='78vh' m='auto' borderRadius='15px' boxShadow='2xl'>
            <ChatViewHeader />
            <ChatBody />
            <ChatInput />
        </Box>
    </Container>
  )
}
