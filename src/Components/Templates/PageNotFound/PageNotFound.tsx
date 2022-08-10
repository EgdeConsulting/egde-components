/* eslint-disable react/no-unescaped-entities */
import React from 'react';
import { Story } from '@storybook/react';
import { Button, PageContainer } from 'Components';
import { ErrorRounded } from 'Icons';

const Template: Story = (args) => {
    const handleOnClick = () => {};

    return (
        <div className="pageNotFound">
            <PageContainer
                title={''}
                borderColor={'grey'}
                borderWidth={'5px'}
                containerMinWidth={'700px'}
                contentPadding={'50px'}
                containerSize={'850px'}
                contentColor={'grey'}
            >
                <h1>404</h1>
                <h2>Sorry: Page not found</h2>
                <ErrorRounded />
                <p>
                    The page you are looking for doesn't exist, has moved, or is
                    no longer available.
                </p>
                <Button
                    label="Go back to Homepage"
                    variant="primary"
                    onClick={() => handleOnClick}
                ></Button>
            </PageContainer>
        </div>
    );
};

export const Base = Template.bind({});
Base.args = {};
