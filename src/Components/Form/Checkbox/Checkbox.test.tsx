import React, { useState, ReactElement } from 'react';
import '@testing-library/jest-dom';
import { render, screen, waitFor } from '@testing-library/react';
import userEvent from '@testing-library/user-event';
import { Checkbox } from './Checkbox';
import ReactDOM from 'react-dom';

const CHECKBOX_TESTER_LABEL = 'Checkbox Tester';
const CHECKBOX_TESTER_INVALID_TEXT = 'Invalid text';
const CHECKBOX_TESTER_CAPTION_TEXT = 'Caption text';
const CHECKBOX_TESTER_OPTIONS = ['Checkbox Option One', 'Checkbox Option Two'];
const CHECKBOX_TESTER_DIRECTION = 'column';
const CHECKBOX_TESTER_BACKGROUND_COLOR = '#ffffff';
const CHECKBOX_TESTER_AUTO_FOCUS = false;
const CHECKBOX_TESTER_LABEL_TEXT_MARGIN = '0px';
const CHECKBOX_TESTER_CAPTION_TEXT_MARGIN = '0px';
const CHECKBOX_TESTER_MARGIN = '0px';
const CHECKBOX_TESTER_PADDING = '0px';
const CHECKBOX_TESTER_WIDTH = '100%';
const CHECKBOX_TESTER_MIN_WIDTH = '0px';
const CHECKBOX_TESTER_MAX_WIDTH = '100%';


const CheckboxTester = (): ReactElement => {
    const [value, setValue] = useState<number[]>([]);
    const [isDisabled, setIsDisabled] = useState<boolean>(false);
    const [invalidText, setInvalidText] = useState<string>('');

    return (
        <>
            <Checkbox
                label={CHECKBOX_TESTER_LABEL}
                options={CHECKBOX_TESTER_OPTIONS}
                value={value}
                onChange={setValue}
                invalidText={invalidText}
                captionText={CHECKBOX_TESTER_CAPTION_TEXT}
                isDisabled={isDisabled}
                direction={CHECKBOX_TESTER_DIRECTION}
                backgroundColor={CHECKBOX_TESTER_BACKGROUND_COLOR}
                autoFocus={CHECKBOX_TESTER_AUTO_FOCUS}
                labelTextMargin={CHECKBOX_TESTER_LABEL_TEXT_MARGIN}
                captionTextMargin={CHECKBOX_TESTER_CAPTION_TEXT_MARGIN}
                margin={CHECKBOX_TESTER_MARGIN}
                padding={CHECKBOX_TESTER_PADDING}
                width={CHECKBOX_TESTER_WIDTH}
                minWidth={CHECKBOX_TESTER_MIN_WIDTH}
                maxWidth={CHECKBOX_TESTER_MAX_WIDTH}
            />
            <button type='button' onClick={() => setIsDisabled(!isDisabled)}>
                Toggle disabled
            </button>
            <button
                type='button'
                onClick={() => setInvalidText(CHECKBOX_TESTER_INVALID_TEXT)}
            >
                Invalidate
            </button>
        </>
    );
}
describe('Checkbox component test', () => {
    it('matches snapshot', () => {
        const tree = render(<CheckboxTester/>);
        expect(tree).toMatchSnapshot();
  });
  it('renders without chrashing', () => {
    const div = document.createElement('div');
    ReactDOM.render(<CheckboxTester/>, div);
})

    it('should render title, caption, and exactly two checkbox options, and all should be unchecked initially', () => {
        render(<CheckboxTester />);
        expect(screen.getByText(CHECKBOX_TESTER_LABEL)).toBeVisible();
        expect(screen.getByText(CHECKBOX_TESTER_CAPTION_TEXT)).toBeVisible();
        const allOptions = screen.getAllByRole('checkbox');
        const firstCheckOption = screen.getByRole('checkbox', {
            name: 'Checkbox Option One',
        });
        const lastCheckOption = screen.getByRole('checkbox', {
            name: 'Checkbox Option Two',
        });
        expect(allOptions).toHaveLength(CHECKBOX_TESTER_OPTIONS.length);
        expect(firstCheckOption).toBeVisible();
        expect(lastCheckOption).toBeVisible();
        expect(firstCheckOption).not.toBeChecked();
        expect(lastCheckOption).not.toBeChecked();
    });
    it('clicking all options should check all option and clicking one again should uncheck it', async () => {
        render(<CheckboxTester />);
        const firstCheckOption = screen.getByRole('checkbox', {
            name: 'Checkbox Option One',
        });
        const lastCheckOption = screen.getByRole('checkbox', {
            name: 'Checkbox Option Two',
        });
        userEvent.click(firstCheckOption);
        userEvent.click(lastCheckOption);
        await waitFor(() => {
            expect(firstCheckOption).toBeChecked();
            expect(lastCheckOption).toBeChecked();
        });
        userEvent.click(firstCheckOption);
        await waitFor(() => expect(firstCheckOption).not.toBeChecked());
    });
    it('should not change value on clicking while disabled', async () => {
        render(<CheckboxTester />);
        const firstCheckOption = screen.getByRole('checkbox', {
            name: 'Checkbox Option One',
        });
        const lastCheckOption = screen.getByRole('checkbox', {
            name: 'Checkbox Option Two',
        });
        const toggleDisableButton = screen.getByRole('button', {
            name: 'Toggle disabled',
        });
        userEvent.click(toggleDisableButton);
        await waitFor(() => {
            expect(firstCheckOption).toBeDisabled();
            expect(lastCheckOption).toBeDisabled();
        });
        userEvent.click(firstCheckOption);
        await waitFor(() => {
            expect(firstCheckOption).not.toBeChecked();
        });
    });
    it('should show invalid text on invalidate', async () => {
        render(<CheckboxTester />);
        const invalidateButton = screen.getByRole('button', {
            name: 'Invalidate',
        });
        userEvent.click(invalidateButton);
        expect(
            await screen.findByText(CHECKBOX_TESTER_INVALID_TEXT)
        ).toBeVisible();
    });
});
