import { Text } from '@chakra-ui/react';
import { Modal } from 'Components';
import { ModalButtons } from 'Types';
import React from 'react';

const DeleteModal = (props: {
    isModalOpen: boolean;
    isCentered?: boolean;
    // eslint-disable-next-line no-unused-vars
    setIsModalOpen: (isOpen: boolean) => void;
    onSubmit: () => void;
    deleteText?: string;
    title?: string;
    deleteButtonLabel?: string;
    cancelButtonLabel?: string;
}): JSX.Element => {
    const {
        isModalOpen,
        isCentered,
        setIsModalOpen,
        onSubmit,
        deleteButtonLabel,
        deleteText,
        title,
        cancelButtonLabel,
    } = props;

    const deleteGrantModalButtons: ModalButtons = {
        primary: {
            label: deleteButtonLabel || 'Slett',
            variant: 'delete',
            onClick: onSubmit,
        },
        secondary: {
            label: cancelButtonLabel || 'Avbryt',
            variant: 'secondary',
            onClick: () => setIsModalOpen(false),
        },
        alignment: 'right',
    };

    return (
        <Modal
            isModalOpen={isModalOpen}
            isCentered={!!isCentered}
            title={title || 'Slett'}
            buttons={deleteGrantModalButtons}
            onClose={() => setIsModalOpen(false)}
        >
            <Text>
                {deleteText
                || 'Er du sikker på at du vil slette? Du kan ikke angre denne handlingen'}
            </Text>
        </Modal>
    );
};

export { DeleteModal };
