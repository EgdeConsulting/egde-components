import { ComponentStory, ComponentMeta } from '@storybook/react';
import React, { useState } from 'react';
import { DeleteModal } from './DeleteModal';
import { LibPath } from 'Types';
import { Button } from '@chakra-ui/react';

export default {
  title: LibPath.Overlay + 'DeleteModal' || 'undefined',
  component: DeleteModal,

  argTypes: {

  },

} as ComponentMeta<typeof DeleteModal>;


const Template: ComponentStory<typeof DeleteModal> = (args) => {
const[isModalOpen, setIsModalOpen] = useState(false);
return (
  <div>
    <Button onClick={ () => setIsModalOpen(true) }>Open Modal</Button>
    <DeleteModal {...args} isModalOpen={isModalOpen} setIsModalOpen={setIsModalOpen} />
  </div>
);

};

export const DeleteModalTest = Template.bind({});




