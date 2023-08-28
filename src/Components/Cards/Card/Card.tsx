import { Heading, Box, Flex, Text, useStyleConfig } from '@chakra-ui/react';
import React, { ReactElement } from 'react';
import { CardProps } from 'Types';

const Card = (props: CardProps): ReactElement => {
    const {
        title,
        body,
        textColors,
        titleTextColor,
        bodyTextColor,
        titleTextSize,
        bodyTextSize,
        onClick,
        titleIcon,
        actionIcon,
        cardHeight,
        cardWidth,
    } = props;

    const cardStyles = useStyleConfig('Card');

    return (
        <Box
            sx={cardStyles}
            onClick={onClick}
            height={cardHeight}
            width={cardWidth}
        >
            <Flex direction="column" justify="space-between">
                <Flex width="100%" direction="row" align="center">
                    {titleIcon && titleIcon}
                    <Heading
                        size={titleTextSize || 'md'}
                        marginLeft={titleIcon ? '0.5rem' : ''}
                        color={titleTextColor || textColors}
                    >
                        {title}
                    </Heading>
                </Flex>
                <Flex
                    width="100%"
                    direction="row"
                    alignContent="center"
                    justify="space-between"
                    margin="0.5rem 0.25rem 0 0"
                >
                    <Text
                        textAlign="left"
                        color={bodyTextColor || textColors}
                        fontSize={bodyTextSize || 'md'}
                    >
                        {body}
                    </Text>
                    {actionIcon && actionIcon}
                </Flex>
            </Flex>
        </Box>
    );
};

export { Card };
