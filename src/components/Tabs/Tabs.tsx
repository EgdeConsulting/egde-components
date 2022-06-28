import React, { ReactElement } from 'react';
import {
    Tabs as ChakraTabs,
    TabList,
    TabPanels,
    Tab,
    TabPanel,
    Center,

} from '@chakra-ui/react';
import { TabProps } from 'Types';



function Tabs(props: TabProps): ReactElement {
    const { 
        tabs,
        centerTabs,
    } = props;

    return (
        <ChakraTabs>
            {centerTabs ? (
                <Center>
                    <TabList >
                        {tabs.map((tab, index) => {
                            return <Tab key={`tl${index}`}>{tab.title}</Tab>;
                        })}
                    </TabList>
                </Center>
            ) : (
                <TabList >
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
}


export { Tabs };
