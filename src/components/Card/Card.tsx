import { Heading, Box, Flex, Text, useStyleConfig } from '@chakra-ui/react';
import React, { ReactElement } from 'react';


// Byttes til Import Types mappe når den er klar
type CardProps = {
    title: string;
    body: string;
    onClick?: () => void;
    titleIcon?: ReactElement;
    actionIcon?: ReactElement;
    cardHeight?: string;
    cardWidth?: string;
    titleSize?: string;
};

function Card(props: CardProps): ReactElement {
    const {
        title,
        body,
        onClick,
        titleIcon,
        actionIcon,
        cardHeight,
        cardWidth,
        titleSize,
    } = props;

    // Her må styling legges til
    const cardStyles = useStyleConfig('Card');

    return (
        <Box
            __css={cardStyles}
            as='button'
            onClick={onClick}
            height={cardHeight || '100%'}
            width={cardWidth || '100%'}
        >
            <Flex direction='column' justify='space-between'>
                <Flex width='100%' direction='row' align='center'>
                    {titleIcon && titleIcon}
                    <Heading
                        size={titleSize || 'md'}
                        marginLeft={titleIcon ? '0.5rem' : ''}
                    >
                        {title}
                    </Heading>
                </Flex>
                <Flex
                    width='100%'
                    direction='row'
                    alignContent='center'
                    justify='space-between'
                    margin='0.5rem 0.25rem 0 0'
                >
                    <Text textAlign='left' fontSize='1rem'>
                        {body}
                    </Text>
                    {actionIcon && actionIcon}
                </Flex>
            </Flex>
        </Box>
    );
}

export default Card;
