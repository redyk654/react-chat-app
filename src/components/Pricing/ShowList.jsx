import React from 'react';
import { Stack, HStack, Text } from "@chakra-ui/react";
import { CheckCircleIcon } from "@chakra-ui/icons"


export default function ShowList(props) {
  return (
    <Stack as='ul' spacing='20px' pt='24px'>
        {props.listItem.map((item) => (
            <HStack as='li' key={item.id}>
                <CheckCircleIcon w='22px' h='22px' color='slateblue' />
                <Text>{item.contain}</Text>
            </HStack>
        ))}
    </Stack>
  )
}
