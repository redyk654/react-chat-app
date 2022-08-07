import React, { useContext } from 'react';
import { Box } from "@chakra-ui/react";
import { UserContext } from "../../../../Context/UserIsLogin";

export default function BoxMsg(props) {
    const { userInfo } = useContext(UserContext);

  return (
    <Box
        key={props.id}
        w='100%'
        p={2}
        display='flex'
        justifyContent={`${props.username === userInfo.username ? 'flex-end' : 'flex-start'}`}
    >
        <Box maxW='50%' minW='30%' px='8px' borderRadius='10px' bg={`${props.username === userInfo.username ? 'blue.400' : 'white'}`}>
            <Box textAlign='left' fontWeight='600'>{props.username === userInfo.username ? 'Me' : props.username}</Box>
            <Box textAlign='justify' fontWeight='400'>{props.contain}</Box>
            <Box textAlign='right'>{props.heure}</Box>
        </Box>
    </Box>
  )
}
