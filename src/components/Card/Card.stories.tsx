import { ComponentStory, ComponentMeta } from '@storybook/react';
import React from 'react';
import Card from './Card';
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
        cardWidth: { defaultValue: '320px' },
        cardHeight: { defaultValue: '112px' },
        backgroundColor: { defaultValue: 'lightblue' },
        titleSize: { defaultValue: 'md' },
        borderRadius: { defaultValue: '6px' },
        px: { defaultValue: '24px' },
        paddingTop: { defaultValue: '16px' },
        paddingBottom: { defaultValue: '20px' },
        _hover: {
            defaultValue: {
                outline: '2px solid',
                outlineColor: 'blue',
            },
        },
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
    backgroundColor: 'red',
};
