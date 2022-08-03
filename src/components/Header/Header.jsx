import React from 'react';
import { Box, Stack, Text, Heading } from "@chakra-ui/react";

export default function Header() {
  return (
    <Box
        bg='slateblue'
        color='#f7fafc'
        pt='90px'
        pb='198px'
        // px='32px'
        as='section'
    >
        <Heading
            fontWeight='800'
            fontSize='48px'
            
        >
            Simple pricing for your business
        </Heading>
        <Text
            fontWeight='500'
            fontSize='24px'
            pt='16px'
        >
            Plan that are carefully crafted to suit your business
        </Text>
    </Box>
  )
}
