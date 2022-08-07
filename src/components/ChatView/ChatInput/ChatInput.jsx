import React, { useContext } from 'react';
import { Input, Box, Flex } from "@chakra-ui/react";
import { FaPaperPlane } from "react-icons/fa";
import { UserContext } from '../../../Context/UserIsLogin';

export default function ChatInput(props) {

    const { userInfo } = useContext(UserContext);

    const valueOfInput = (e) => {
        props.setMsgIsTyping(e.target.value)
    }

    const sendMsg = () => {
        if (props.msgIsTyping !== "") {
            const newMsg = {
                id: userInfo.username,
                username: userInfo.username,
                contain: props.msgIsTyping,
                heure: new Date(Date.now()).getHours() + ':' + new Date(Date.now()).getMinutes(),
            };

            props.setListOfMsg(prevState => [...prevState, newMsg]);
            props.setMsgIsTyping('');            
        }
    }

  return (
    <Flex mx={8} p={2}>
        <Input onChange={valueOfInput} value={props.msgIsTyping} borderColor='gray.500' borderRadius='50px' type='text' placeholder='Message' w='73%' me={1} flex='1' />
        <Box onClick={sendMsg} bg='twitter.600' pt={2} px='10px' w='45px' borderRadius='50%' _hover={{cursor: 'pointer'}}>
            <FaPaperPlane color='#fff' size='20px' />
        </Box>
    </Flex>
  )
}
