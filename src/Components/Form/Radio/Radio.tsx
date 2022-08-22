import React, { ReactElement } from 'react';
import {
    FormLabel,
    Radio as ChakraRadio,
    RadioGroup,
    Stack,
} from '@chakra-ui/react';
import { RadioProps } from 'Types';
import { BaseInput } from 'Components';

export function Radio(props: RadioProps): ReactElement {
    const {
        label,
        labelTextMargin,
        direction = 'column',
        options,
        value,
        onChange,
        invalidText,
        captionText,
        isDisabled,
        margin,
        padding,
        width,
        minWidth,
        backgroundColor,
    } = props;

    return (
        <BaseInput
            invalidText={invalidText}
            captionText={captionText}
            margin={margin}
            padding={padding}
            width={width}
            minWidth={minWidth}
            isGroup
        >
            <FormLabel
                fontWeight='bold'
                color='darkgrey'
                margin={labelTextMargin || '0 0 8px 0'}
                as='legend'
            >
                {label}
            </FormLabel>
            <RadioGroup
                isDisabled={isDisabled}
                onChange={(e) => onChange(+e)}
                value={value}
                backgroundColor={backgroundColor}
            >
                <Stack direction={direction}>
                    {options.map((option, index) => {
                        return (
                            <ChakraRadio
                                isInvalid={!!invalidText}
                                key={`rd${index}`}
                                value={index}
                            >
                                {option}
                            </ChakraRadio>
                        );
                    })}
                </Stack>
            </RadioGroup>
        </BaseInput>
    );
}
