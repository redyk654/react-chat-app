import React from 'react';
import { Input, Box, Flex } from "@chakra-ui/react";
import { FaPaperPlane } from "react-icons/fa";

export default function ChatInput() {
  return (
    <Flex mx={8} p={2}>
        <Input borderColor='gray.500' borderRadius='50px' type='text' placeholder='Message' w='73%' me={1} flex='1' />
        <Box bg='twitter.600' pt={2} px='10px' w='45px' borderRadius='50%' _hover={{cursor: 'pointer'}}>
            <FaPaperPlane color='#fff' size='20px' />
        </Box>
    </Flex>
  )
}
