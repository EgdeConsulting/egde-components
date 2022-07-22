/*
import React from 'react';
import { ComponentStory, ComponentMeta } from '@storybook/react';
import { Button } from './Button';
import { DocsPage } from 'Components';
import { LibPath } from 'Types';

const componentName = 'Button';
const storyNames = ['Click Me'];

<DocsPage
    componentName={componentName}
    componentDescription="This component is a button"
    addStories={true}
    storyNames={storyNames}
    addImportantNote={false}
    variant="stable"
/>;

// More on default export: https://storybook.js.org/docs/react/writing-stories/introduction#default-export
export default {
    title: LibPath.Form + componentName || 'undefined',
    component: Button,
    argTypes: {
        label: {
            defaultValue: 'Button',
        },
        variant: {
            defaultValue: 'primary',
        },
    },
} as ComponentMeta<typeof Button>;

// More on component templates: https://storybook.js.org/docs/react/writing-stories/introduction#using-args
const Template: ComponentStory<typeof Button> = (args) => <Button {...args} />;

export const HelloWorld = Template.bind({});
// More on args: https://storybook.js.org/docs/react/writing-stories/args
HelloWorld.args = {
    label: 'Hello world!',
};

export const ClickMe = Template.bind({});
ClickMe.args = {
    label: 'Click me!',
};

*/
