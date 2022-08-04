import { HorizontalStepper, FileInput, Radio, TextInput, PageContainer, NumberInput, Checkbox, Select, TextAreaInput } from 'Components';
import React, { useState } from 'react';
import { Story } from '@storybook/react';
import { Box, Heading, VStack, Text, HStack, SimpleGrid } from '@chakra-ui/react';

const FileInputExample = () => {
    return(
        <PageContainer title='Profile Picture' subtitle='Drop file to add profile picture'>
            <FileInput maxFileSize={1000} maxUploadSize={1000} />
        </PageContainer>
    );
};

const CheckBoxExample = () => {
    const [value, setValue] = useState<number[]>([]);

    return(
        <PageContainer
            title='Interests'
            subtitle='Choose youre interests and if you are interested in receiving newsletter' >
            
            <SimpleGrid columns={2}>
                <Checkbox
                    options={[
                        'Sport',
                        'Music',
                        'Wine',
                        'Hiking',
                    ]}
                    value={value}
                    onChange={setValue}
                />
                <Select options={[
                    {
                        label: 'Not interested',
                        value: 0,
                    },
                    {
                        label: 'Interested',
                        value: 1,
                    },
                ]}
                onChange={() => {}}
                label={'Receive newsletter?'}
                />
            </SimpleGrid>
        </PageContainer>

    );
};

const RegistrateContactInfo = () => {
    const [fname, setFname] = useState<string>('');
    const [lname, setLname] = useState<string>('');
    const [email, setEmail] = useState<string>('');
    const [num, setNum] = useState<string>('');
    const [text, setText] = useState<string>('');

    return(
        <Box
            w={['full', 'lg']}
            // eslint-disable-next-line no-magic-numbers
            p={[8, 10]}
            // eslint-disable-next-line no-magic-numbers
            mt={[20, '10ch']}
            mx='auto'
            border={['none', '1px']}
            borderColor={['', 'gray.300']}
            borderRadius={10}
        >
            <VStack spacing={0} align='flex-start'>
                <VStack spacing={1} align={['flex-start', 'center']} w='full' mb={3} >
                    <Heading>Register</Heading>
                    <Text>Please insert the form to register a new Account</Text>
                </VStack>
                <HStack spacing={4}>
                    <TextInput value={fname} onChange={setFname} label={'First name'}/>
                    <TextInput value={lname} onChange={setLname} label={'Last name'}/>
                </HStack>
                <HStack spacing={4}>
                    <TextInput value={email} onChange={setEmail} label={'E-mail'}/>
                    <NumberInput value={num} onChange={setNum} label={'Phonenumber'}/>
                </HStack>
                <Box w={'full'}> <TextAreaInput value={text} onChange={setText} label={'Bio'} /></Box>
            </VStack>
        </Box>
    );
};

const RadioExample = () => {
    const [value, setValue] = useState<number>(-1)
    return(
        <PageContainer title='Gender' subtitle='Choose your gender'>
            <Radio
                options={[
                    'Male',
                    'Female',
                    'Not specified',
                    'Alien',
                ]}
                value ={value}
                onChange={setValue}
            />
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
        <PageContainer 
            title='Register new user' 
            contentMargin={'24px'} 
            backgroundColor={'grey'}
            borderColor={'border'}
            borderWidth={'1px'}
            containerMinWidth={'800px'}
            titlePadding={'24px'}
        >
            
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
                buttonAlignment={'right'}
            />
        </PageContainer>

    );
};

export const Base = Template.bind({});
Base.args = {
};
