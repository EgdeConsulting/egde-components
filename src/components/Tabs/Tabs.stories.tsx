import React from "react";
import { ComponentStory, ComponentMeta } from '@storybook/react';

import Tabs from "./Tabs";
import { LibPath } from "../LibPath";


export default {
    title: LibPath.Tabs.toString(),
    component: Tabs,
} as ComponentMeta<typeof Tabs>;

const Templates: ComponentStory<typeof Tabs> = (args) => <Tabs {...args}/>;

export const TestTabs = Templates.bind({});
TestTabs.args = {
    tabs: [
        {
            title: "Tab 1",
            children: [<div>Tab 1 content</div>,
                       <div>Tab 1,1 content</div>],
        },
        {
            title: "Tab 2",
            children: [<div>Tab 2 content</div>],
        },
        {
            title: "Tab 3",
            children: [<div>Tab 3 content</div>],
        },
    ],

    centerTabs: true,
};
/*
const TabStyles = {
    variants: {
        'line': {
            tab: {
                color: 'darkgrey',
                fontSize: '18px',
                _focus: {
                    boxShadow: 'none',
                },
                _selected: {
                    color: 'blue',
                    fontWeight: 'bold',
                    borderBottom: '2px solid',
                },
            },
        },
    },
};

export { TabStyles }; */
