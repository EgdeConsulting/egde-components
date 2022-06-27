import { Heading, Box, Flex, Text, useStyleConfig } from '@chakra-ui/react';
import { CSSObject } from '@storybook/theming';
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
    backgroundColor?: string;
    borderRadius?: string;
    px?: string;
    paddingTop?: string;
    paddingBottom?: string;
    _hover?: CSSObject;
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
        backgroundColor,
        borderRadius,
        px,
        paddingTop,
        paddingBottom,
        _hover
        
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
            backgroundColor={backgroundColor}
            borderRadius={borderRadius}
            px={px}
            paddingTop={paddingTop}
            paddingBottom={paddingBottom}
            _hover={_hover}
        >
          <Text textAlign="left" fontSize="1rem">
            {body}
          </Text>
          {actionIcon && actionIcon}
        </Flex>
      </Flex>
    </Box>
  );
}

export default Card;
