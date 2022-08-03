import React from 'react';
import { Heading } from "@chakra-ui/react";

export default function Header(props) {
  return (
    <Heading as='h1' fontSize='4xl'>
        {props.children}
    </Heading>
  )
}
