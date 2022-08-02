import {
    HorizontalStepper,
    FileInput,
    Radio,
    TextInput,
    PageContainer,
    NumberInput,
    Checkbox,
    Select,
    TextAreaInput,
} from 'Components';
import React, { ReactElement, useState } from 'react';
import { Story } from '@storybook/react';
import { Box, Heading, VStack, Text, HStack, SimpleGrid } from '@chakra-ui/react';

const FileInputExample = (): ReactElement => {
    return (
        <PageContainer title="Profile Picture" subtitle="Drop file to add profile picture">
            <FileInput maxFileSize={1000} maxUploadSize={1000} />
        </PageContainer>
    );
};

const CheckBoxExample = (): ReactElement => {
    return (
        <PageContainer
            title="Interests"
            subtitle="Choose youre interests and if you are interested in receiving newsletter"
        >
            <SimpleGrid columns={2}>
                <Checkbox options={['Sport', 'Music', 'Wine', 'Hiking']} value={[0]} onChange={() => {}} />
                <Select
                    options={[
                        {
                            label: 'Not interested',
                            value: 0,
                        },
                        {
                            label: 'interested',
                            value: 1,
                        },
                    ]}
                    onChange={() => {}}
                    placeholder={'Newsletter'}
                />
            </SimpleGrid>
        </PageContainer>
    );
};

const RegistrateContactInfo = (): ReactElement => {
    return (
        <Box
            w={['full', 'lg']}
            // eslint-disable-next-line no-magic-numbers
            p={[8, 10]}
            // eslint-disable-next-line no-magic-numbers
            mt={[20, '10ch']}
            mx="auto"
            border={['none', '1px']}
            borderColor={['', 'gray.300']}
            borderRadius={10}
        >
            <VStack spacing={0} align="flex-start">
                <VStack spacing={1} align={['flex-start', 'center']} w="full" mb={3}>
                    <Heading>Register</Heading>
                    <Text>Please insert the form to register a new Account</Text>
                </VStack>
                <HStack spacing={4}>
                    <TextInput value="" onChange={() => {}} label={'First name'} />
                    <TextInput value="" onChange={() => {}} label={'Last name'} />
                </HStack>
                <HStack spacing={4}>
                    <TextInput value="" onChange={() => {}} label={'E-mail'} />
                    <NumberInput value="" onChange={() => {}} label={'Phonenumber'} />
                </HStack>
                <Box w={'full'}>
                    {' '}
                    <TextAreaInput value="" onChange={() => {}} label={'Bio'} />
                </Box>
            </VStack>
        </Box>
    );
};

const RadioExample = (): ReactElement => {
    return (
        <PageContainer title="Gender" subtitle="Choose your gender">
            <Radio options={['Male', 'Female', 'Not specified', 'Alien']} value={0} onChange={() => {}} />
        </PageContainer>
    );
};

const stepsContent = [
    {
        label: 'Step 1',
        children: <RegistrateContactInfo />,
    },
    {
        label: 'Step 2',
        children: <FileInputExample />,
    },
    {
        label: 'Step 3',
        children: <RadioExample />,
    },
    {
        label: 'Step 4',
        children: <CheckBoxExample />,
    },
];

const initialStep = 0;

const buttonTexts = {
    previous: 'Previous',
    next: 'Next',
    complete: 'Complete',
};

const finalStep = {
    finalText: 'Congratulations, you have finished',
    finalButtonText: 'Go back',
};

const Template: Story = (args) => {
    const [activeStep, setActiveStep] = useState<number>(initialStep);
    return (
        <PageContainer title="Register new user" contentMargin={'24px'}>
            <HorizontalStepper
                {...args}
                setActiveStep={setActiveStep}
                activeStep={activeStep}
                stepsContent={stepsContent}
                buttonTexts={buttonTexts}
                finalStep={finalStep}
                onFinalize={() => {}}
                onFinalStep={() => {}}
                buttonMargin={'12px'}
            />
        </PageContainer>
    );
};

export const Base = Template.bind({});
Base.args = {};
