import React, { ReactElement } from 'react';
import {
    Modal as ChakraModal,
    ModalOverlay,
    ModalContent,
    ModalHeader,
    ModalBody,
    ModalCloseButton,
    Box,
    Button,
    Flex,
    Heading,
    Icon,
    Text,
} from '@chakra-ui/react';
import { ModalProps, IconTestID, ModalIconType } from 'Types';
import { PriorityHighRounded, CheckRounded } from 'Icons';

/*
    EXAMPLE USE:
    function ModalExample(): ReactElement {
        const [modalOpen, setmodalOpen] = useState<boolean>(false);
        function submitFunction(): void {
            alert('You have pressed the primary button succesfully');
        }
        const primary = {
            label: 'Primary button',
            variant: ButtonType.Primary,
            onClick: submitFunction,
        };

        const secondary = {
            label: 'Secondary',
            variant: ButtonType.Secondary,
        };

        const buttons = {
            primary,
            secondary,
            alignment: 'left',
        };

        return (
            <div>
                <Button onClick={() => setmodalOpen(true)}>Open the modal!</Button>
                <Modal
                    buttons={buttons}
                    isModalOpen={modalOpen}
                    title='The modal may have a title'
                    onClose={() => setmodalOpen(false)}
                >
                    <div>This is the modal content (children)</div>
                </Modal>
            </div>
        );
    }
*/

const Modal = (props: ModalProps): ReactElement => {
    const {
        isModalOpen,
        isCentered,
        iconVariant,
        title,
        subtitle,
        children,
        buttons,
        onClose,
        hasCloseButton,
        errorMessage,
        width,
    } = props;
    const { primary, secondary, alignment } = buttons;
    const iconStyle = {
        color: 'blue',
        backgroundColor: 'lightblue',
        borderRadius: '100%',
        padding: '8px',
        marginRight: '8px',
        size: '36px',
        testID: IconTestID.Modal,
        ...(iconVariant === ModalIconType.Check && {
            icon: CheckRounded,
        }),
        ...(iconVariant === ModalIconType.Exclamation && {
            icon: PriorityHighRounded,
        }),
    };

    return (
        <ChakraModal
            isOpen={isModalOpen}
            onClose={onClose}
            isCentered={isCentered}
        >
            <ModalOverlay />
            <ModalContent maxW={width}>
                <ModalHeader>
                    <Flex width="100%" direction="row" >
                        {iconVariant && (
                            <Icon
                                as={iconStyle.icon}
                                color={iconStyle.color}
                                backgroundColor={iconStyle.backgroundColor}
                                borderRadius={iconStyle.borderRadius}
                                padding={iconStyle.padding}
                                marginRight={iconStyle.marginRight}
                                style={{ fontSize: iconStyle.size }}
                                data-testid={iconStyle.testID}
                            />
                        )}

                        <Flex direction="column">
                            <Heading size="md" marginBottom="8px">
                                {title}
                            </Heading>
                            <Heading size="sm" fontWeight="normal">
                                {subtitle}
                            </Heading>
                        </Flex>
                    </Flex>
                </ModalHeader>
                {hasCloseButton && <ModalCloseButton />}
                <ModalBody>{children}</ModalBody>
                <Box padding="0 24px 24px 24px">
                    {alignment === 'right' && (
                        <Flex justify="end">
                            <Button
                                variant={secondary.variant}
                                onClick={onClose}
                            >
                                {secondary.label}
                            </Button>
                            <Button
                                marginEnd="0px"
                                variant={primary.variant}
                                onClick={primary.onClick}
                            >
                                {primary.label}
                            </Button>
                        </Flex>
                    )}
                    {alignment === 'left' && (
                        <Flex justify="start">
                            <Button
                                variant={primary.variant}
                                onClick={primary.onClick}
                            >
                                {primary.label}
                            </Button>
                            <Button
                                variant={secondary.variant}
                                onClick={onClose}
                            >
                                {secondary.label}
                            </Button>
                        </Flex>
                    )}
                    {errorMessage && (
                        <Text
                            color="red"
                            textAlign={
                                // eslint-disable-next-line no-nested-ternary
                                alignment === 'right'
                                    ? 'end'
                                    : alignment === 'left'
                                        ? 'start'
                                        : 'center'
                            }
                        >
                            {errorMessage}
                        </Text>
                    )}
                </Box>
            </ModalContent>
        </ChakraModal>
    );
};

export { Modal };
