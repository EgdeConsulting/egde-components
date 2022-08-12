import React, { ReactElement } from 'react';
import { Radio as ChakraRadio, RadioGroup, Stack } from '@chakra-ui/react';
import { RadioProps } from '@egde/types';
import { BaseInput } from '@egde/components';

export const Radio = (props: RadioProps): ReactElement => {
    const {
        direction = 'column',
        options,
        value,
        onChange,
        invalidText,
        isDisabled,
        backgroundColor,
    } = props;

    return (
        <BaseInput {...props}>
            <RadioGroup
                isDisabled={isDisabled}
                onChange={(e: any) => onChange(+e)}
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
};
