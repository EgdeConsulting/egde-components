import React from 'react';
import { LibPath } from 'Types';
import { Checkbox } from './Checkbox';
import { ComponentStory, ComponentMeta } from '@storybook/react';

export default {
  title: LibPath.Input || 'undefined',
  component: Checkbox,
  argTypes: {
    direction: { defaultValue: 'column' },
    options: {
      defaultValue: [
        'Checkbox Option One',
        'Checkbox Option Two',
        'Checkbox Option Three',
      ],
    },
    value: { defaultValue: '' },
    onChange: { defaultValue: () => {} },
    invalidText: { defaultValue: '' },
    isDisabled: { defaultValue: false },
    backgroundColor: { defaultValue: '#fff' },
    autoFocus: { defaultValue: false },
  },
} as ComponentMeta<typeof Checkbox>;

const Template: ComponentStory<typeof Checkbox> = (args) => (
  <Checkbox {...args} />
);

export const CheckboxStd = Template.bind({});
CheckboxStd.args = {};
