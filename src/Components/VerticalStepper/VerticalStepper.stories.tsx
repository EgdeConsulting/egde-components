import React, { useState } from 'react';
import { ComponentStory, ComponentMeta } from '@storybook/react';
import { VerticalStepper } from './VerticalStepper';
import { LibPath } from 'Types';

export default {
  title: LibPath.Navigation + 'VerticalStepper' || 'undefined',
  component: VerticalStepper,
  argTypes: {
    stepsContent: {
      defaultValue: [
        {
          label: 'Step 1',
          children: <div>Step 1</div>,
        },
        {
          label: 'Step 2',
          children: <div>Step 2</div>,
        },
        {
          label: 'Step 3',
          children: <div>Step 3</div>,
        },
        {
          label: 'Step 4',
          children: <div>Step 4</div>,
        },
        {
          label: 'Step 5',
          children: <div>Step 5</div>,
        },
      ],
    },
    buttonTexts: {
      defaultValue:
        {
          previous: 'Previous',
          next: 'Next',
          complete: 'Complete',
        },
    },
    finalStep: {
      defaultValue: {
        finalText: 'Final Step',
        finalButtonText: 'Finish',
      },
    },
    completedSteps: { defaultValue: [] },
    onFinalize: { action: 'onFinalize' },
    onFinalStep: { action: 'onClose' },
    isCompleteButtonDisabled: { defaultValue: false },
    buttonCaption: {
      defaultValue: {
        text: 'Caption:',
        color: '#000000',
      },
    },
  },
} as ComponentMeta<typeof VerticalStepper>;

const Template: ComponentStory<typeof VerticalStepper> = (args) => {
    const [activeStep, setActiveStep] = useState(0);
    return (
        <div>
             <VerticalStepper {...args} setActiveStep={setActiveStep} activeStep={activeStep} />
        </div>
    )
   
}


export const VerticalStepperTest = Template.bind({});
