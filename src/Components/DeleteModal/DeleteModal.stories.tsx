import { ComponentStory, ComponentMeta } from '@storybook/react';
import React, { useState } from 'react';
import { DeleteModal } from './DeleteModal';
import { LibPath } from 'Types';
import { useArgs } from '@storybook/client-api';
import { Button } from '@chakra-ui/react';

export default {
  title: LibPath.Overlay + 'DeleteModal' || 'undefined',
  component: DeleteModal,

  argTypes: {
    isModalOpen: { defaultValue: false },
    isCentered: { defaultValue: false },
    setIsModalOpen: { action: 'setIsModalOpen' },
    onClick:  () => {} ,
    onSubmit: { action: 'Submit' },
    deleteText: { defaultValue: 'Are you sure you want to delete this?' },
    deleteButtonLabel: { defaultValue: 'Delete' },
    title: { defaultValue: 'Delete Modal' },
    cancelButtonLabel: { defaultValue: 'Cancel' },
    disablePortal: { defaultValue: true },

  },
  
} as ComponentMeta<typeof DeleteModal>;


const Template: ComponentStory<typeof DeleteModal> = (args) => {
const[isModalOpen, setIsModalOpen] = useState(true);
return (
  <div>
    <Button onClick={ ()=> setIsModalOpen(true)}>Open Modal</Button>
    <DeleteModal {...args} isModalOpen={isModalOpen} setIsModalOpen={setIsModalOpen} />
  </div>
)


};

export const DeleteModalTest = Template.bind({});




