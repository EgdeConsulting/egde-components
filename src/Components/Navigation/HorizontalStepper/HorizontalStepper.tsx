import { Flex, Center, Heading, Button, Text } from '@chakra-ui/react';
import { EditIcon } from 'Icons';
import { Step, Steps } from 'chakra-ui-steps';
import { StepperProps } from 'Types';
import React, { ReactElement } from 'react';

const HorizontalStepper = (props: StepperProps): ReactElement => {
    const {
        activeStep,
        setActiveStep,
        stepsContent,
        buttonTexts,
        finalStep,
        buttonAlignment,
        buttonMargin,
        clickableSteps,
        completedSteps,
        onFinalize,
        buttonCaption,
        onFinalStep,
        isCompleteButtonDisabled,
    } = props;
    const { previous, next, complete } = buttonTexts;
    const { finalText, finalButtonText } = finalStep;

    return (
        <Flex flexDir="column" width="100%">
            <Steps activeStep={activeStep}>
                {stepsContent.map(({ label, children }, index) => (
                    <Step
                        isCompletedStep={
                            completedSteps === undefined
                                ? activeStep > index
                                : completedSteps.includes(index)
                        }
                        _hover={
                            clickableSteps
                                ? {
                                    cursor: 'pointer',
                                    background: 'lightblue',
                                    borderRadius: '20px',
                                }
                                : undefined
                        }
                        label={label}
                        key={`stp${index}`}
                        icon={activeStep === index ? EditIcon : undefined}
                        onClickCapture={
                            clickableSteps ? () => setActiveStep(index) : undefined
                        }
                    >
                        {children}
                    </Step>
                ))}
            </Steps>
            {activeStep === stepsContent.length ? (
                <Center flexDir="column">
                    <Heading>{finalText}</Heading>
                    <Button variant={'primary'} onClick={() => onFinalize()}>
                        {finalButtonText}
                    </Button>
                </Center>
            ) : (
                <Flex
                    width="100%"
                    justify={
                    // eslint-disable-next-line no-nested-ternary
                        buttonAlignment === 'right'
                            ? 'flex-end'
                            : buttonAlignment === 'left'
                                ? 'flex-start'
                                : 'center'
                    }
                    margin={buttonMargin}
                >
                    {activeStep !== 0 && (
                        <Button
                            variant={'secondary'}
                            onClick={() => setActiveStep((prev) => prev - 1)}
                        >
                            {previous}
                        </Button>
                    )}
                    <Flex direction="column">
                        <Button
                            isDisabled={
                                isCompleteButtonDisabled
                        && activeStep === stepsContent.length - 1
                            }
                            variant={'primary'}
                            onClick={
                                activeStep === stepsContent.length - 1
                                    ? () => onFinalStep()
                                    : () => setActiveStep((prev) => prev + 1)
                            }
                        >
                            {activeStep === stepsContent.length - 1 ? complete : next}
                        </Button>
                        {buttonCaption && (
                            <Text color={buttonCaption.color}>{buttonCaption.text}</Text>
                        )}
                    </Flex>
                </Flex>
            )}
        </Flex>
    );
};

export { HorizontalStepper };
