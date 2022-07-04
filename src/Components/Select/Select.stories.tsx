import { ComponentStory, ComponentMeta } from '@storybook/react';
import React from 'react';
import { Select } from './Select';
import { LibPath } from 'Types';


export default {
  title: LibPath.Form + 'Select' || 'undefined',
  component: Select,

  argTypes: {

  },

} as ComponentMeta<typeof Select>;

const Template: ComponentStory<typeof Select> = (args) => <Select {...args} />;




export const Standard = Template.bind({});
