import React from 'react';
import { LibPath } from 'Types';
import { Modal } from '../Modal';
import { ComponentStory, ComponentMeta } from '@storybook/react';

export default {
  title: LibPath.Overlay + 'Modal' || 'undefined',
  component: Modal,
  parameters: {
    layout: 'centered',
  },
  docs: {
    inlineStories: false,
    iframeHeight: 500,
  },
  argTypes: {
    disablePortal: { defaultValue: true },
    isModalOpen: { defaultValue: false },
    hasCloseButton: { defaultValue: true },
    buttons: {
      variant: {
        primary: {
          label: 'Ok',
          variant: '',
          onClick: undefined,
        },
        secondary: {
          label: 'close',
          variant: '',
          onClick: undefined,
        },
        alignment: 'left',
      },
    },
  },
} as ComponentMeta<typeof Modal>;

const Template: ComponentStory<typeof Modal> = (args) => <Modal {...args} />;

export const Standard = Template.bind({});
Standard.args = {
  title: 'Title',
  subtitle: 'And som explanation',
  width: '300px',
  buttons: {
    primary: {
      label: 'Primary Button',
      variant: 'primary',
    },
    secondary: {
      label: 'Secondary Button',
      variant: 'secondary',
    },
    alignment: 'left',
  },
};

export const ModalWithError = Template.bind({});
ModalWithError.args = {
  title: 'Title',
  subtitle: 'And som explanation',
  width: '300px',
  buttons: {
    primary: {
      label: 'Primary Button',
      variant: 'primary',
    },
    secondary: {
      label: 'Secondary Button',
      variant: 'secondary',
    },
    alignment: 'left',
  },
  errorMessage: 'Woops, something went wrong',
};
