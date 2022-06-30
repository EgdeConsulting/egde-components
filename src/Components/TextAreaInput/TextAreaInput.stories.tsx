import React from 'react';
import { TextAreaInput } from './TextAreaInput';
import { ComponentStory , ComponentMeta} from '@storybook/react';
import { LibPath } from 'Types';

export default {
  title: LibPath.Form + 'TextAreaInput' || 'undefined',
  component: TextAreaInput,

    argTypes: {
        label: { defaultValue: 'TextAreaInput' },
        labelTextMargin: { defaultValue: '0' },
        placeholder: { defaultValue: 'Write some text here' },
        onChange: { defaultValue: () => {} },
        value: { defaultValue: '' },
        invalidText: { defaultValue: '' },
        captionText: { defaultValue: 'Caption:' },
        isDisabled: { defaultValue: false },
        margin: { defaultValue: '0' },
        padding: { defaultValue: '0' },
        width: { defaultValue: '100%' },
        minWidth: { defaultValue: '0' },
        backgroundColor: { defaultValue: 'transparent' },
        autoFocus: { defaultValue: false },
    }
} as ComponentMeta<typeof TextAreaInput>;

const Template: ComponentStory<typeof TextAreaInput> = (args) => (
  <TextAreaInput {...args} />
);

export const TextAreaInputTest = Template.bind({});

export const TextAreaInputInvallidText = Template.bind({});
TextAreaInputInvallidText.args = {
    invalidText: 'InvalidText' ,
}
   
