import { ComponentStory, ComponentMeta } from '@storybook/react';
import React from 'react';
import { NumberInput } from './NumberInput';
import { LibPath } from 'Types';

export default {
  title: LibPath.Input || 'undefined',
  component: NumberInput,

  argTypes: {
    label: { defaultValue: 'Number Input' },
    labelTextMargin: { defaultValue: '0' },
    value: { defaultValue: '' },
    maxValueLength: { defaultValue: 15 },
    onChange: { defaultValue: () => {} },
    invalidText: { defaultValue: '' },
    isDisabled: { defaultValue: false },
    placeholder: { defaultValue: 'Placeholder' },
    captionText: { defaultValue: ' ' },
    isCurrency: { defaultValue: false },
    currencySpacer: { defaultValue: ' ' },
    margin: { defaultValue: '0' },
    padding: { defaultValue: '0' },
    width: { defaultValue: 'auto' },
    minWidth: { defaultValue: 'auto' },
    backgroundColor: { defaultValue: '#fff' },
    autoFocus: { defaultValue: false },
    textAlign: { defaultValue: 'right' },
  },
} as ComponentMeta<typeof NumberInput>;

const Template: ComponentStory<typeof NumberInput> = (args) => (
  <NumberInput {...args} />
);

export const NumberInputStd = Template.bind({});

/* export const NumberInputAutoFokus = Template.bind({});
NumberInputAutoFokus.args = {
    autoFocus: true,
} */

export const NumberInputDisabled = Template.bind({});
NumberInputDisabled.args = {
  isDisabled: true,
};

export const NumberInputCurrency = Template.bind({});
NumberInputCurrency.args = {
  isCurrency: true,
  value: '123456789',
};

export const NumberInputCurrencyFalse = Template.bind({});
NumberInputCurrencyFalse.args = {
  isCurrency: false,
  value: '123456789',
};

export const NumberInputInvalid = Template.bind({});
NumberInputInvalid.args = {
  value: 'Test',
  invalidText: 'Invalid',
};

export const NumberInputCaption = Template.bind({});
NumberInputCaption.args = {
  captionText: 'Caption',
};

export const NumberInputTextCenter = Template.bind({});
NumberInputTextCenter.args = {
  textAlign: 'center',
  value: '123456789',
};
