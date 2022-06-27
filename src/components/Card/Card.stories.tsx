
import { ComponentStory, ComponentMeta } from '@storybook/react';
import React from 'react';
import Card from './Card';


export default {
    title: 'Egde Library/Card',
    component: Card,
    parameters: {
        // More on Story layout: https://storybook.js.org/docs/react/configure/story-layout
        layout: 'fullscreen',
        title: 'Card title',
    },
     argTypes: {
         title: { defaultValue: 'My title' },
    //     cardWidth: {defaultValue: '100%'},
    //     cardHeight: {defaultValue: '100%'}
     },
} as ComponentMeta<typeof Card>;

const Template: ComponentStory<typeof Card> = (args) => <Card {...args} />;

export const HeadingOnly = Template.bind({});

export const HeadingAndBody = Template.bind({});
HeadingAndBody.args = {
    title: 'Title',
    body: 'And some fancy body',
};
