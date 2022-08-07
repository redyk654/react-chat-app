import React, { useContext } from 'react';
import { Button } from '@chakra-ui/react';
import { useNavigate, useLocation, } from "react-router-dom";
import { UserContext } from "../../../Context/UserIsLogin";

export default function ButtonL(props) {

    const { isAuth, signIn, ignOut, setUserInfo } = useContext(UserContext);

    const location = useLocation();
    const navigate = useNavigate();

    const checkUser = () => {

        const data = new FormData();
        data.append('nom', props.username);
        data.append('mdp', props.pass);

        const req = new XMLHttpRequest();
        req.open('POST', 'http://serveur/serverback/connexion.php');

        req.addEventListener('load', () => {
            if (req.status >= 200 && req.status < 400) {
                if (req.responseText == "identifiant ou mot de passe incorrect") {
                    props.setErreur('identifiant ou mot de passe incorrect');
                } else {
                    const result = JSON.parse(req.responseText);
                    setUserInfo({
                        username: result.nom_user,
                    });

                    setUserInfo({username: props.username, pass: props.pass});
                    signIn();
                    navigate('ChatView');
                }
            } else {
                console.log(req.status + " " + req.statusText);
            }
        });

        req.send(data);
    }
  
    return (
      <>
        <Button colorScheme='twitter' rounded='50px' w='250px' h='45px' onClick={checkUser}>
          LOG IN
        </Button>
      </>
    )
  }