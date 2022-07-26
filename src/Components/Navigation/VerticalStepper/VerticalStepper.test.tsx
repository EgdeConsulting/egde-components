import React from 'react';
import { render } from '@testing-library/react';
import { VerticalStepper } from './VerticalStepper';

// Snapshot Test
describe('Snapshot VerticalStepper', () => {
  it('should render correctly', () => {
    const tree = render(<VerticalStepper
        activeStep= {0}
        setActiveStep= {() => {}}
        stepsContent= {[
            {
                label: 'Step 1',
                children: <div> Content of Step 1</div>,
            },
            {
                label: 'Step 2',
                children: <div>Content of Step 2</div>,
            },
            {
                label: 'Step 3',
                children: <div>Content of Step 3</div>,
            },
            {
                label: 'Step 4',
                children: <div>Content of Step 4</div>,
            },
            {
                label: 'Step 5',
                children: <div>Content of Step 5</div>,
            },
        ]}
        buttonTexts= {{
            previous: 'Previous',
            next: 'Next',
            complete: 'Complete',
        }}

        finalStep={{
            finalText: 'Final Step',
            finalButtonText: 'Finish',
        }}
        completedSteps= {[]}
        onFinalize= {() => {}}
        onFinalStep= {() => {}}
        isCompleteButtonDisabled= {false}
        buttonCaption= {{
            text: 'Caption:',
            color: '#000000',
        }}
        />
        );
    expect(tree).toMatchSnapshot();
  });
});


