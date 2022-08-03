import React, { Fragment } from 'react';
import { Input } from '@chakra-ui/react';

export default function (props) {
  return (
    <Fragment>
        <Input type={props.type} fontSize='lg' ps={10} placeholder={props.placeholder} isRequired bg='gray.200' size='lg' />
    </Fragment>
  )
}
