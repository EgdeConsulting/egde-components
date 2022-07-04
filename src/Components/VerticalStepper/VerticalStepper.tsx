/* eslint-disable */
import React, { ReactElement } from 'react';
import {
    Menu,
    MenuButton,
    MenuList,
    MenuItem,
    Button,
    Flex,
    Heading,
    Center,
    Text,
} from '@chakra-ui/react';
import { ChevronDownIcon } from '@chakra-ui/icons';
import { StepperProps } from 'Types';

const EditIcon = (): ReactElement => {
    return (
        <svg
            width='40'
            height='40'
            viewBox='0 0 40 40'
            fill='none'
            xmlns='http://www.w3.org/2000/svg'
        >
            <path
                d='M0 20C0 8.95431 8.95431 0 20 0C31.0457 0 40 8.95431 40 20C40 31.0457 31.0457 40 20 40C8.95431 40 0 31.0457 0 20Z'
                fill='#027A1F'
            />
            <path
                d='M22.06 17L23 17.94L13.92 27H13V26.08L22.06 17ZM25.66 11C25.41 11 25.15 11.1 24.96 11.29L23.13 13.12L26.88 16.87L28.71 15.04C29.1 14.65 29.1 14 28.71 13.63L26.37 11.29C26.17 11.09 25.92 11 25.66 11ZM22.06 14.19L11 25.25V29H14.75L25.81 17.94L22.06 14.19Z'
                fill='white'
            />
        </svg>
    );
};

const CheckIcon = (): ReactElement => {
    return (
        <svg
            width='41'
            height='40'
            viewBox='0 0 41 40'
            fill='none'
            xmlns='http://www.w3.org/2000/svg'
        >
            <path
                d='M0.910156 20C0.910156 8.95431 9.86446 0 20.9102 0C31.9559 0 40.9102 8.95431 40.9102 20C40.9102 31.0457 31.9559 40 20.9102 40C9.86446 40 0.910156 31.0457 0.910156 20Z'
                fill='#027A1F'
            />
            <path
                d='M18.9109 23.1715L28.1029 13.9785L29.5179 15.3925L18.9109 25.9995L12.5469 19.6355L13.9609 18.2215L18.9109 23.1715Z'
                fill='white'
            />
        </svg>
    );
};

export const VerticalStepper = (props: StepperProps): ReactElement => {
    const {
        activeStep,
        setActiveStep,
        stepsContent,
        buttonTexts,
        finalStep,
        completedSteps,
        onFinalize,
        onFinalStep,
        isCompleteButtonDisabled,
        buttonCaption,
    } = props;
    const { previous, next, complete } = buttonTexts;
    const { finalText, finalButtonText } = finalStep;
    const activeStepContent = stepsContent.find(
        (_, index) => index === activeStep
    );
    const isStepCompleted = completedSteps?.includes(activeStep);
    return (
        <Flex flexDir='column' width='100%'>
            <Menu flip={false} matchWidth={true} offset={[0, 0]}>
                <MenuButton
                    backgroundColor='white'
                    padding='8px'
                    borderWidth='1px'
                    borderColor='border'
                    shadow='base'
                >
                    <Flex width='100%'>
                        {isStepCompleted ? <CheckIcon /> : <EditIcon />}
                        <Flex width='100%' justifyContent='space-between'>
                            <Flex
                                direction='column'
                                alignItems='start'
                                marginLeft='1rem'
                            >
                                <Heading size='md' textAlign='left'>
                                    {activeStep + 1} av {stepsContent.length}{' '}
                                    {stepsContent[activeStep].label}
                                </Heading>
                                {activeStep < stepsContent.length - 1 && (
                                    <Text textAlign='left' marginBottom='0'>
                                        Neste:{' '}
                                        {stepsContent[activeStep + 1].label}
                                    </Text>
                                )}
                            </Flex>
                            <ChevronDownIcon
                                color='blue'
                                marginLeft='0.5rem'
                                fontSize='1.5rem'
                            />
                        </Flex>
                    </Flex>
                </MenuButton>
                <MenuList>
                    {stepsContent.map(({ label }, index) => (
                        <MenuItem>
                            {label === activeStepContent?.label ? (
                                <Text marginBottom='0'>
                                    {index + 1} av {stepsContent.length} {label}
                                </Text>
                            ) : (
                                <Button
                                    variant='link'
                                    fontWeight='normal'
                                    onClick={() => setActiveStep(index)}
                                >
                                    {index + 1} av {stepsContent.length} {label}
                                </Button>
                            )}
                        </MenuItem>
                    ))}
                </MenuList>
            </Menu>
            {stepsContent[activeStep].children}
            {activeStep === stepsContent.length ? (
                <Center flexDir='column'>
                    <Heading>{finalText}</Heading>
                    <Button
                        variant='primary'
                        marginStart='0.75rem'
                        onClick={() => onFinalize()}
                    >
                        {finalButtonText}
                    </Button>
                </Center>
            ) : (
                <Flex width='100%' direction='column'>
                    {activeStep !== 0 && (
                        <Button
                            variant='secondary'
                            marginStart='0.75rem'
                            marginBottom='1rem'
                            onClick={() => {
                                setActiveStep((prev) => prev - 1);
                                window.scrollTo(0, 227);
                            }}
                        >
                            {previous}
                        </Button>
                    )}

                    <Button
                        isDisabled={
                            isCompleteButtonDisabled
                            && activeStep === stepsContent.length - 1
                        }
                        variant='primary'
                        marginStart='0.75rem'
                        onClick={
                            activeStep === stepsContent.length - 1
                                ? () => {
                                      onFinalStep();
                                      window.scrollTo(0, 227);
                                  }
                                : () => {
                                      setActiveStep((prev) => prev + 1);
                                      window.scrollTo(0, 227);
                                  }
                        }
                    >
                        {activeStep === stepsContent.length - 1
                            ? complete
                            : next}
                    </Button>
                    {buttonCaption && (
                        <Text color={buttonCaption.color}>
                            {buttonCaption.text}
                        </Text>
                    )}
                </Flex>
            )}
        </Flex>
    );
};
