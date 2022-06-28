import { ComponentStory, ComponentMeta } from '@storybook/react';
import React from 'react';
import {PageContainer} from './PageContainer';
import { LibPath } from 'Types';

export default {
    title: LibPath.PageContainer || 'undefined',
    component: PageContainer,
  
     argTypes: {
        title: { defaultValue: 'My title' },
        titleAlignment: {defaultValue: 'center'},
        titleTextColor: {defaultValue: '#000000'},
        subtitle: {defaultValue: 'And some fancy body'},
        subtitleAlignment: {defaultValue: 'center'},
        subtitleTextColor: {defaultValue: '#000000'},
        children: {defaultValue: 'And some fancy body'},
        containerPadding: {defaultValue: '24px'},
        containerMargin: {defaultValue: '24px'},
        contentPadding: {defaultValue: '24px'},
        contentMargin: {defaultValue: '24px'},
        subtitlePadding: {defaultValue: '24px'},
        titlePadding: {defaultValue: '24px'},
        titleMargin: {defaultValue: '24px'},
        borderColor: {defaultValue: '#000000'},
        borderWidth: {defaultValue: '1px'},
        contentBorderColor: {defaultValue: 'red'},
        contentBorderWidth: {defaultValue: '1px'},
        titleBadge: {defaultValue: '#000000'},
        backgroundColor: {defaultValue: '#ffffff'},
        contentColor: {defaultValue: 'grey'},
        titlesColor: {defaultValue: '#000000'},
        height: {defaultValue: '100%'},
        width: {defaultValue: '100%'},
        containerMinWidth: {defaultValue: '320px'},
        containerSideMargins: {defaultValue: '24px'},
        shouldContentFillContainer: {defaultValue: true},
        
     },
} as ComponentMeta<typeof PageContainer>;

const Template: ComponentStory<typeof PageContainer> = (args) => <PageContainer {...args} />;

export const TestPageContainer = Template.bind({});


