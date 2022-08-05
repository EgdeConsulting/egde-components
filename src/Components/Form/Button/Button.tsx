import React from 'react';
import { Button as ChakraButton } from '@chakra-ui/react';

export interface ButtonProps {
    label: string;
    onClick: () => void;
    variant?: 'primary' | 'secondary' | 'delete'| 'iconButton' | 'iconAndTextButton'|'link';
}

const Button = (props: ButtonProps) => {
    const { label, variant, onClick } = props;

    return <ChakraButton variant={variant} onClick={onClick}>{label}</ChakraButton>;
};

export { Button };
