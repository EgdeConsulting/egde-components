import React from 'react';
import { render } from '@testing-library/react';
import { HorizontalStepper } from './HorizontalStepper';

// Snapshot Test
describe('Snapshot HorizontalStepper', () => {
  it('should render correctly', () => {
    const tree = render(<HorizontalStepper
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
        buttonAlignment= 'center'
        buttonMargin= '0'
        clickableSteps= {true}
        completedSteps= {[]}
        onFinalize= {() => {}}
        buttonCaption= {{
            text: 'Caption:',
            color: '#000000',
        }}
        onFinalStep= {() => {}}
        isCompleteButtonDisabled= {false}
        
        />
        );
    expect(tree).toMatchSnapshot();
  });
});


