import React from 'react';
import { BaseInput } from '../NumberInput';
import { ComponentStory } from '@storybook/react';
import { LibPath } from 'Types';

export default {
  title: LibPath.Input || 'undefined',
  component: BaseInput,
};

const Template: ComponentStory<typeof BaseInput> = (args) => (
  <BaseInput {...args} />
);

export const BaseInputStd = Template.bind({});
BaseInputStd.args = {
  label: 'It works',
};
