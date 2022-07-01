import React from 'react';
import { ComponentStory, ComponentMeta } from '@storybook/react';
import { VerticalStepper } from './VerticalStepper';
import { LibPath } from 'Types';

export default {
  title: LibPath.Navigation + 'VerticalStepper' || 'undefined',
  component: VerticalStepper,
  argTypes: {
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
      defaultValue: [
        {
          previous: 'Previous',
          next: 'Next',
          complete: 'Complete',
        },
      ],
    },
    finalStep: {
      defaultValue: {
        finalText: 'Final Step',
        finalButtonText: 'Finish',
      },
    },
    completedSteps: { defaultValue: [] },
    onFinalize: { defaultValue: () => {} },
    onFinalStep: { defaultValue: () => {} },
    isCompleteButtonDisabled: { defaultValue: false },
    buttonCaption: {
      defaultValue: {
        text: 'Caption:',
        color: '#000000',
      },
    },
  },
} as ComponentMeta<typeof VerticalStepper>;

const Template: ComponentStory<typeof VerticalStepper> = (args) => <VerticalStepper {...args} />;

export const VerticalStepperTest = Template.bind({});
