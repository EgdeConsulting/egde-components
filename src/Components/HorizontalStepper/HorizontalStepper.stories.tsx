import React, { useState } from 'react';
import { LibPath } from 'Types';
import { HorizontalStepper } from './HorizontalStepper';
import { ComponentStory, ComponentMeta } from '@storybook/react';

export default {
  title: LibPath.Navigation + 'HorizontalStepper' || 'undefined',
  component: HorizontalStepper,
  argTypes: {
    label: { defaultValue: 'HorizontalStepper' },
    activeStep: { defaultValue: 0 },
    setActiveStep: { defaultValue: () => {} },
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
      defaultValue: {
        previous: 'previous',
        next: 'next',
        complete: 'complete',
      },
    },
    finalStep: {
      defaultValue: {
        finalText: 'finalText',
        finalButtonText: 'fintalButtonText',
      },
    },
    buttonAlignment: { defaultValue: 'left' },
    buttonMargin: { defaultValue: '10px' },
    clickableSteps: { defaultValue: true },
    completedSteps: { defaultValue: [] },
    onFinalize: { defaultValue: () => {} },
    buttonCaption: {
      defaultValue: {
        text: 'Placeholder',
        color: '#ffffff',
      },
    },
    onFinalStep: { defaultValue: () => {} },
    isCompleteButtonDisabled: { defaultValue: true },
  },
} as ComponentMeta<typeof HorizontalStepper>;

const Template: ComponentStory<typeof HorizontalStepper> = (args) => {
  const [activeStep, setActiveStep] = useState(0);
  return (
      <div>
           <HorizontalStepper {...args} setActiveStep={setActiveStep} activeStep={activeStep} />
      </div>
  )
 
}

export const HorizontalStepperStd = Template.bind({});
HorizontalStepperStd.args = {};
