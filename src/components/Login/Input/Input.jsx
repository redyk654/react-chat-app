import React, { Fragment } from 'react';
import { Input } from '@chakra-ui/react';

export default function (props) {

    const valueOfInput = (e) => {
        if (props.placeholder === "Password") {
            props.setPass(e.target.value)
        } else if (props.placeholder === "Email") {
            props.setUsername(e.target.value)
        }
    }

  return (
    <Fragment>
        <Input onChange={valueOfInput} type={props.type} fontSize='md' ps={10} placeholder={props.placeholder} isRequired bg='gray.200' size='lg' />
    </Fragment>
  )
}
