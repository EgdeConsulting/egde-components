import React from "react";
import { ComponentStory, ComponentMeta } from '@storybook/react';
import { Tabs } from "./Tabs";
import { LibPath } from "Types";


export default {
    title: LibPath.Tabs || "undefined",
    component: Tabs,

    argTypes: {
        tabs: {
            defaultValue: [
                {
                    title: 'Tab 1',
                    children: [<div>Tab 1 content</div>]
                },
                {
                    title: 'Tab 2',
                    children: <div>Tab 2 content</div>
                }]
        },
        centerTabs: { defaultValue: false },
        styles: {
            defaultValue: {
                
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

                
            }
        },


    },
} as ComponentMeta<typeof Tabs>;

const Templates: ComponentStory<typeof Tabs> = (args) => <Tabs {...args} />;

export const TestTabs = Templates.bind({});

TestTabs.args = {};


