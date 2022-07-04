import React, { ReactElement } from 'react';
import { AlertProps, IconTestID, AlertStatus } from 'Types';
import {
    Alert as ChakraAlert,
    AlertIcon,
    AlertDescription,
    CloseButton,
    Spacer,
    Stack,
    Link,
} from '@chakra-ui/react';
import {
    ErrorRounded,
    ErrorRoundedWarning,
    InfoRounded,
    CheckCircleRounded,
} from '../../Icons';


export const Alert = (props: AlertProps): ReactElement => {
    const { status, description, onClose, linkText, linkHref } = props;
    // styling should ideally be abstracted to ./Styles,
    // but didn't manage that with useMultiStyleConfig
    const styleComposition = {
        textColor: 'darkgrey',
        borderRadius: '6px',
        width: '400px',
        ...(status === AlertStatus.Warning && {
            backgroundColor: 'yellow',
            iconColor: 'amber',
            icon: ErrorRoundedWarning,
            iconTestID: IconTestID.AlertWarning,
        }),
        ...(status === AlertStatus.Info && {
            backgroundColor: 'lightblue',
            iconColor: 'blue',
            icon: InfoRounded,
            iconTestID: IconTestID.AlertInfo,
        }),
        ...(status === AlertStatus.Error && {
            backgroundColor: 'lightred',
            iconColor: 'red',
            icon: ErrorRounded,
            iconTestID: IconTestID.AlertError,
        }),
        ...(status === AlertStatus.Success && {
            backgroundColor: 'lightgreen',
            iconColor: 'green',
            icon: CheckCircleRounded,
            iconTestID: IconTestID.AlertSuccess,
        }),
    };

    return (
        <ChakraAlert
            status={status}
            color={styleComposition.textColor}
            colorScheme={styleComposition.backgroundColor}
            borderRadius={styleComposition.borderRadius}
            width={styleComposition.width}
        >
            <AlertIcon
                color={styleComposition.iconColor}
                as={styleComposition.icon}
                data-testid={styleComposition.iconTestID}
                position='absolute'
                left='12px'
                top='12px'
            />
            <Stack px='28px'>
                <AlertDescription>{description}</AlertDescription>
                {linkText && linkHref && (
                    <Link
                        href={linkHref}
                        color='blue'
                        textDecoration='underline'
                    >
                        {linkText}
                    </Link>
                )}
            </Stack>
            <Spacer />
            <CloseButton
                position='absolute'
                right='8px'
                top='8px'
                onClick={onClose}
            />
        </ChakraAlert>
    );
};
