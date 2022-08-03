import React from 'react';
import { Box, Flex, Center, Button, Text, Heading } from "@chakra-ui/react";
import Header from '../Header/Header';
import Pricing from '../Pricing/Pricing';
import Login from '../Login/Login';

export default function MainView() {
  return (
    <main className='App'>
        <Login />
    </main>
  )
}
