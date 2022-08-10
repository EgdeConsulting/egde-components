/* eslint-disable react/no-unescaped-entities */
import React, { useState } from 'react';
import { Story } from '@storybook/react';
import { AlertDialog, Button, PageContainer, TextAreaInput } from 'Components';
import { Warning } from 'Icons';

const Template: Story = (args) => {
    const [input, setInput] = useState<string>('');
    const [isOpen, setIsOpen] = useState(false);
    const handleClose = () => setIsOpen(false);

    return (
        <div className="notAuthorized">
            <PageContainer
                title={''}
                borderColor={'#000000'}
                borderWidth={'0px'}
                containerMinWidth={'0px'}
                contentPadding={'0px'}
                containerSize={'900px'}
                contentColor={'#ffffff'}
            >
                <PageContainer
                    title={''}
                    borderColor={'#D23F47'}
                    borderWidth={'5px'}
                    containerMinWidth={'700px'}
                    contentPadding={'50px'}
                    containerSize={'850px'}
                    contentColor={'#faebec'}
                >
                    <Warning />
                    <h1>Not Authorized!</h1>
                    <p>
                        Your account doesn't have the necessary rights to be
                        able to access this page. If this is an error or you've
                        like to request access, please fill out the form below.
                        You'll be contacted once your application has been
                        processed.
                    </p>
                </PageContainer>
                <TextAreaInput
                    label={'Why should you have access to this page?'}
                    placeholder={'Write here'}
                    isDisabled={false}
                    width={'700px'}
                    captionText={''}
                    value={input}
                    onChange={setInput}
                />
                <Button
                    label="Submit"
                    variant="secondary"
                    onClick={() => setIsOpen(true)}
                >
                    <AlertDialog
                        buttons={[
                            {
                                label: 'Close',
                                onClick: () => {
                                    setIsOpen(false);
                                },
                                variant: 'secondary',
                            },
                        ]}
                        heading="Application Sent!"
                        iconVariant={undefined}
                        onClose={handleClose}
                        text="You'll be contacted when your application has been processed."
                        cancelRef={React.useRef()}
                        isOpen={isOpen}
                    />
                </Button>
            </PageContainer>
        </div>
    );
};

export const Base = Template.bind({});
Base.args = {};
