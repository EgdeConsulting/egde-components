/* import { ComponentStory, ComponentMeta } from '@storybook/react';
import React from 'react';
import { TextInput } from './TextInput';
import { LibPath } from 'Types';

export default {
  title: LibPath.Form + 'TextInput' || 'undefined',
  component: TextInput,

  argTypes: {
    label: { defaultValue: 'Text Input' },
    labelTextMargin: { defaultValue: '0' },
    placeholder: { defaultValue: 'Placeholder' },
    onChange: { defaultValue: () => {} },
    value: { defaultValue: ' ' },
    characterLimit: { defaultValue: 100 },
    invalidText: { defaultValue: '' },
    captionText: { defaultValue: ' ' },
    captionTextMargin: { defaultValue: '0' },
    isDisabled: { defaultValue: false },
    margin: { defaultValue: '0' },
    padding: { defaultValue: '0' },
    width: { defaultValue: 'auto' },
    minWidth: { defaultValue: 'auto' },
    maxWidth: { defaultValue: 'auto' },
    backgroundColor: { defaultValue: '#fff' },
    autoFocus: { defaultValue: false },
    textAlign: { defaultValue: 'right' },
  },
} as ComponentMeta<typeof TextInput>;

const Template: ComponentStory<typeof TextInput> = (args) => (
  <TextInput {...args} />
);

export const TextInputStd = Template.bind({});

/* export const TextInputAutoFokus = Template.bind({});
TextInputAutoFokus.args = {
    autoFocus: true,
}

export const TextInputDisabled = Template.bind({});
TextInputDisabled.args = {
  isDisabled: true,
};

export const TextInputInvalid = Template.bind({});
TextInputInvalid.args = {
  value: 'Test',
  invalidText: 'Invalid',
};

export const TextInputCaption = Template.bind({});
TextInputCaption.args = {
  captionText: 'Caption',
};

export const TextInputTextCenter = Template.bind({});
TextInputTextCenter.args = {
  textAlign: 'center',
  value: 'Hello World',
};
 */
// eslint-disable-next-line storybook/default-exports
