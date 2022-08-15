import React, { useState } from 'react';
import '@testing-library/jest-dom';
import { render, screen, waitFor } from '@testing-library/react';
import userEvent from '@testing-library/user-event';
import { TextAreaInput } from 'egde-components';
import ReactDOM from 'react-dom';

const TEXT_AREA_TESTER_LABEL = 'Text area label';
const TEXT_AREA_TESTER_PLACEHOLDER = 'Text area placeholder';
const TEXT_AREA_TESTER_INPUT_VALUE = 'Input text for text area input';
const TEXT_AREA_TESTER_INVALID_TEXT = 'Invalid text';
const TEXT_AREA_TESTER_CAPTION_TEXT = 'Caption text area';
const TEXT_AREA_TESTER_CHARACTER_LIMIT = 1000;
const TEXT_AREA_TESTER_TEXT_ALIGN = 'right';
const TEXT_AREA_TESTER_LABLE_TEXT_MARGIN = '0';
const TEXT_AREA_TESTER_MARGIN = '0';
const TEXT_AREA_TESTER_PADDING = '0';
const TEXT_AREA_TESTER_WIDTH = '100%';
const TEXT_AREA_TESTER_MIN_WIDTH = '0';
const TEXT_AREA_TESTER_MAX_WIDTH = '100%';
const TEXT_AREA_TESTER_BACKGROUND_COLOR = 'transparent';
const TEXT_AREA_TESTER_AUTO_FOCUS = false;
const TEXT_AREA_TESTER_CAPTION_TEXT_MARGIN = '0';

const TextAreaInputTester = (): JSX.Element => {
    const [value, setValue] = useState<string>('');
    const [isDisabled, setIsDisabled] = useState<boolean>(false);
    const [invalidText, setInvalidText] = useState<string>('');
    return (
        <>
            <TextAreaInput
                label={TEXT_AREA_TESTER_LABEL}
                placeholder={TEXT_AREA_TESTER_PLACEHOLDER}
                onChange={setValue}
                value={value}
                invalidText={invalidText}
                captionText={TEXT_AREA_TESTER_CAPTION_TEXT}
                isDisabled={isDisabled}
                backgroundColor={TEXT_AREA_TESTER_BACKGROUND_COLOR}
                autoFocus={TEXT_AREA_TESTER_AUTO_FOCUS}
                labelTextMargin={TEXT_AREA_TESTER_LABLE_TEXT_MARGIN}
                margin={TEXT_AREA_TESTER_MARGIN}
                padding={TEXT_AREA_TESTER_PADDING}
                width={TEXT_AREA_TESTER_WIDTH}
                minWidth={TEXT_AREA_TESTER_MIN_WIDTH}
                maxWidth={TEXT_AREA_TESTER_MAX_WIDTH}
                characterLimit={TEXT_AREA_TESTER_CHARACTER_LIMIT}
                textAlign={TEXT_AREA_TESTER_TEXT_ALIGN}
                captionTextMargin={TEXT_AREA_TESTER_CAPTION_TEXT_MARGIN}
            />
            <button type="button" onClick={() => setIsDisabled(!isDisabled)}>
                Toggle disabled
            </button>
            <button
                type="button"
                onClick={() => setInvalidText(TEXT_AREA_TESTER_INVALID_TEXT)}
            >
                Invalidate
            </button>
        </>
    );
};
describe('TextAreaInput component test', () => {
    it('matches snapshot', () => {
        const tree = render(<TextAreaInputTester />);
        expect(tree).toMatchSnapshot();
    });
    it('renders without chrashing', () => {
        const div = document.createElement('div');
        ReactDOM.render(<TextAreaInputTester />, div);
    });
    it('should render TextAreaInput with title, placeholder and caption', () => {
        render(<TextAreaInputTester />);
        expect(screen.getByText(TEXT_AREA_TESTER_LABEL)).toBeVisible();
        expect(screen.getByRole('textbox')).toHaveAttribute(
            'placeholder',
            TEXT_AREA_TESTER_PLACEHOLDER,
        );
        expect(screen.getByText(TEXT_AREA_TESTER_CAPTION_TEXT)).toBeVisible();
    });
    it('should change value on typing', async () => {
        render(<TextAreaInputTester />);
        const textAreaInput = screen.getByRole('textbox');
        userEvent.type(textAreaInput, TEXT_AREA_TESTER_INPUT_VALUE);
        await waitFor(() =>
            expect(textAreaInput).toHaveValue(TEXT_AREA_TESTER_INPUT_VALUE),
        );
    });
    it('should not change value on typing while disabled', async () => {
        render(<TextAreaInputTester />);
        const textAreaInput = screen.getByRole('textbox');
        const toggleDisableButton = screen.getByRole('button', {
            name: 'Toggle disabled',
        });
        userEvent.click(toggleDisableButton);
        await waitFor(() => expect(textAreaInput).toBeDisabled());
        userEvent.type(textAreaInput, TEXT_AREA_TESTER_INPUT_VALUE);
        await waitFor(() =>
            expect(textAreaInput).not.toHaveValue(TEXT_AREA_TESTER_INPUT_VALUE),
        );
    });
    it('should show invalid text on invalidate', async () => {
        render(<TextAreaInputTester />);
        const invalidateButton = screen.getByRole('button', {
            name: 'Invalidate',
        });
        userEvent.click(invalidateButton);
        await waitFor(() =>
            expect(
                screen.getByText(TEXT_AREA_TESTER_INVALID_TEXT),
            ).toBeVisible(),
        );
    });
});
