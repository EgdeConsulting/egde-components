import { ComponentStory, ComponentMeta } from '@storybook/react';
import React from 'react';
import { DeleteModal } from './DeleteModal';
import { LibPath } from 'Types';

export default {
  title: LibPath.Overlay + 'DeleteModal' || 'undefined',
  component: DeleteModal,

  argTypes: {
    isModalOpen: { defaultValue: false },
    isCentered: { defaultValue: false },
    setIsModalOpen: { action: 'setIsModalOpen' },
    onSubmit: { action: 'Submit' },
    deleteButtonLabel: { defaultValue: 'Delete' },
    deleteText: { defaultValue: 'Are you sure you want to delete this?' },
    title: { defaultValue: 'Delete Modal' },
    cancelButtonLabel: { defaultValue: 'Cancel' },
    disablePortal: { defaultValue: true },

  },
  
} as ComponentMeta<typeof DeleteModal>;

const Template: ComponentStory<typeof DeleteModal> = (args) => <DeleteModal {...args} />;

export const DeleteModalTest = Template.bind({});
