import React from 'react';
import { ComponentStory, ComponentMeta } from '@storybook/react';
import { AlertDialog } from './AlertDialog';
import { LibPath } from 'Types';

export default {
  title: LibPath.Overlay + 'AlertDialog' || 'undefined',
  component: AlertDialog,
  argTypes: {
    iconVariant: { defaultValue: '' },
        heading: { defaultValue: 'Heading' },
        text: { defaultValue: 'Text' },
        isOpen: { defaultValue: true },
        cancelRef: { defaultValue: React.createRef() },
        onClose: { action: 'onClose' },
        buttons: { defaultValue: 
        {
          lablel: 'Cancel',
          variant: 'primary',
          onclick: () => {},
        } },
  },
} as ComponentMeta<typeof AlertDialog>;

const Template: ComponentStory<typeof AlertDialog> = (args) => 
<AlertDialog {...args} />;


export const VerticalStepperTest = Template.bind({});
