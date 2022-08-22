import React from 'react';
import { Select as ChakraSelect } from 'chakra-react-select';
import { SystemStyleObject } from '@chakra-ui/react';
import { SelectOption, SelectProps } from 'Types';
import { BaseInput } from 'Components';

const DEFAULT_SELECT_PLACEHOLDER = 'Velg fra listen';
const DEFAULT_SELECT_NO_OPTIONS_TEXT = 'Ingen alternativer';

const SINGLE_SELECT_STYLES = {
    menu: (provided: SystemStyleObject) => ({
        ...provided,
        borderColor: 'darkgrey',
        borderRadius: '5px',
        border: '1px',
        borderWidth: '1px',
        padding: '0.5rem',
        backgroundColor: 'white',
    }),
    menuList: (provided: SystemStyleObject) => ({
        ...provided,
        border: '0px',
        backgroundColor: 'white',
    }),
    option: (provided: SystemStyleObject) => ({
        ...provided,
        _hover: {
            backgroundColor: 'lightblue',
        },
    }),
    container: (provided: SystemStyleObject) => ({
        ...provided,
        borderColor: 'darkgrey',
        backgroundColor: 'white',
    }),
    placeholder: (provided: SystemStyleObject) => ({
        ...provided,
        color: 'lightgrey',
    }),
};

const Select = (props: SelectProps): JSX.Element => {
    const {
        options,
        invalidText,
        filterText,
        onChange,
        isDisabled,
        placeholder,
        value,
        /*  
       // TODO: Make these props do something
       backgroundColor,
        autoFocus, */
    } = props;

    return (
        <BaseInput {...props}>
            <ChakraSelect
                isInvalid={!!invalidText}
                errorBorderColor='red'
                options={options}
                hideSelectedOptions
                closeMenuOnSelect
                isDisabled={isDisabled}
                isSearchable={!!filterText}
                placeholder={
                    filterText || placeholder || DEFAULT_SELECT_PLACEHOLDER
                }
                onChange={(e: unknown) => onChange(e as SelectOption)}
                components={{
                    IndicatorSeparator: null,
                }}
                value={value}
                noOptionsMessage={() => DEFAULT_SELECT_NO_OPTIONS_TEXT}
                chakraStyles={SINGLE_SELECT_STYLES}
            />
        </BaseInput>
    );
};

export { Select };
