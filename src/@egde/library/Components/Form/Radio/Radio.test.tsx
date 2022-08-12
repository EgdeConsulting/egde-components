import React, { useState, ReactElement } from 'react';
import '@testing-library/jest-dom';
import { render, screen, waitFor } from '@testing-library/react';
import userEvent from '@testing-library/user-event';
import { Radio } from '@egde/components';
import ReactDOM from 'react-dom';

const RADIO_TESTER_LABEL = 'Radio label';
const RADIO_TESTER_INVALID_TEXT = 'Invalid text';
const RADIO_TESTER_CAPTION_TEXT = 'Caption text';
const RADIO_TESTER_OPTIONS = ['First Radio Option', 'Last Radio Option'];
const RADIO_TESTER_BACKGROUND_COLOR = '#fff';
const RADIO_TESTER_DIRECTION = 'column';
const RADIO_TESTER_AUTO_FOCUS = false;
const RADIO_TESTER_LABEL_TEXT_MARGIN = '0px';
const RADIO_TESTER_CAPTION_TEXT_MARGIN = '0px';
const RADIO_TESTER_MARGIN = '0px';
const RADIO_TESTER_PADDING = '0px';
const RADIO_TESTER_WIDTH = '100%';
const RADIO_TESTER_MIN_WIDTH = '0';
const RADIO_TESTER_MAX_WIDTH = '100%';

const RadioTester = (): ReactElement => {
    const [value, setValue] = useState<number>(-1);
    const [isDisabled, setIsDisabled] = useState<boolean>(false);
    const [invalidText, setInvalidText] = useState<string>('');

    return (
        <>
            <Radio
                label={RADIO_TESTER_LABEL}
                options={RADIO_TESTER_OPTIONS}
                value={value}
                onChange={setValue}
                invalidText={invalidText}
                captionText={RADIO_TESTER_CAPTION_TEXT}
                isDisabled={isDisabled}
                direction={RADIO_TESTER_DIRECTION}
                backgroundColor={RADIO_TESTER_BACKGROUND_COLOR}
                autoFocus={RADIO_TESTER_AUTO_FOCUS}
                labelTextMargin={RADIO_TESTER_LABEL_TEXT_MARGIN}
                captionTextMargin={RADIO_TESTER_CAPTION_TEXT_MARGIN}
                margin={RADIO_TESTER_MARGIN}
                padding={RADIO_TESTER_PADDING}
                width={RADIO_TESTER_WIDTH}
                minWidth={RADIO_TESTER_MIN_WIDTH}
                maxWidth={RADIO_TESTER_MAX_WIDTH}
            />
            <button type="button" onClick={() => setIsDisabled(!isDisabled)}>
                Toggle disabled
            </button>
            <button
                type="button"
                onClick={() => setInvalidText(RADIO_TESTER_INVALID_TEXT)}
            >
                Invalidate
            </button>
        </>
    );
};
describe('Radio component test', () => {
    it('matches snapshot', () => {
        const tree = render(<RadioTester />);
        expect(tree).toMatchSnapshot();
    });
    it('renders without chrashing', () => {
        const div = document.createElement('div');
        ReactDOM.render(<RadioTester />, div);
    });
    it('should render title, caption, and all radio buttons should be unchecked initially', () => {
        render(<RadioTester />);
        expect(screen.getByText(RADIO_TESTER_LABEL)).toBeVisible();
        expect(screen.getByText(RADIO_TESTER_CAPTION_TEXT)).toBeVisible();
        const firstRadioOption = screen.getByRole('radio', {
            name: 'First Radio Option',
        });
        const lastRadioOption = screen.getByRole('radio', {
            name: 'Last Radio Option',
        });
        expect(firstRadioOption).toBeVisible();
        expect(lastRadioOption).toBeVisible();
        expect(firstRadioOption).not.toBeChecked();
        expect(lastRadioOption).not.toBeChecked();
    });
    it('clicking option should check this option and clicking it again should NOT uncheck it', async () => {
        render(<RadioTester />);
        const firstRadioOption = screen.getByRole('radio', {
            name: 'First Radio Option',
        });
        const lastRadioOption = screen.getByRole('radio', {
            name: 'Last Radio Option',
        });
        userEvent.click(firstRadioOption);
        await waitFor(() => {
            expect(firstRadioOption).toBeChecked();
            expect(lastRadioOption).not.toBeChecked();
        });
        userEvent.click(firstRadioOption);
        await waitFor(() => expect(firstRadioOption).toBeChecked());
    });
    it('clicking option should uncheck other previously checked option', async () => {
        render(<RadioTester />);
        const firstRadioOption = screen.getByRole('radio', {
            name: 'First Radio Option',
        });
        const lastRadioOption = screen.getByRole('radio', {
            name: 'Last Radio Option',
        });
        userEvent.click(lastRadioOption);
        await waitFor(() => expect(lastRadioOption).toBeChecked());
        userEvent.click(firstRadioOption);
        await waitFor(() => {
            expect(lastRadioOption).not.toBeChecked();
            expect(firstRadioOption).toBeChecked();
        });
    });
    it('should not change value on clicking while disabled', async () => {
        render(<RadioTester />);
        const firstRadioOption = screen.getByRole('radio', {
            name: 'First Radio Option',
        });
        const lastRadioOption = screen.getByRole('radio', {
            name: 'Last Radio Option',
        });
        const toggleDisableButton = screen.getByRole('button', {
            name: 'Toggle disabled',
        });
        userEvent.click(toggleDisableButton);
        await waitFor(() => {
            expect(firstRadioOption).toBeDisabled();
            expect(lastRadioOption).toBeDisabled();
        });
        userEvent.click(firstRadioOption);
        await waitFor(() => {
            expect(firstRadioOption).not.toBeChecked();
        });
    });
    it('should show invalid text on invalidate', async () => {
        render(<RadioTester />);
        const invalidateButton = screen.getByRole('button', {
            name: 'Invalidate',
        });
        userEvent.click(invalidateButton);
        expect(
            await screen.findByText(RADIO_TESTER_INVALID_TEXT),
        ).toBeVisible();
    });
});
