import React, { ReactElement, useState } from 'react';
import { Story } from '@storybook/react';
import { Modal, PageContainer, Button, Alert } from 'egde-components';
import {
    Box,
    Flex,
    Table,
    TableContainer,
    Tbody,
    Td,
    Tr,
    Text,
    Image,
    VStack,
} from '@chakra-ui/react';

const TabExample = (): ReactElement => {
    return (
        <TableContainer>
            <Table variant="unstyled">
                <Tbody>
                    <Tr>
                        <Td>Email</Td>
                        <Td>Example@mail.com</Td>
                    </Tr>
                    <Tr>
                        <Td>Number</Td>
                        <Td>+4712345690</Td>
                    </Tr>
                </Tbody>
            </Table>
        </TableContainer>
    );
};

const Template: Story = () => {
    const [isModalOpen, setIsModalOpen] = useState(false);
    const handleClose = () => setIsModalOpen(false);

    return (
        <PageContainer
            title={'My Profile'}
            backgroundColor={'grey'}
            borderColor={'border'}
            borderWidth={'1px'}
            containerMargin={'80px 336px 80px 336px'}
            containerMinWidth={'800px'}
            containerPadding={'40px 56px 40px 56px'}
            contentPadding={'0 56px 40px 56px '}
            subtitle={'Harry Will Ramsbottom'}
            subtitlePadding={'16px 154px 32px 154px'}
            titlePadding={'40px 0 0 0'}
            containerSize={'200sch'}
        >
            <VStack>
                {/* <Circle
                position={'absolute'}
                opacity='0.1'
                bg={'blue'}
                minWidth='150px'
                minHeight={'150px'}
                alignSelf='flex-end' /> */}
                <Flex alignSelf={'flex-start'} direction={'row'} p="32px">
                    <Box mt={'0'} alignSelf="flex-start">
                        <TabExample />
                        <Text align={'center'} fontWeight={'bold'}>
                            Bio
                        </Text>
                        <Text mb={'24px'}>
                            Harry Will Ramsbottom is a 20-year-old local
                            activist who enjoys reading, cycling and traveling.
                            He is smart and inspiring, but can also be very lazy
                            and a bit dull.
                        </Text>
                        <Button
                            label="Edit profile"
                            variant="secondary"
                            onClick={() => {}}
                        ></Button>
                        <Button
                            onClick={() => setIsModalOpen(true)}
                            variant={'delete'}
                            label={'Delete Consent'}
                        >
                            <Modal
                                isModalOpen={isModalOpen}
                                isCentered={false}
                                title={'Removing consent'}
                                subtitle={
                                    'If you want to remove the consent. Press the confirm Button'
                                }
                                buttons={{
                                    primary: {
                                        label: 'Confirm',
                                        variant: 'primary',
                                        onClick: () => {},
                                    },
                                    secondary: {
                                        label: 'Close',
                                        variant: 'secondary',
                                        onClick: handleClose,
                                    },
                                    alignment: 'left',
                                }}
                                onClose={handleClose}
                                hasCloseButton={true}
                            >
                                <Alert
                                    description="You will be logged out after confirming"
                                    status="warning"
                                ></Alert>
                            </Modal>
                        </Button>
                    </Box>
                    <Image
                        alignSelf="right"
                        mt="0"
                        mb="0"
                        boxSize="150px"
                        borderRadius={'full'}
                        backgroundColor={'transparent'}
                        boxShadow="lg"
                        // eslint-disable-next-line max-len
                        src="https://i.imgur.com/0ZRAeaR.jpg"
                    />
                </Flex>
            </VStack>
        </PageContainer>
    );
};

export const Base = Template.bind({});
Base.args = {
    backgroundColor: 'grey',
    borderColor: 'grey',
    borderWidth: '1px',
    containerMargin: '0px 0px 0px 0px',
    containerPadding: '0 0 2rem 0',
    // eslint-disable-next-line no-magic-numbers
    containerSideMargins: [3, 15, 30, 100],
    containerSize: '110ch',
    contentColor: 'white',
    contentPadding: '1.25rem 3.25rem 3.25rem 3.25rem',
    shouldContentFillContainer: true,
    subtitleAlignment: 'left',
    subtitleTextColor: 'darkgrey',
    titlePadding: '3.25rem 0 0 3.5rem',
    titleTextColor: 'darkgrey',
    titlesColor: 'white',
};
