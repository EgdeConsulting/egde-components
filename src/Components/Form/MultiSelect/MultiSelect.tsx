import React, { useState } from 'react';
import { Select as ChakraSelect } from 'chakra-react-select';
import {
    Button,
    Stack,
    Checkbox,
    Text,
    Box,
    SystemStyleObject,
} from '@chakra-ui/react';
import { SelectOption, MultiSelectProps } from 'SharedTypes';
import { BaseInput } from 'Components';

const DEFAULT_SELECT_PLACEHOLDER = 'Velg fra listen';
const DEFAULT_SELECT_CANCEL_TEXT = 'Fjern alle';
const DEFAULT_SELECT_SUBMIT_TEXT = 'Bruk';
const DEFAULT_SELECT_NO_OPTIONS_TEXT = 'Ingen alternativer';

const MULTI_SELECT_STYLES = {
    menu: (provided: SystemStyleObject) => ({
        ...provided,
        backgroundColor: 'white',
        borderColor: 'darkgrey',
        borderRadius: '5px',
        border: '1px',
        borderWidth: '1px',
        padding: '0.5rem',
    }),
    menuList: (provided: SystemStyleObject) => ({
        ...provided,
        backgroundColor: 'white',
    }),
    container: (provided: SystemStyleObject) => ({
        ...provided,
        padding: '0',
        borderColor: 'darkgrey',
        color: 'darkgrey',
        backgroundColor: 'white',
    }),
    placeholder: (provided: SystemStyleObject) => ({
        ...provided,
        color: 'lightgrey',
    }),
};

// eslint-disable-next-line max-len
// This provides a "blanket" for the whole view to facility clicking outside the custom multi select in order to close it
// TODO: Consider replacing this with useOutsideClickHandler hook
const Blanket = (props: { onClick: () => void }): JSX.Element => {
    const { onClick } = props;
    return (
        <div
            role='none'
            onClick={onClick}
            style={{
                bottom: 0,
                left: 0,
                top: 0,
                right: 0,
                position: 'fixed',
                zIndex: 0,
            }}
        />
    );
};

const MultiSelectButtons = (props: {
    innerRef: React.LegacyRef<HTMLDivElement>;
    onCancel: () => void;
    onSubmit: () => void;
    submitText?: string;
    cancelText?: string;
}): JSX.Element => {
    const { onCancel, onSubmit, innerRef, submitText, cancelText } = props;

    return (
        <div ref={innerRef} style={{ marginTop: '0.75rem' }}>
            <Button onClick={onCancel} variant='secondary'>
                {cancelText || DEFAULT_SELECT_CANCEL_TEXT}
            </Button>
            <Button onClick={onSubmit} variant='primary'>
                {submitText || DEFAULT_SELECT_SUBMIT_TEXT}
            </Button>
        </div>
    );
};

const MultiOption = (props: {
    label: string;
    innerRef: React.LegacyRef<HTMLDivElement>;
    // unknown to eliminate major headache of finding correct type from react-select types
    innerProps: any;
    isSelected: boolean;
}): JSX.Element => {
    const { label, innerRef, innerProps, isSelected } = props;
    return (
        <Stack
            ref={innerRef}
            {...innerProps}
            direction='row'
            _hover={{ cursor: 'pointer' }}
        >
            <Checkbox isChecked={isSelected} />
            <Text>{label}</Text>
        </Stack>
    );
};

// props: any to eliminate major headache of finding appropriate react-select prop types
// eslint-disable-next-line
const SelectMenuList=(props: any): JSX.Element =>{
    const { children } = props;
    return (
        <Box backgroundColor='white'>
            {children}
            <MultiSelectButtons {...props} />
        </Box>
    );
};

const MultiSelect = (props: MultiSelectProps): JSX.Element => {
    const {
        options,
        label,
        labelTextMargin,
        invalidText,
        captionText,
        filterText,
        submitText,
        cancelText,
        onChange,
        isDisabled,
        placeholder,
        value,
        margin,
        padding,
        width,
        minWidth,
        /*
       // TODO: Make these props do something
       backgroundColor,
        autoFocus, */
    } = props;

    const [isOpen, setIsOpen] = useState<boolean>(false);

    function toggleOpen(): void {
        setIsOpen(!isOpen);
    }

    // function onOptionClicked(): void {
    //     setIsOpen(true);
    // }

    function onCancel(): void {
        onChange([]);
        setIsOpen(false);
    }

    function onSubmit(): void {
        setIsOpen(false);
    }

    return (
        <BaseInput
            label={label}
            labelTextMargin={labelTextMargin}
            invalidText={invalidText}
            captionText={captionText}
            margin={margin}
            padding={padding}
            width={width}
            minWidth={minWidth}
        >
            <div role='none' onClick={!isOpen ? () => toggleOpen() : undefined}>
                {isOpen && <Blanket onClick={() => toggleOpen()} />}
                <ChakraSelect
                    autoFocus={!!filterText}
                    menuIsOpen={isOpen}
                    isInvalid={!!invalidText}
                    errorBorderColor='red'
                    options={options}
                    isMulti
                    controlShouldRenderValue={false}
                    hideSelectedOptions={false}
                    isClearable={false}
                    isDisabled={isDisabled}
                    isSearchable={!!filterText}
                    components={{
                        Option: MultiOption,
                        IndicatorSeparator: null,
                        MenuList: (customProps) => (
                            <SelectMenuList
                                onCancel={() => onCancel()}
                                onSubmit={() => onSubmit()}
                                cancelText={cancelText}
                                submitText={submitText}
                                filterText={filterText}
                                {...customProps}
                            />
                        ),
                    }}
                    placeholder={
                        filterText || placeholder || DEFAULT_SELECT_PLACEHOLDER
                    }
                    onChange={(e) => onChange(e as SelectOption[])}
                    value={value}
                    noOptionsMessage={() => DEFAULT_SELECT_NO_OPTIONS_TEXT}
                    // chakraStyles={MULTI_SELECT_STYLES}
                />
            </div>
        </BaseInput>
    );
};

export { MultiSelect };
