import React, { ReactElement } from 'react';
import { Input } from '@chakra-ui/react';
import { NumberInputProps } from 'SharedTypes';
import { BaseInput } from 'Components';

/*
    EXAMPLE USE:
    function NumberExample(): ReactElement {
        const [num, setNum] = useState<string>('');
        return <Number title='Number Title' value={num} onChange={setNum} />;
    }
*/

const NumberInput = (props: NumberInputProps): ReactElement => {
    const {
        label,
        labelTextMargin,
        value,
        maxValueLength,
        onChange,
        invalidText,
        isDisabled,
        placeholder,
        captionText,
        isCurrency,
        currencySpacer,
        margin,
        padding,
        width,
        minWidth,
        variant,
        autoFocus,
        textAlign,
    } = props;

    function handleOnChange(inputValue: string): void {
        const text = inputValue.replace(/[^0-9]+/g, '');
        onChange(text);
    }

    function formatValue(inputValue: string): string {
        let formattedText = inputValue;
        if (isCurrency) {
            if (currencySpacer === undefined) {
                formattedText = formattedText.replace(
                    /\B(?=(\d{3})+(?!\d))/g,
                    ' ',
                );
            } else {
                formattedText = formattedText.replace(
                    /\B(?=(\d{3})+(?!\d))/g,
                    currencySpacer,
                );
            }
            if (formattedText.length > 1 && formattedText[0] === '0') {
                formattedText = formattedText.substring(1);
            }
        }
        return formattedText;
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
            <Input
                textAlign={textAlign}
                isInvalid={!!invalidText}
                placeholder={placeholder}
                isDisabled={isDisabled}
                onChange={(e: any) => {
                    handleOnChange(e.target.value);
                }}
                value={formatValue(value)}
                maxLength={maxValueLength}
                variant={variant}
                autoFocus={autoFocus}
            />
        </BaseInput>
    );
};

export { NumberInput };
