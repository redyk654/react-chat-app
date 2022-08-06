import React from 'react';
import { VStack, Box, Flex } from "@chakra-ui/react";
import './ChatBody.css';

export default function ChatBody() {

    const userInfo = {id: 1, name: 'Chris'}

    const listOFMsg = [
        {
            id: 1,
            username: 'Chris',
            contain: "Lorem ipsum, adipisicing elit. At, optio",
            heure: '10:30'
        },
        {
            id: 2,
            username: 'Fred',
            contain: "Lorem ipsum, dolor sit amet consectetur adipisicing elit. At, optio",
            heure: '10:30'
        },
        {
            id: 3,
            username: 'Brad',
            contain: "Lorem ipsum, dolor sit adipisicing elit. At, optio",
            heure: '10:30'
        },
        {
            id: 4,
            username: 'Elsa',
            contain: "Lorem ipsum, dolor sit amet consectetur adipisicing elit. At, optio",
            heure: '10:30'
        },
        {
            id: 5,
            username: 'Woody',
            contain: "Lorem ipsum, dolor sit amet",
            heure: '10:30'
        },
    ]

  return (
    <VStack bg='gray.400' w='100%' h='400px' p={4} overflowY='scroll' >
        {listOFMsg.map((item) => (
            <Box 
                key={item.id} 
                w='100%'
                p={2}
                display='flex'
                justifyContent={`${item.id === 1 ? 'flex-end' : 'flex-start'}`}
            >                
                <Box maxW='50%' px='8px' borderRadius='10px' bg={`${item.id === 1 ? 'blue.400' : 'white'}`}>
                    <Box textAlign='left' fontWeight='600'>{item.username === userInfo.name ? 'Me' : item.username}</Box>
                    <Box textAlign='justify' fontWeight='400'>{item.contain}</Box>
                    <Box textAlign='right'>{item.heure}</Box>
                </Box>
            </Box>
        ))}
    </VStack>
  )
}
