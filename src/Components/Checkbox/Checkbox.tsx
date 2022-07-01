import React, { ReactElement } from 'react';
import { Checkbox as ChakraCheckbox, Stack } from '@chakra-ui/react';
import { CheckboxProps } from 'Types';
import { BaseInput } from '../Input/BaseInput';

const Checkbox = (props: CheckboxProps): ReactElement => {
  const {
    direction = 'column',
    options,
    value,
    onChange,
    invalidText,
    isDisabled,
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
    <BaseInput {...props}>
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
};

export { Checkbox };
