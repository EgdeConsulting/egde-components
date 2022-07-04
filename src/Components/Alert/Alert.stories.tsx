import { Alert } from "./Alert";
import { ComponentMeta, ComponentStory } from "@storybook/react";
import React from "react";
import { LibPath } from "Types";


export default {
    title: LibPath.Overlay + 'Alert' || 'undefined',
    component: Alert,
    parameters: {
      layout: 'centered',
    },
    args: {
      status: 'info',
    },

} as ComponentMeta<typeof Alert>;


  const Template: ComponentStory<typeof Alert> = (args) => (
    <Alert {...args} />
  );

  export const InfoAlert = Template.bind({});
  InfoAlert.args = {
    description: 'This is an info alert',
  };
