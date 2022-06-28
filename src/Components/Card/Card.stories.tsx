import { ComponentStory, ComponentMeta } from '@storybook/react';
import React from 'react';
import { Card } from './Card';
import { LibPath } from 'Types';

export default {

  title: LibPath.Card || 'undefined',
  component: Card,
  parameters: {
    // More on Story layout: https://storybook.js.org/docs/react/configure/story-layout
    layout: 'centered',
    title: 'Card title',
  },
  argTypes: {
    title: { defaultValue: 'My title' },
    body: { defaultValue: 'My body' },
    textColors: { defaultValue: '#000' },
    titleTextColor: { defaultValue: '#000' },
    bodyTextColor: { defaultValue: '#000' },
    titleTextSize: { defaultValue: 'md' },
    bodyTextSize: { defaultValue: 'md' },
    onClick: { defaultValue: () => {} },
    titleIcon: { defaultValue: null },
    actionIcon: { defaultValue: null },
    cardHeight: { defaultValue: 'auto' },
    cardWidth: { defaultValue: 'auto' },
  },

} as ComponentMeta<typeof Card>;

const Template: ComponentStory<typeof Card> = (args) => <Card {...args} />;

export const HeadingOnly = Template.bind({});

export const HeadingAndBody = Template.bind({});
HeadingAndBody.args = {
    title: 'Title',
    body: 'And some fancy body',
};


