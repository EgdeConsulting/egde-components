import React from "react";
import { ComponentStory, ComponentMeta } from '@storybook/react';

import Tabs from "./Tabs";
import { LibPath } from "../LibPath";


export default {
    title: LibPath.Tabs.toString(),
    component: Tabs,
    parameters: {
        // More on Story layout: https://storybook.js.org/docs/react/configure/story-layout
        layout: 'fullscreen',
        title: 'Tabs title',
    },
    argTypes: {
        tabs: { defaultValue: [{ title: 'Tab 1', children: [<div>Tab 1 content</div>] }, { title: 'Tab 2', children: <div>Tab 2 content</div> }] },
        centerTabs: { defaultValue: false },
    },
} as ComponentMeta<typeof Tabs>;

const Templates: ComponentStory<typeof Tabs> = (args) => <Tabs {...args} />;

export const TestTabs = Templates.bind({});

TestTabs.args = {};

