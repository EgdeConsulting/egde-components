import React, { ReactElement } from 'react';
import {
    Tabs as ChakraTabs,
    TabList,
    TabPanels,
    Tab,
    TabPanel,
    Center,
} from '@chakra-ui/react';
import { TabProps } from 'egde-types';

/*
    EXAMPLE USE:
    function TabsExample(): JSX.Element {
        const tabs = [
            { title: 'Text', children: <TextExample /> },
            { title: 'TextArea', children: <TextAreaExample /> },
            { title: 'Number', children: <NumberExample /> },
            { title: 'Radio', children: <RadioExample /> },
            { title: 'Checkbox', children: <CheckboxExample /> },
            { title: 'Modal', children: <ModalExample /> },
            { title: 'Card', children: <CardExample /> },
            { title: 'Accordion', children: <AccordionExample /> },
        ];

        return (
            <PageContainer
                title='Tabs example'
            >
                <Tabs tabs={tabs} />
            </PageContainer>
        );
    }
*/

const Tabs = (props: TabProps): ReactElement => {
    const { tabs, centerTabs } = props;
    return (
        <ChakraTabs>
            {centerTabs ? (
                <Center>
                    <TabList>
                        {tabs.map((tab, index) => {
                            return <Tab key={`tl${index}`}>{tab.title}</Tab>;
                        })}
                    </TabList>
                </Center>
            ) : (
                <TabList>
                    {tabs.map((tab, index) => {
                        return <Tab key={`tl${index}`}>{tab.title}</Tab>;
                    })}
                </TabList>
            )}
            <TabPanels>
                {tabs.map((tab, index) => {
                    return (
                        <TabPanel key={`tp${index}`}>{tab.children}</TabPanel>
                    );
                })}
            </TabPanels>
        </ChakraTabs>
    );
};

export { Tabs };
