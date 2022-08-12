import React, { ReactElement, useState } from 'react';
import '@testing-library/jest-dom';
import { render, screen, waitFor } from '@testing-library/react';
import userEvent from '@testing-library/user-event';
import { DeleteModal } from '@egde/components';
import ReactDOM from 'react-dom';

const TITLE = 'title';
const DELETE_TEXT = 'text';
const DELETE_BUTTON_LABEL = 'DeleteButtonLabel';
const CANCEL_BUTTON_LABEL = 'CancelButtonLabel';

const DeleteModalTester = (props: { submitFunc: () => void }): ReactElement => {
    const { submitFunc } = props;
    const [isModalOpen, setIsModalOpen] = useState<boolean>(false);
    return (
        <div>
            <button type="button" onClick={() => setIsModalOpen(true)}>
                open
            </button>
            <DeleteModal
                isModalOpen={isModalOpen}
                setIsModalOpen={setIsModalOpen}
                onSubmit={submitFunc}
                title={TITLE}
                deleteText={DELETE_TEXT}
                deleteButtonLabel={DELETE_BUTTON_LABEL}
                cancelButtonLabel={CANCEL_BUTTON_LABEL}
            />
        </div>
    );
};

describe('DeleteModal component test', () => {
    const submitFunc = jest.fn();
    it('matches snapshot', () => {
        const tree = render(<DeleteModalTester submitFunc={submitFunc} />);
        expect(tree).toMatchSnapshot();
    });
    it('renders without chrashing', () => {
        const div = document.createElement('div');
        ReactDOM.render(<DeleteModalTester submitFunc={submitFunc} />, div);
    });
    it.skip('should only render button, open modal when button clicked, and then modal content is visible', async () => {
        render(<DeleteModalTester submitFunc={submitFunc} />);
        expect(screen.queryByText(DELETE_TEXT)).toBeNull();
        const openModalButton = screen.getByRole('button');
        userEvent.click(openModalButton);
        expect(await screen.findByText(TITLE)).toBeVisible();
        expect(await screen.findByText(DELETE_TEXT)).toBeVisible();
        expect(
            await screen.findByRole('button', { name: DELETE_BUTTON_LABEL }),
        ).toBeVisible();
        expect(
            await screen.findByRole('button', { name: CANCEL_BUTTON_LABEL }),
        ).toBeVisible();
    });
    it('should call passed function when DeleteButton is clicked', async () => {
        render(<DeleteModalTester submitFunc={submitFunc} />);
        const openModalButton = screen.getByRole('button');
        userEvent.click(openModalButton);
        const deleteButton = await screen.findByRole('button', {
            name: DELETE_BUTTON_LABEL,
        });
        if (deleteButton) {
            userEvent.click(deleteButton);
            await waitFor(() => expect(submitFunc).toHaveBeenCalledTimes(1));
        }
    });
    it('should close modal when CancelButton is clicked', async () => {
        render(<DeleteModalTester submitFunc={submitFunc} />);
        const openModalButton = screen.getByRole('button');
        userEvent.click(openModalButton);
        const cancelButton = await screen.findByRole('button', {
            name: CANCEL_BUTTON_LABEL,
        });
        if (cancelButton) {
            userEvent.click(cancelButton);
            await waitFor(() => expect(cancelButton).not.toBeVisible());
        }
    });
});
