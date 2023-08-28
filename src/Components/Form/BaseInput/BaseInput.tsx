import React, { ReactElement } from 'react';
import {
    Box,
    FormControl,
    FormErrorMessage,
    FormHelperText,
    FormLabel,
} from '@chakra-ui/react';
import { BaseInputProps } from 'SharedTypes';

/* 
    Wrapper for all input components
    Not to be used directly
*/

export function BaseInput(props: BaseInputProps): ReactElement {
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
        isGroup,
    } = props;
    return (
        <FormControl
            display='flex'
            flexDirection='column'
            margin={margin}
            padding={padding || '32px 0 0 0'}
            as={isGroup ? 'fieldset' : undefined}
            isInvalid={!!invalidText}
        >
            {label && (
                <FormLabel
                    fontWeight='bold'
                    color='darkgrey'
                    margin={labelTextMargin || '0 0 8px 0'}
                >
                    {label}
                </FormLabel>
            )}
            <Box width={width} minWidth={minWidth}>
                {children}
            </Box>
            {captionText && (
                <FormHelperText
                    margin={captionTextMargin || '10px 0 4px 0'}
                    color='darkgrey'
                    fontSize='md'
                >
                    {captionText}
                </FormHelperText>
            )}
            {invalidText && (
                <FormErrorMessage
                    margin='10px 0 4px 0'
                    color='red'
                    fontSize='md'
                >
                    {invalidText}
                </FormErrorMessage>
            )}
        </FormControl>
    );
}
