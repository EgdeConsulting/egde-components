import React, { ReactElement, useState } from 'react';
import '@testing-library/jest-dom';
import { cleanup, render, screen, waitFor  } from '@testing-library/react';
import { VerticalStepper } from './VerticalStepper';
import userEvent from '@testing-library/user-event';
import { ChakraProvider } from '@chakra-ui/react';
import { styles } from 'Styles';
import { createRoot } from "react-dom/client";


const FIRST_STEP_LABEL = 'first step';
const FIRST_STEP_TEXT = 'text of first step';
const SECOND_STEP_LABEL = 'second step';
const SECOND_STEP_TEXT = 'text of second step';
const THIRD_STEP_LABEL = 'third step';
const THIRD_STEP_TEXT = 'text of third step';
const PREVIOUS_BUTTON_TEXT = 'previous';
const NEXT_BUTTON_TEXT = 'next';
const COMPLETE_BUTTON_TEXT = 'complete';
const FINAL_TEXT = 'final text';
const FINAL_BUTTON_TEXT = 'final button text';
const BUTTON_CAPTION_TEXT = 'errors exist';
const BUTTON_ALIGNMENT = 'center';
const BUTTON_MARGIN = '0';

const buttonTexts = {
    previous: PREVIOUS_BUTTON_TEXT,
    next: NEXT_BUTTON_TEXT,
    complete: COMPLETE_BUTTON_TEXT,
};

const finalStep = {
    finalText: FINAL_TEXT,
    finalButtonText: FINAL_BUTTON_TEXT,
};

const testerSteps = [
    {
        label: FIRST_STEP_LABEL,
        children: <>{FIRST_STEP_TEXT}</>,
    },
    {
        label: SECOND_STEP_LABEL,
        children: <>{SECOND_STEP_TEXT}</>,
    },
    {
        label: THIRD_STEP_LABEL,
        children: <>{THIRD_STEP_TEXT}</>,
    },
];

const UnclickableVerticalStepperTester=(): ReactElement =>{
    const [activeStep, setActiveStep] = useState<number>(0);

    return (
        <ChakraProvider theme={styles}>
            <VerticalStepper
                activeStep={activeStep}
                setActiveStep={setActiveStep}
                stepsContent={testerSteps}
                buttonTexts={buttonTexts}
                finalStep={finalStep}
                onFinalStep={() => setActiveStep(testerSteps.length)}
                onFinalize={() => setActiveStep(0)}
                buttonAlignment={BUTTON_ALIGNMENT}
                buttonMargin={BUTTON_MARGIN}
                completedSteps={[]}
                buttonCaption={{
                    text: 'ButtonCaption',
                    color: 'red',
                }}
            />
        </ChakraProvider>
    );
}
const ClickableVerticalStepperTester =(): ReactElement =>{
    const [activeStep, setActiveStep] = useState<number>(0);
    const [isPublishClicked, setIsPublishClicked] = useState<boolean>(false);

    return (
        <ChakraProvider theme={styles}>
            <VerticalStepper
                activeStep={activeStep}
                setActiveStep={setActiveStep}
                stepsContent={testerSteps}
                buttonTexts={buttonTexts}
                finalStep={finalStep}
                clickableSteps
                buttonCaption={
                    activeStep === testerSteps.length - 1 && isPublishClicked
                        ? {
                              text: BUTTON_CAPTION_TEXT,
                              color: 'red',
                          }
                        : undefined
                }
                onFinalStep={() => setIsPublishClicked(true)}
                onFinalize={() => setActiveStep(0)}
                buttonAlignment={BUTTON_ALIGNMENT}
                buttonMargin={BUTTON_MARGIN}
            />
        </ChakraProvider>
    );
}

