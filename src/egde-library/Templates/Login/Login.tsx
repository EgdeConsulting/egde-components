import React, { useState } from 'react';
import { Story } from '@storybook/react';
import { PageContainer, TextInput, Checkbox, Button } from 'egde-components';
import { VStack, HStack, Box, Spacer } from '@chakra-ui/react';

const Template: Story = (args) => {
    const [value, setValue] = useState<number[]>([]);
    const [userValue, setUserValue] = useState<string>('');
    const [passValue, setPassValue] = useState<string>('');

    return (
        <PageContainer
            title="Log in page"
            borderWidth={'10ch'}
            borderColor={'grey'}
            contentColor={'grey'}
            titlesColor={'grey'}
        >
            <Box>
                <VStack spacing={4} align="flex-start" w={'full'}>
                    <TextInput
                        value={userValue}
                        onChange={setUserValue}
                        label={'First name'}
                        width={'45ch'}
                    />
                    <TextInput
                        value={passValue}
                        onChange={setPassValue}
                        label={'Last name'}
                        width={'420px'}
                    />
                </VStack>
                <VStack mb={3} align={'flex-start'}>
                    <Checkbox
                        options={['Remember me']}
                        value={value}
                        onChange={setValue}
                    />
                </VStack>

                <HStack>
                    <Button
                        label="Log in"
                        variant="primary"
                        onClick={() => {}}
                    />
                    <Spacer />
                    <Button
                        label="Forgot password"
                        variant="link"
                        onClick={() => {}}
                    />
                </HStack>
            </Box>
        </PageContainer>
    );
};

export const Base = Template.bind({});
Base.args = {};
