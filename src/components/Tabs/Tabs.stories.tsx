import React from 'react';
import { ComponentStory, ComponentMeta } from '@storybook/react';
import { Tabs } from './Tabs';
import { LibPath } from 'Types';

export default {
  title: LibPath.Navigation + 'Tabs' || 'undefined',
  component: Tabs,

  argTypes: {
    tabs: {
      defaultValue: [
        {
          title: 'The first tab',
          children: [<div key={'1.1'}>Content of tab 1</div>],
        },
        {
          title: 'The second tab',
          children: [<div key={'2.1'}>Content og tab 2</div>],
        },
      ],
    },
    centerTabs: { defaultValue: false },
  },
} as ComponentMeta<typeof Tabs>;

const Templates: ComponentStory<typeof Tabs> = (args) => <Tabs {...args} />;

export const TestTabs = Templates.bind({});

TestTabs.args = {};