afterEach(cleanup);
describe('UnclickableVerticalStepper component test', () => {
    it('matches snapshot', () => {
        const tree = render(<UnclickableVerticalStepperTester/>);
        expect(tree).toMatchSnapshot();
      });
      it('renders without chrashing', () => {
        const div = document.createElement('div');
const root = createRoot(div);

root.render(<UnclickableVerticalStepperTester/>);
    })
     
    it('should render UnclickableVerticalStepper with only next button and first step content', () => {
        render(<UnclickableVerticalStepperTester />);
        expect(screen.getByText(FIRST_STEP_TEXT)).toBeVisible();
        expect(screen.queryByText(SECOND_STEP_TEXT)).toBeNull();
        expect(screen.queryByText(THIRD_STEP_TEXT)).toBeNull();
        expect(
            screen.queryByRole('button', {
                name: PREVIOUS_BUTTON_TEXT,
            })
        ).toBeNull();
        expect(
            screen.getByRole('button', {
                name: NEXT_BUTTON_TEXT,
            })
        ).toBeVisible();
    });
    it('should reveal previousButton when nextButton is clicked, and show second step content', async () => {
        render(<UnclickableVerticalStepperTester />);
        const nextButton = screen.getByRole('button', {
            name: NEXT_BUTTON_TEXT,
        });
        userEvent.click(nextButton);
        await waitFor(() =>
            expect(screen.queryByText(FIRST_STEP_TEXT)).toBeNull()
        );
        expect(await screen.findByText(SECOND_STEP_TEXT)).toBeVisible();
        expect(
            await screen.findByRole('button', {
                name: PREVIOUS_BUTTON_TEXT,
            })
        ).toBeVisible();
    });
    it.skip('should change text to complete on nextButton when clicked two times, and change to final view when clicked the third time', async () => {
        render(<UnclickableVerticalStepperTester />);
        const nextButton = screen.getByRole('button', {
            name: NEXT_BUTTON_TEXT,
        });
        userEvent.click(nextButton);
        expect(await screen.findByText(SECOND_STEP_TEXT)).toBeVisible();
        userEvent.click(nextButton);
        expect(await screen.findByText(THIRD_STEP_TEXT)).toBeVisible();
        await waitFor(() =>
            expect(nextButton).toHaveTextContent(COMPLETE_BUTTON_TEXT)
        );
        userEvent.click(nextButton);
        expect(await screen.findByText(FINAL_TEXT)).toBeVisible();
        expect(
            await screen.findByRole('button', {
                name: FINAL_BUTTON_TEXT,
            })
        ).toBeVisible();
        await waitFor(() => {
            expect(
                screen.queryByRole('button', {
                    name: PREVIOUS_BUTTON_TEXT,
                })
            ).toBeNull();
            expect(nextButton).not.toBeVisible();
        });
    });
});

describe('ClickableVerticalStepper component test', () => {
    window.scrollTo = jest.fn();
    it('matches snapshot', () => {
        const tree = render(<ClickableVerticalStepperTester/>);
        expect(tree).toMatchSnapshot();
      });

      it('renders without chrashing', () => {
        const div = document.createElement('div');
const root = createRoot(div);

root.render(<ClickableVerticalStepperTester/>);
    })

    it.skip('should jump to third step when thirdStepLabelButton is clicked, and show third step content. Should then reveal buttonCaptionText when nextButton is clicked', async () => {
        render(<ClickableVerticalStepperTester />);
        const nextButton = screen.getByRole('button', {
            name: NEXT_BUTTON_TEXT,
        });
        const thirdStepLabelButton = screen.getByText(THIRD_STEP_LABEL);
        userEvent.click(thirdStepLabelButton);
        await waitFor(() =>
            expect(screen.queryByText(FIRST_STEP_TEXT)).toBeNull()
        );
        expect(await screen.findByText(THIRD_STEP_TEXT)).toBeVisible();
        await waitFor(() =>
            expect(nextButton).toHaveTextContent(COMPLETE_BUTTON_TEXT)
        );
        userEvent.click(nextButton);
        expect(await screen.findByText(BUTTON_CAPTION_TEXT)).toBeVisible();
        expect(
            await screen.findByRole('button', {
                name: PREVIOUS_BUTTON_TEXT,
            })
        ).toBeVisible();
        await waitFor(() => {
            expect(nextButton).toBeVisible();
        });
    });
});
