import React from 'react';
import { VStack, Box, Flex } from "@chakra-ui/react";
import BoxMsg from './BoxMsg/BoxMsg';

export default function ChatBody(props) {

  return (
    <VStack bg='gray.400' w='100%' h='400px' p={4} overflowY='scroll' >
        {props.listOfMsg.map((item) => (
            <BoxMsg
                id={item.id}
                contain={item.contain}
                username={item.username}
                heure={item.heure}
            />
        ))}
    </VStack>
  )
}
