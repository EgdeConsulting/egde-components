import { ComponentStory, ComponentMeta } from '@storybook/react';
import React from 'react';
import { Card } from './Card';
import { LibPath } from 'Types';

export default {
  title: LibPath.Cards + 'Card' || 'undefined',
  component: Card,
  parameters: {
    // More on Story layout: https://storybook.js.org/docs/react/configure/story-layout
    layout: 'centered',
    title: 'Card title',
  },
  argTypes: {
    title: { defaultValue: 'My title' },

  },
} as ComponentMeta<typeof Card>;

const Template: ComponentStory<typeof Card> = (args) => <Card {...args} />;

export const HeadingOnly = Template.bind({});
export const HeadingAndBody = Template.bind({});
HeadingAndBody.args = {
  title: 'Title',
  body: 'And some fancy body',
};

export const ColorTest = Template.bind({});
ColorTest.args = {
  title: 'Test',
};
