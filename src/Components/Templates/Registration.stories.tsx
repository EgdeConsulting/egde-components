/*
import { HorizontalStepper } from '../HorizontalStepper'; // Unsure why 'Components can't be used here'
import { Checkbox } from '../Checkbox';
import { NumberInput } from '../Input/NumberInput';
import React, { useState } from 'react';
import { Story } from '@storybook/react';

const Template: Story = (args) => {
    const [activeStep, setActiveStep] = useState(0);
    return (
        <div>
            <HorizontalStepper
                {...args}
                setActiveStep={setActiveStep}
                activeStep={activeStep}
                stepsContent={[
                    {
                        label: 'Step 1',
                        children: (
                            <div>
                                <p>What is your gender?</p>
                            </div>
                        ),
                    },
                    {
                        label: 'Step 2',
                        children: (
                            <div>
                                <p>What is your age?</p>
                            </div>
                        ),
                    },
                ]}
                buttonTexts={{
                    previous: 'previous',
                    next: 'next',
                    complete: 'complete',
                }}
                finalStep={{
                    finalText: 'finalText',
                    finalButtonText: 'fintalButtonText',
                }}
                onFinalize={() => {}}
                onFinalStep={() => {}}
            />
        </div>
    );
};

export const Base = Template.bind({});
Base.args = {
    activeStep: 1,
};

*/

// WORKS!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!
import React from 'react';
import { Checkbox } from 'Components';
import { Story } from '@storybook/react';

const Template: Story = (args) => {
    return (
        <Checkbox
            {...args}
            options={[
                'Checkbox Option One',
                'Checkbox Option Two',
                'Checkbox Option Three',
            ]}
            value={[1]}
            onChange={() => {}}
        />
    );
};

export const Base = Template.bind({});
Base.args = {
    isDisabled: false,
    label: 'Checkbox',
    labelTextMargin: '10px',
};

export const SecondStory = Template.bind({});
SecondStory.args = {
    isDisabled: true,
    label: 'Disabled Checkbox',
    labelTextMargin: '0px',
};
