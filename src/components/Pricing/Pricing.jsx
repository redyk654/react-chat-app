import React from 'react';
import { Box, Flex, Text, Heading, Button } from "@chakra-ui/react";
import ShowList from './ShowList';

export default function Pricing() {

    const listItem = [
        {
            id: 1,
            contain: 'International calling and messaging API'
        },
        {
            id: 1,
            contain: 'International calling and messaging API'
        },
        {
            id: 1,
            contain: 'International calling and messaging API'
        },
        {
            id: 1,
            contain: 'International calling and messaging API'
        },
    ]
    
  return (
    <Box maxW='920px' m='auto' mt='-150px' >
        <Flex>
            <Box bg='#f0eafb' p='60px'>
                <Text fontSize='24px' fontWeight='800'>
                    Premium PRO
                </Text>
                <Heading as='h3'fontSize='60px'>
                    329$
                </Heading>
                <Text color='#171923' fontSize='18px' fontWeight='500' mt='8px'>
                    billed just once
                </Text>
                <Button colorScheme='purple' size='lg' mt='24px'>
                    Get Started
                </Button>
            </Box>
            <Box p='70px' fontSize='18px' bg='#fff'>
                <Text textAlign='left'>
                    Acces these features when you get this pricing
                    package business
                </Text>
                <ShowList listItem={listItem} />
            </Box>
        </Flex>
    </Box>

  )
}
