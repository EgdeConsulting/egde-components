/* eslint-disable */
import { Icon } from '@chakra-ui/icons';
import React from 'react';
import { IconType } from 'egde-types';

function PriorityHigh(props: IconType) {
    return (
        <Icon
            width="2"
            height="16"
            viewBox="0 0 2 16"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
            {...props}
        >
            <path d="M0 0H2V11H0V0ZM2 14V16H0V14H2Z" fill="currentColor" />
        </Icon>
    );
}

export { PriorityHigh };
