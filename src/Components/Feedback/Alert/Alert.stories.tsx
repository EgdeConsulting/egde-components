/* import { Alert } from './Alert';
import { ComponentMeta, ComponentStory } from '@storybook/react';
import React from 'react';
import { LibPath } from 'Types';
import { AlertStatus } from 'Styles/Components/SharedComponents';

export default {
  title: LibPath.Overlay + 'Alert' || 'undefined',
  component: Alert,
  parameters: {
    layout: 'centered',
  },
  argTypes: {
    status: { defaultValue: AlertStatus.Success },
    description: { defaultValue: 'This is a description' },
    onClose: { action: 'onclose' },
    linkText: { defaultValue: '' },
    linkHref: { defaultValue: '' },
  },
  args: {
    status: AlertStatus.Success,
    description: 'This is a description',
  },
} as ComponentMeta<typeof Alert>;

const Template: ComponentStory<typeof Alert> = (args) => <Alert {...args} />;

export const InfoAlert = Template.bind({});
InfoAlert.args = {
  description: 'This is an info alert',
  status: AlertStatus.Info,
};

export const WarningAlert = Template.bind({});
WarningAlert.args = {
  description: 'This is a warning alert',
  status: AlertStatus.Warning,
};

export const ErrorAlert = Template.bind({});
ErrorAlert.args = {
  description: 'This is an error alert',
  status: AlertStatus.Error,
};

export const SuccessAlert = Template.bind({});
SuccessAlert.args = {
  description: 'This is a success alert',
  status: AlertStatus.Success,
};

export const AlertWithLink = Template.bind({});
AlertWithLink.args = {
  description: 'This is a Error alert',
  status: AlertStatus.Error,
  linkText: 'Learn More',
  linkHref: 'https://www.google.com',
};
 */
// eslint-disable-next-line storybook/default-exports
