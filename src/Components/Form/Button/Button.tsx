import React from 'react';
import { Button as ChakraButton } from '@chakra-ui/react';

export interface ButtonProps {
  label: string;
  variant?: 'primary' | 'secondary' | 'delete'| 'iconButton' | 'iconAndTextButton'|'link';
}

const Button = (props: ButtonProps) => {
  const { label, variant } = props;

  return <ChakraButton variant={variant}>{label}</ChakraButton>;
};

export { Button };
