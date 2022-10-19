import React, { ReactElement } from 'react';
import { Checkbox as ChakraCheckbox, FormLabel, Stack } from '@chakra-ui/react';
import { CheckboxProps } from 'SharedTypes';
import { BaseInput } from 'Components';

export function Checkbox(props: CheckboxProps): ReactElement {
    const {
        label,
        labelTextMargin,
        direction = 'column',
        options,
        value,
        onChange,
        invalidText,
        isDisabled,
        captionText,
        margin,
        padding,
        width,
        minWidth,
        backgroundColor,
        autoFocus,
    } = props;

    function handleOnChange(optionIndex: number): void {
        let newValue = [];
        if (value.includes(optionIndex)) {
            newValue = value.filter((e) => e !== optionIndex);
        } else {
            newValue = [...value, optionIndex];
        }
        onChange(newValue);
    }

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
            <Stack direction={direction}>
                {options.map((option, index) => {
                    return (
                        <ChakraCheckbox
                            isInvalid={!!invalidText}
                            isDisabled={isDisabled}
                            key={`chk${index}`}
                            onChange={() => handleOnChange(index)}
                            isChecked={value.includes(index)}
                            backgroundColor={backgroundColor}
                            autoFocus={autoFocus}
                        >
                            {option}
                        </ChakraCheckbox>
                    );
                })}
            </Stack>
        </BaseInput>
    );
}
