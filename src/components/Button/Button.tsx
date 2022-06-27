import React from 'react';
import { Button as ChakraButton } from '@chakra-ui/react';

export interface ButtonProps {
  label: string;
}

const Button = (props: ButtonProps) => {
  return <ChakraButton colorScheme="blue">{props.label}</ChakraButton>;
};

export { Button };
