import React, { ReactElement } from 'react';
import {
    Accordion as ChakraAccordion,
    AccordionItem,
    AccordionButton,
    AccordionPanel,
    AccordionIcon,
    Box,
    Badge,
    Stack,
    Text,
} from '@chakra-ui/react';
import { AccordionProps, AccordionBadgeEnum } from 'Types';

/*
    EXAMPLE USE:
    function AccordionExample(): ReactElement {
        const accordionItems = [
            {
                title: 'First accordion',
                content: <div>This is the first accordions content</div>,
            },
            {
                title: 'Second accordion',
                content: <div>This is the second accordions content</div>,
            },
            {
                title: 'Third accordion',
                content: <div>This is the third accordions content</div>,
            },
        ];
        return (
            <div>
                <Accordion items={accordionItems} allowMultiple />
            </div>
        );
    }
*/

const AccordionBadge = (props: {
    badgeType: AccordionBadgeEnum;
}): ReactElement => {
    const { badgeType } = props;
    const color =
        badgeType === AccordionBadgeEnum.OK ? 'badge.ok' : 'badge.wip';
    return (
        <span>
            <Badge
                background={color}
                color="black"
                variant="solid"
                fontWeight="thin"
                textTransform="none"
            >
                {badgeType}
            </Badge>
        </span>
    );
};

const Accordion = (props: AccordionProps): ReactElement => {
    const { items, allowMultiple } = props;

    return (
        <ChakraAccordion allowMultiple={allowMultiple}>
            {items.map((accordionItem, index) => {
                return (
                    <AccordionItem key={`aci${index}`}>
                        <h2>
                            <AccordionButton
                                _expanded={{ background: 'lightblue' }}
                            >
                                <>
                                    <Box flex="1" textAlign="left">
                                        <Stack spacing="0px" direction="column">
                                            <Text color="blue">
                                                {accordionItem.title}
                                            </Text>
                                            {accordionItem.badge && (
                                                <AccordionBadge
                                                    badgeType={
                                                        accordionItem.badge
                                                    }
                                                />
                                            )}
                                        </Stack>
                                    </Box>
                                    <AccordionIcon />
                                </>
                            </AccordionButton>
                        </h2>

                        <AccordionPanel pb={4}>
                            {accordionItem.content}
                        </AccordionPanel>
                    </AccordionItem>
                );
            })}
        </ChakraAccordion>
    );
};

export { Accordion };
