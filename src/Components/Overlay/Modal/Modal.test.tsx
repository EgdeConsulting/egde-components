import React,{ ReactElement, useState } from 'react';
import '@testing-library/jest-dom';
import { render, screen, waitFor } from '@testing-library/react';
import userEvent from '@testing-library/user-event';
import { IconTestID, ModalButtons, ModalIconType } from 'SharedTypes';
import { Modal } from './Modal';
import { createRoot } from "react-dom/client";

const MODAL_TESTER_ICON_VARIANT = ModalIconType.Check;
const MODAL_TESTER_TITLE = 'ModalTitle';
const MODAL_TESTER_INTRO_TEXT = 'Modalsubtitle';
const MODAL_TESTER_CONTENT_TEXT = 'ModalContentText';
const MODAL_TESTER_PRIMARY_BUTTON_LABEL = 'primary button';
const MODAL_TESTER_PRIMARY_BUTTON_VARIANT = 'primary';
const MODAL_TESTER_SECONDARY_BUTTON_LABEL = 'secondary button';
const MODAL_TESTER_SECONDARY_BUTTON_VARIANT = 'secondary';




const  ModalTester = (props: { submitFunc: () => void }): ReactElement =>{
    const [modalOpen, setmodalOpen] = useState<boolean>(false);
    const { submitFunc } = props;

    const primary = {
        label: MODAL_TESTER_PRIMARY_BUTTON_LABEL,
        variant: MODAL_TESTER_PRIMARY_BUTTON_VARIANT,
        onClick: submitFunc,
    };

    const secondary = {
        label: MODAL_TESTER_SECONDARY_BUTTON_LABEL,
        variant: MODAL_TESTER_SECONDARY_BUTTON_VARIANT,
    };


    const buttons = {
        primary,
        secondary,
        alignment: "left",
    };

    return (
        <div>
            <button type='button' onClick={() => setmodalOpen(true)}>
                Open
            </button>
            <Modal
                isModalOpen={modalOpen}
                iconVariant={MODAL_TESTER_ICON_VARIANT}
                title={MODAL_TESTER_TITLE}
                subtitle={MODAL_TESTER_INTRO_TEXT}
                buttons={buttons as ModalButtons}
                onClose={() => setmodalOpen(false)}
                isCentered={true}
                hasCloseButton={true}
                errorMessage={''}
                width={'sm'}

            >
                <div>{MODAL_TESTER_CONTENT_TEXT}</div>
            </Modal>
        </div>
    );
}

describe('Modal component test', () => {
    const submitFunc = jest.fn();

    it('matches snapshot', () => {
      const tree = render(<ModalTester submitFunc={submitFunc}/>);
      expect(tree).toMatchSnapshot();
    });
    it('renders without chrashing', () => {
        const div = document.createElement('div');
const root = createRoot(div);

root.render(<ModalTester submitFunc={submitFunc}/>);
    })
    it.skip('assert content is null, modal opens when button clicked, and modal content is visible', async () => {
        render(<ModalTester submitFunc={submitFunc} />);
        expect(screen.queryByText(MODAL_TESTER_CONTENT_TEXT)).toBeNull();
        const openModalButton = screen.getByRole('button');
        userEvent.click(openModalButton);
        expect(await screen.findByTestId(IconTestID.Modal)).toBeVisible();
        expect(await screen.findByText(MODAL_TESTER_TITLE)).toBeVisible();
        expect(await screen.findByText(MODAL_TESTER_INTRO_TEXT)).toBeVisible();
        expect(
            await screen.findByText(MODAL_TESTER_CONTENT_TEXT)
        ).toBeVisible();
        expect(
            await screen.findByRole('button', { name: 'Close' })
        ).toBeVisible();
    });

    it.skip('assert primary & secondary buttons exist, clicking primary button calls passed function', async () => {
        render(<ModalTester submitFunc={submitFunc} />);
        const openModalButton = screen.getByRole('button');
        userEvent.click(openModalButton);
        const primaryBtn = await screen.findByRole('button', {
            name: MODAL_TESTER_PRIMARY_BUTTON_LABEL,
        });
        expect(
            await screen.findByRole('button', {
                name: MODAL_TESTER_SECONDARY_BUTTON_LABEL,
            })
        ).toBeVisible();
        if (primaryBtn) {
            userEvent.click(primaryBtn);
            await waitFor(() => expect(submitFunc).toHaveBeenCalledTimes(1));
        }
    });
    it('clicking secondary button closes the modal', async () => {
        render(<ModalTester submitFunc={submitFunc} />);
        const openModalButton = screen.getByRole('button');
        userEvent.click(openModalButton);
        const secondaryBtn = await screen.findByRole('button', {
            name: MODAL_TESTER_SECONDARY_BUTTON_LABEL,
        });
        if (secondaryBtn) {
            userEvent.click(secondaryBtn);
            await waitFor(() => expect(secondaryBtn).not.toBeVisible());
        }
    });

    it('clicking close button closes the modal', async () => {
        render(<ModalTester submitFunc={submitFunc} />);
        const openModalButton = screen.getByRole('button');
        userEvent.click(openModalButton);
        const closeButton = await screen.findByRole('button', {
            name: 'Close',
        });
        if (closeButton) {
            userEvent.click(closeButton);
            await waitFor(() => expect(closeButton).not.toBeVisible());
        }
    });
});
