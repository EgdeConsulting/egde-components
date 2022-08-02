import React, { ReactElement } from 'react';
import { Box, Text } from '@chakra-ui/react';
import { BaseInputProps } from 'Types';

/*
    Wrapper for all input components
    Not to be used directly
*/

const BaseInput = (props: BaseInputProps): ReactElement => {
    const {
        label,
        labelTextMargin,
        children,
        invalidText,
        captionText,
        captionTextMargin,
        margin,
        padding,
        width,
        minWidth,
    } = props;
    return (
        <Box
            display="flex"
            flexDirection="column"
            margin={margin}
            padding={padding || '32px 0 0 0'}
        >
            {label && (
                <Text fontWeight="bold" margin={labelTextMargin || '0 0 8px 0'}>
                    {label}
                </Text>
            )}
            <Box width={width} minWidth={minWidth}>
                {children}
            </Box>
            {captionText && (
                <Text margin={captionTextMargin || '8px 0 0 0'} color="darkgrey">
                    {captionText}
                </Text>
            )}
            {invalidText && (
                <Text marginTop="8px" color="red">
                    {invalidText}
                </Text>
            )}
        </Box>
    );
};

export { BaseInput };
