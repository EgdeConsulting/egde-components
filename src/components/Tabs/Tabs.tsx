import React, { ReactElement } from 'react';
import {
    Tabs as ChakraTabs,
    TabList,
    TabPanels,
    Tab,
    TabPanel,
    Center,
} from '@chakra-ui/react';


type TabProps = {
    tabs: Tab[];
    centerTabs?: boolean;
    //tabColor: string;
    //fontSize: string;
    //selectedTabColor: string;
    //selectedFontWeight: string;
    //selectedBorderBottom: string; */
};

type Tab = {
    title: string;
    children: JSX.Element[] | JSX.Element;
};





function Tabs(props: TabProps): ReactElement {
    const { tabs, centerTabs} = props;


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
}


export default Tabs;