import { Textarea } from '@chakra-ui/react';
import React, { ReactElement } from 'react';
import { TextInputProps } from 'Types';
import { BaseInput } from 'Components';

/*
    EXAMPLE USE:
    function TextAreaExample(): ReactElement {
        const [text, setText] = useState<string>('');
        return (
            <TextArea
                title='Text Area Title'
                value={text}
                placeholder='Placeholder text is optional'
                onChange={setText}
            />
        );
    }
*/

const TextAreaInput = (props: TextInputProps): ReactElement => {
    const {
        label,
        labelTextMargin,
        placeholder,
        onChange,
        value,
        invalidText,
        captionText,
        isDisabled,
        margin,
        padding,
        width,
        minWidth,
        variant,
        autoFocus,
    } = props;
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
            <Textarea
                isInvalid={!!invalidText}
                isDisabled={isDisabled}
                placeholder={placeholder}
                onChange={(e) => onChange(e.target.value)}
                value={value}
                variant={variant}
                autoFocus={autoFocus}
            />
        </BaseInput>
    );
};

export { TextAreaInput };
