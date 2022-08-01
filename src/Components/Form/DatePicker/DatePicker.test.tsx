import userEvent from '@testing-library/user-event';
import '@testing-library/jest-dom';
import { render, screen, waitFor } from '@testing-library/react';
import React, { useState } from 'react';
import { DatePicker } from 'Components';

const DATEPICKER_PLACEHOLDER = 'DatePicker placeholder';

function DatePickerTester(): JSX.Element {
    const [value, setValue] = useState<Date | undefined>(undefined);

    return (
        <>
            <DatePicker
                value={value}
                onChange={setValue}
                placeholder={DATEPICKER_PLACEHOLDER}
            />
        </>
    );
}

describe('DatePicker component test', () => {
    it('should render correctly', () => {
        const tree = render(<DatePickerTester/>);
        expect(tree).toMatchSnapshot();
    });
    it('Check that the placeholder is visible!', () => {
        render(<DatePickerTester />);
        const datepickerContainer = screen.getByPlaceholderText(
            DATEPICKER_PLACEHOLDER
        );
        expect(datepickerContainer).toBeVisible();
    });
    it('Check that clicking datepicker input shows current month', async () => {
        render(<DatePickerTester />);
        const today = new Date();
        const monthNameNo = today.toLocaleString('no', { month: 'long' });
        const year = today.getFullYear();
        const monthNameAndYear = `${monthNameNo} ${year}`;
        const datepickerContainer = screen.getByPlaceholderText(
            DATEPICKER_PLACEHOLDER
        );
        userEvent.click(datepickerContainer);
        await waitFor(() => {
            const calendarHeader = screen.getByText(monthNameAndYear);
            expect(calendarHeader).toBeVisible();
        });
    });
});
