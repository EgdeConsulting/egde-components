
import { ComponentStory, ComponentMeta } from '@storybook/react';
import React from 'react';
import { Modal } from './Modal';

export default {
  title: 'Egde Library/Modal',
  component: Modal,
  parameters: {
    layout: 'centered',
  },
  argTypes: {
    isModalOpen: { defaultValue: false },
    hasCloseButton: { defaultValue: true },
    buttons: {
      variant: {
        primary: {
          label: '',
          variant: '',
          onClick: undefined,
        },
        secondary: {
          label: '',
          variant: '',
          onClick: undefined,
        },
        alignment: "left"
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
