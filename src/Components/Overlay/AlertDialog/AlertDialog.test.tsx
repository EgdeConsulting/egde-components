import React, { MutableRefObject } from 'react';
import '@testing-library/jest-dom';
import { render, screen, waitFor } from '@testing-library/react';
import userEvent from '@testing-library/user-event';
import { ReactElement, useRef, useState } from 'react';
import { AlertDialogButton, AlertDialogIconType, IconTestID } from 'Types';
import { AlertDialog } from './AlertDialog';
import ReactDOM from 'react-dom';

const ALERT_DIALOG_TESTER_ICON_ID = IconTestID.AlertDialog;
const ALERT_DIALOG_TESTER_HEADING = 'This is the heading';
const ALERT_DIALOG_TESTER_TEXT = 'This is the text';
const ALERT_DIALOG_TESTER_BUTTON_TEXT = 'Confirm button';

const AlertDialogTester = (): ReactElement =>{
    const [isOpen, setIsOpen] = useState<boolean>(false);
    const cancelRef = useRef();
    const warningAlertButtons: AlertDialogButton[] = [
        {
            label: ALERT_DIALOG_TESTER_BUTTON_TEXT,
            variant: 'primary',
            onClick: () => setIsOpen(false),
        },
    ];

    return (
        <>
            <button type="button" onClick={() => setIsOpen(true)}>
                Open
            </button>
            <AlertDialog
                iconVariant={AlertDialogIconType.Warning}
                heading={ALERT_DIALOG_TESTER_HEADING}
                text={ALERT_DIALOG_TESTER_TEXT}
                isOpen={isOpen}
                cancelRef={cancelRef}
                onClose={() => setIsOpen(false)}
                buttons={warningAlertButtons}
            />
        </>
    );
}
describe('Alert component test', () => {
    it('matches snapshot', () => {
        const tree = render(<AlertDialogTester />);
        expect(tree).toMatchSnapshot();
    });
    it('renders without chrashing', () => {
        const div = document.createElement('div');
        ReactDOM.render(<AlertDialogTester/>, div);
    })
    it.skip('assert content is null, alert dialog opens when button clicked, and alert dialog content is visible', async () => {
        render(<AlertDialogTester />);
        expect(screen.queryByText(ALERT_DIALOG_TESTER_TEXT)).toBeNull();
        expect(screen.queryByText(ALERT_DIALOG_TESTER_BUTTON_TEXT)).toBeNull();
        const openAlertDialogButton = screen.getByRole('button');
        userEvent.click(openAlertDialogButton);
        const icon = await screen.findByTestId(ALERT_DIALOG_TESTER_ICON_ID);
        await waitFor(() => expect(icon).toBeVisible());
        expect(
            await screen.findByText(ALERT_DIALOG_TESTER_HEADING),
        ).toBeVisible();
        expect(await screen.findByText(ALERT_DIALOG_TESTER_TEXT)).toBeVisible();
        expect(
            await screen.findByRole('button', {
                name: ALERT_DIALOG_TESTER_BUTTON_TEXT,
            }),
        ).toBeVisible();
    });

    it('assert button in alert dialog exists, and clicking it closes the alert dialog', async () => {
        render(<AlertDialogTester />);
        const openAlertDialogButton = screen.getByRole('button');
        userEvent.click(openAlertDialogButton);
        const heading = await screen.findByText(ALERT_DIALOG_TESTER_HEADING);
        const button = await screen.findByRole('button', {
            name: ALERT_DIALOG_TESTER_BUTTON_TEXT,
        });
        if (heading && button) {
            userEvent.click(button);
            await waitFor(() => expect(heading).not.toBeVisible());
        }
    });
});
