import React, { useContext, useState, useEffect } from 'react';
import { Container, Box } from "@chakra-ui/react";
import io from "socket.io-client";
import ChatViewHeader from './ChatViewHeader/ChatViewHeader';
import ChatInput from './ChatInput/ChatInput';
import ChatBody from './ChatBody/ChatBody';
import { UserContext } from "../../Context/UserIsLogin";

let socket = io.connect("http://serveur:3005");

export default function ChatView() {

    const { userInfo, setUserInfo } = useContext(UserContext);
    const [msgIsTyping, setMsgIsTyping] = useState('');
    const [listOfMsg, setListOfMsg] = useState([]);
    const [id, setId] = useState(1);

    useEffect(() => {
        socket.on("send_msg", (data) => {
            setListOfMsg((prevState) => [...prevState, data]);
        });
    }, [socket]);

    useEffect(() => {
        // Recupère l'id de l'utilisateur connecté
        let user = userInfo;
        user.id = socket.id;
        setUserInfo(user);
    }, []);

  return (
    <Container bg='twitter.300' maxW='100%' h='100vh' p='90px'>
        <Box bg='#fff' maxW='34vw' h='78vh' m='auto' borderRadius='15px' boxShadow='2xl'>
            <ChatViewHeader />
            <ChatBody listOfMsg={listOfMsg} />
            <ChatInput
                socket={socket}
                id={id}
                setId={setId}
                msgIsTyping={msgIsTyping}
                setMsgIsTyping={setMsgIsTyping}
                listOfMsg={listOfMsg}
                setListOfMsg={setListOfMsg}
            />
        </Box>
    </Container>
  )
}
