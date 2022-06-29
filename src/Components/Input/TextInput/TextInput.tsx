import React, { ReactElement } from 'react';
import { Input } from '@chakra-ui/react';
import { TextInputProps } from 'Types';
import { BaseInput } from 'Components/Input';

/*
    EXAMPLE USE:
    function TextExample(): ReactElement {
        const [text, setText] = useState<string>('');
        return <Text title='Text Title' value={text} onChange={setText} />;
    }
*/

export const TextInput = (props: TextInputProps): ReactElement => {
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
    backgroundColor,
    autoFocus,
    textAlign,
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
      <Input
        textAlign={textAlign}
        isInvalid={!!invalidText}
        isDisabled={isDisabled}
        placeholder={placeholder}
        onChange={(e: any) => onChange(e.target.value as string)}
        value={value}
        backgroundColor={backgroundColor}
        autoFocus={autoFocus}
      />
    </BaseInput>
  );
};
