import React, { ReactElement } from 'react';
import { AlertProps, IconTestID } from 'SharedTypes';
import {
    Alert as ChakraAlert,
    AlertIcon,
    AlertDescription,
    CloseButton,
    Spacer,
    Stack,
    Link,
    Text,
} from '@chakra-ui/react';
import { Link as ReactRouterLink } from 'react-router-dom';

export const Alert = (props: AlertProps): ReactElement => {
    const {
        status,
        description,
        onClose,
        linkText,
        linkHref,
        hasNoCloseButton,
        route,
    } = props;
    // styling should ideally be abstracted to ./Styles,
    // but didn't manage that with useMultiStyleConfig
    const styleComposition = {
        textColor: 'darkgrey',
        borderRadius: '0.375rem',
        width: '25.0rem',
        ...(status === 'warning' && {
            backgroundColor: 'yellow',
            iconColor: 'amber',
            iconTestID: IconTestID.AlertWarning,
        }),
        ...(status === 'info' && {
            backgroundColor: 'lightblue',
            iconColor: 'blue',
            iconTestID: IconTestID.AlertInfo,
        }),
        ...(status === 'error' && {
            backgroundColor: 'lightred',
            iconColor: 'red',
            iconTestID: IconTestID.AlertError,
        }),
        ...(status === 'success' && {
            backgroundColor: 'lightgreen',
            iconColor: 'green',
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
                data-testid={styleComposition.iconTestID}
                position='absolute'
                left='0.75rem'
                top='0.75rem'
            />
            <Stack px='1.75rem'>
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
                {route && linkText && (
                    <ReactRouterLink to={{ pathname: route }}>
                        <Text variant='link'>{linkText}</Text>
                    </ReactRouterLink>
                )}
            </Stack>
            <Spacer />
            {!hasNoCloseButton && (
                <CloseButton
                    position='absolute'
                    right='0.5rem'
                    top='0.5rem'
                    onClick={onClose}
                />
            )}
        </ChakraAlert>
    );
};
