import React from 'react';
import { Button as ChakraButton } from '@chakra-ui/react';

export interface ButtonProps {
    label: string;
    children?: JSX.Element | JSX.Element[];
    onClick: () => void;
    variant?:
        | 'primary'
        | 'secondary'
        | 'delete'
        | 'iconButton'
        | 'iconAndTextButton'
        | 'link';
}

const Button = (props: ButtonProps) => {
    const { label, variant, onClick, children } = props;

    return (
        <ChakraButton variant={variant} onClick={onClick}>
            {label}
            {children}
        </ChakraButton>
    );
};

export { Button };
