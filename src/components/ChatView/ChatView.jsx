import React, { useContext, useState } from 'react';
import { Container, Box } from "@chakra-ui/react";
import io from "socket.io-client";
import ChatViewHeader from './ChatViewHeader/ChatViewHeader';
import ChatInput from './ChatInput/ChatInput';
import ChatBody from './ChatBody/ChatBody';
import { UserContext } from "../../Context/UserIsLogin";

export default function ChatView() {

    const { userInfo } = useContext(UserContext);
    const [msgIsTyping, setMsgIsTyping] = useState('');
    const [listOfMsg, setListOfMsg] = useState([]);

  return (
    <Container bg='twitter.300' maxW='100%' h='100vh' p='90px'>
        <Box bg='#fff' maxW='34vw' h='78vh' m='auto' borderRadius='15px' boxShadow='2xl'>
            <ChatViewHeader />
            <ChatBody listOfMsg={listOfMsg} />
            <ChatInput
                msgIsTyping={msgIsTyping}
                setMsgIsTyping={setMsgIsTyping}
                listOfMsg={listOfMsg}
                setListOfMsg={setListOfMsg}
            />
        </Box>
    </Container>
  )
}
