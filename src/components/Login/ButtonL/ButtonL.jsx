import React, { useContext } from 'react';
import { Button } from '@chakra-ui/react';
import { useNavigate, useLocation, } from "react-router-dom";
import { UserContext } from "../../../Context/UserIsLogin";

export default function AlertDialogExample() {

    const { isAuth, signIn, ignOut } = useContext(UserContext);

    const location = useLocation();
    const navigate = useNavigate();

    const checkUser = () => {
        signIn();
        navigate('ChatView');
    }
  
    return (
      <>
        <Button colorScheme='twitter' rounded='50px' w='250px' h='45px' onClick={checkUser}>
          LOG IN
        </Button>
      </>
    )
  }