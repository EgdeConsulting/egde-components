import React, { useState } from 'react';
import { LibPath } from 'Types';
import { Modal } from '../Modal';
import { ComponentStory, ComponentMeta } from '@storybook/react';
import { Button } from '@chakra-ui/react';

export default {
  title: LibPath.Overlay + 'Modal' || 'undefined',
  component: Modal,
  parameters: {
    layout: 'centered',
  },

  argTypes: {
    isModalOpen: { defaultValue: false },
    hasCloseButton: { defaultValue: true },
    onClose: { action: 'onClose' },
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




const Template: ComponentStory<typeof Modal> = (args) => {
  const[isModalOpen, setIsModalOpen] = useState(false);
  const handleClose = () => setIsModalOpen(false);
  return (
    <div>
      <Button onClick={ () => setIsModalOpen(true)}>Open Modal</Button>
      <Modal {...args} isModalOpen={isModalOpen} onClose={handleClose} />
    </div>
  );


  };


/* const Template: ComponentStory<typeof Modal> = (args) => <Modal {...args} />;
 */
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
      label: 'Close',
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
      label: 'Close',
      variant: 'secondary',
    },
    alignment: 'left',
  },
  errorMessage: 'Woops, something went wrong',
};
