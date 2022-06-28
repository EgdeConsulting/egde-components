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
    maxValueLength: { defaultValue: '10' },
    onChange: { defaultValue: () => {} },
    invalidText: { defaultValue: 'Invalid' },
    isDisabled: { defaultValue: false },
    placeholder: { defaultValue: 'Placeholder' },
    captionText: { defaultValue: 'Caption text' },
    isCurrency: { defaultValue: false },
    currencySpacer: { defaultValue: ' ' },
    margin: { defaultValue: '0' },
    padding: { defaultValue: '0' },
    width: { defaultValue: 'auto' },
    minWidth: { defaultValue: 'auto' },
    backgroundColor: { defaultValue: '#fff' },
    autoFocus: { defaultValue: false },
    textAlign: { defaultValue: 'left' },   
  },

} as ComponentMeta<typeof NumberInput>;

const Template: ComponentStory<typeof NumberInput> = (args) => <NumberInput {...args} />;


export const NumberInputAutoFokus = Template.bind({});
NumberInputAutoFokus.args = {
    autoFocus: true,
}

export const NumberInputStd = Template.bind({});

export const NumberInputDisabled = Template.bind({});
NumberInputDisabled.args = {
    isDisabled: true,
}




