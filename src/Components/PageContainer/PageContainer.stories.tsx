import { ComponentStory, ComponentMeta } from '@storybook/react';
import React from 'react';
import { PageContainer } from './PageContainer';
import { LibPath } from 'Types';

export default {
  title: LibPath.Containers + 'PageContainer' || 'undefined',
  component: PageContainer,

  argTypes: {
    title: { defaultValue: 'Title' },
    titleAlignment: { defaultValue: 'left' },
    titleTextColor: { defaultValue: '#01233D' },
    subtitle: { defaultValue: 'Subtitle' },
    subtitleAlignment: { defaultValue: 'left' },
    subtitleTextColor: { defaultValue: '#01233D' },
    children: { defaultValue: <div>Content</div> },
    containerPadding: { defaultValue: '0px' },
    containerMargin: { defaultValue: '0px' },
    contentPadding: { defaultValue: '0px' },
    contentMargin: { defaultValue: '0px' },
    subtitlePadding: { defaultValue: '0px' },
    titlePadding: { defaultValue: '0px' },
    titleMargin: { defaultValue: '0px' },
    borderColor: { defaultValue: '#FAFAFD' },
    borderWidth: { defaultValue: '1px' },
    contentBorderColor: { defaultValue: '#FAFAFD' },
    contentBorderWidth: { defaultValue: '1px' },
    titleBadge: { defaultValue: '0px' },
    backgroundColor: { defaultValue: '#FAFAFD' },
    contentColor: { defaultValue: '#FAFAFD' },
    titlesColor: { defaultValue: '#FAFAFD' },
    height: { defaultValue: '100%' },
    width: { defaultValue: '100%' },
    containerMinWidth: { defaultValue: '0px' },
    containerMaxWidth: { defaultValue: '100%' },
    containerSideMargins: { defaultValue: '0px' },
    shouldContentFillContainer: { defaultValue: true },
    containerSize: { defaultValue: 'auto' },
  },
} as ComponentMeta<typeof PageContainer>;

const Template: ComponentStory<typeof PageContainer> = (args) => (
  <PageContainer {...args} />
);

export const TestPageContainer = Template.bind({});
