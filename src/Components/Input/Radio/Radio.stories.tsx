import { ComponentStory, ComponentMeta } from '@storybook/react';
import React from 'react';
import { Radio } from './Radio';
import { LibPath } from 'Types';

export default {
    title: LibPath.Form + 'Radio' || 'undefined',
    component: Radio,

    argTypes: {
        options: {defaultValue: [
            'option 1',
            'option 2',
            'option 3',
        ]},
        value: {defaultValue: 0},
        label: {defaultValue: 'This is a Radio component'}
    }
} as unknown as ComponentMeta<typeof Radio>;

const Template: ComponentStory<typeof Radio> = (args) => (
  <Radio {...args} />
);

export const RadioStd = Template.bind({});


