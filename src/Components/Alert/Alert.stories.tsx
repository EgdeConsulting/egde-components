import { Alert } from './Alert';
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

export const InfoAlertJsx = Template.bind({});
InfoAlertJsx.args = {
  description: 'This is an info alert',
  status: AlertStatus.Info,
};

export const WarningAlertJsx = Template.bind({});
WarningAlertJsx.args = {
  description: 'This is a warning alert',
  status: AlertStatus.Warning,
};

export const ErrorAlertJsx = Template.bind({});
ErrorAlertJsx.args = {
  description: 'This is an error alert',
  status: AlertStatus.Error,
};

export const SuccessAlertJsx = Template.bind({});
SuccessAlertJsx.args = {
  description: 'This is a success alert',
  status: AlertStatus.Success,
};

export const AlertWithLinkJsx = Template.bind({});
AlertWithLinkJsx.args = {
  description: 'This is a Error alert',
  status: AlertStatus.Error,
  linkText: 'Learn More',
  linkHref: 'https://www.google.com',
};
