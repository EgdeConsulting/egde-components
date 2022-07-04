import {
    AlertDialog as ChakraAlertDialog,
    AlertDialogBody,
    AlertDialogFooter,
    AlertDialogContent,
    AlertDialogOverlay,
    Button,
    AlertDialogHeader,
    Icon,
    Flex,
    Heading,
    Text,
} from '@chakra-ui/react';
import React, { ReactElement } from 'react';
import { AlertDialogProps, IconTestID, AlertDialogIconType } from 'Types';
import { Warning } from 'Icons';

export const AlertDialog = (props: AlertDialogProps): ReactElement => {
    const {
        iconVariant,
        heading,
        text,
        isOpen,
        cancelRef,
        onClose,
        buttons } = props;

    const iconStyle = {
        color: 'red',
        marginRight: '8px',
        size: '24px',
        testID: IconTestID.AlertDialog,
        ...(iconVariant === AlertDialogIconType.Warning && {
            icon: Warning,
        }),
    };
    return (
        <ChakraAlertDialog
            isOpen={isOpen}
            leastDestructiveRef={cancelRef.current}
            onClose={onClose}
        >
            <AlertDialogOverlay>
                <AlertDialogContent>
                    <AlertDialogHeader>
                        <Flex width='100%' direction='row'>
                            {iconVariant && (
                                <Icon
                                    as={Warning}
                                    color={iconStyle.color}
                                    marginRight={iconStyle.marginRight}
                                    style={{ fontSize: iconStyle.size }}
                                    data-testid={iconStyle.testID}
                                />
                            )}
                            <Heading size='md'>{heading}</Heading>
                        </Flex>
                    </AlertDialogHeader>

                    <AlertDialogBody>
                        <Text>{text}</Text>
                    </AlertDialogBody>

                    <AlertDialogFooter>
                        {buttons.map(({ label, variant, onClick }, index) => (
                            <Button
                                variant={variant}
                                onClick={onClick}
                                key={`adfbtn${index}`}
                            >
                                {label}
                            </Button>
                        ))}
                    </AlertDialogFooter>
                </AlertDialogContent>
            </AlertDialogOverlay>
        </ChakraAlertDialog>
    );
};
