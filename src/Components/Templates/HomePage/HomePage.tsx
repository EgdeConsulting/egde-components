import React from 'react';
import { Story } from '@storybook/react';
import { PageContainer, Card } from 'Components';
import { Grid, SimpleGrid } from '@chakra-ui/react';
import { MailIcon, ProfileIcon, ParkingIcon } from 'Icons';

const Template: Story = (args) => {
    return (
        <PageContainer {...args} title={'Home Page!'}>
            <SimpleGrid columns={2}>
                <Grid gap={25} templateColumns="repeat(2, 1fr)">
                    <Card
                        title={'Personal Profile'}
                        body={'See and change your personal profile'}
                        cardWidth={'320px'}
                        cardHeight={'112px'}
                        titleTextSize={'sm'}
                        actionIcon={<ProfileIcon />}
                    />
                    <Card
                        title={'Mail'}
                        body={'Press here if you want to read your E-Mails'}
                        cardWidth={'320px'}
                        cardHeight={'112px'}
                        titleTextSize={'sm'}
                        actionIcon={<MailIcon />}
                    />
                    <Card
                        title={'Parking'}
                        body={
                            'Here you can register your parking. Avoid the fines'
                        }
                        cardWidth={'320px'}
                        cardHeight={'112px'}
                        titleTextSize={'sm'}
                        actionIcon={<ParkingIcon />}
                    />
                </Grid>
            </SimpleGrid>
        </PageContainer>
    );
};

export const Base = Template.bind({});
Base.args = {
    backgroundColor: 'grey',
    borderColor: 'border',
    borderWidth: '1px',
    containerMargin: '50px 336px 50px 336px',
    containerMinWidth: '800px',
    containerPadding: '40px 56px 40px 56px',
    contentPadding: '0 56px 40px 56px ',
    subtitle:
        'As an employee, you have access to various services based on your rights. See your services below.',
    subtitlePadding: '16px 154px 32px 154px',
    titlePadding: '40px 0 0 0',
};
Base.parameters = {
    design: {
        type: 'figma',
        url: 'https://www.figma.com/embed?embed_host=share&url=https%3A%2F%2Fwww.figma.com%2Ffile%2FEJIkFfSihoZ9REmtu30QwX%2FUntitled%3Fnode-id%3D0%253A3',
    }
}


