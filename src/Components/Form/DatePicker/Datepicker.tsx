import React, { ReactNode } from 'react';
import DatePicker, { registerLocale } from 'react-datepicker';
import nb from 'date-fns/locale/nb';
import 'react-datepicker/dist/react-datepicker.css';
import { Box, chakra, useMultiStyleConfig } from '@chakra-ui/react';
import { DatePickerProps } from 'SharedTypes';
import { BaseInput } from '../BaseInput';

registerLocale('nb', nb);
const StyledDatePicker = chakra(DatePicker);

const CalendarContainer = (props: { children: ReactNode[] }): JSX.Element => {
    const { children } = props;
    const datePickerStyles = useMultiStyleConfig('DatePicker', {});

    const themeStyles = {
        ...datePickerStyles,
        '.react-datepicker__day': datePickerStyles.day,
        '.react-datepicker__header': datePickerStyles.header,
        '.react-datepicker__day-name': datePickerStyles.dayName,
        '.react-datepicker__navigation-icon': datePickerStyles.navIcon,
        '.react-datepicker__current-month': datePickerStyles.currentMonth,
        '.react-datepicker__day--today': datePickerStyles.dayToday,
        '.react-datepicker__day--selected': datePickerStyles.daySelected,
        '.react-datepicker__day--keyboard-selected':
            datePickerStyles.dayKeyboardSelected,
        '.react-datepicker__day--disabled': datePickerStyles.dayDisabled,
    };

    return (
        <Box position='absolute' __css={themeStyles}>
            {children}
        </Box>
    );
};

const DatePickerInput = (props: DatePickerProps): JSX.Element => {
    const {
        onChange,
        value,
        placeholder,
        invalidText,
        isDisabled,
        label,
        labelTextMargin,
        captionText,
        captionTextMargin,
        margin,
        padding,
        width,
        minWidth,
        maxDate,
        minDate,
        backgroundColor,
        autoFocus,
        shouldCloseOnSelect,
    } = props;

    const datePickerStyles = useMultiStyleConfig('DatePicker', {});

    return (
        <BaseInput
            label={label}
            labelTextMargin={labelTextMargin}
            invalidText={invalidText}
            captionText={captionText}
            captionTextMargin={captionTextMargin}
            margin={margin}
            padding={padding}
            width={width}
            minWidth={minWidth}
        >
            <Box textTransform='capitalize'>
                <StyledDatePicker
                    shouldCloseOnSelect={shouldCloseOnSelect}
                    __css={datePickerStyles.inputContainer}
                    locale='nb'
                    disabled={isDisabled}
                    onChange={(e: Date) => onChange(e as Date)}
                    dropdownMode='select'
                    placeholderText={placeholder}
                    dateFormat='dd/MM/yyyy'
                    selected={value}
                    calendarContainer={CalendarContainer}
                    maxDate={maxDate}
                    minDate={minDate}
                    autoFocus={autoFocus}
                    backgroundColor={backgroundColor}
                />
            </Box>
        </BaseInput>
    );
};

export { DatePickerInput as DatePicker };
