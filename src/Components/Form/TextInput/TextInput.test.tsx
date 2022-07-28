import React, { useState } from 'react';
import '@testing-library/jest-dom';
import { render, screen, waitFor  } from '@testing-library/react';
import userEvent from '@testing-library/user-event';
import { TextInput } from './TextInput';



const TEXT_TESTER_LABEL = 'Text area label';
const TEXT_TESTER_PLACEHOLDER = 'Text area placeholder';
const TEXT_TESTER_INPUT_VALUE = 'Input text for text area input';
const TEXT_TESTER_INVALID_TEXT = 'Invalid text';
const TEXT_TESTER_CAPTION_TEXT = 'Caption text area';
const TEXT_TESTER_CHARACTER_LIMIT = 1000;
const TEXT_TESTER_TEXT_ALIGN = 'right';
const TEXT_TESTER_LABLE_TEXT_MARGIN = '0';
const TEXT_TESTER_MARGIN = '0';
const TEXT_TESTER_PADDING = '0';
const TEXT_TESTER_WIDTH = '100%';
const TEXT_TESTER_MIN_WIDTH = '0';
const TEXT_TESTER_MAX_WIDTH = '100%';
const TEXT_TESTER_BACKGROUND_COLOR = 'transparent';
const TEXT_TESTER_AUTO_FOCUS = false;
const TEXT_TESTER_CAPTION_TEXT_MARGIN = '0';



const TextInputTester = (): JSX.Element => {
    const [value, setValue] = useState<string>('');
    const [isDisabled, setIsDisabled] = useState<boolean>(false);
    const [invalidText, setInvalidText] = useState<string>('');
    return (
        <>
            <TextInput
                label={TEXT_TESTER_LABEL}
                placeholder={TEXT_TESTER_PLACEHOLDER}
                onChange={setValue}
                value={value}
                invalidText={invalidText}
                captionText={TEXT_TESTER_CAPTION_TEXT}
                isDisabled={isDisabled}
                characterLimit={TEXT_TESTER_CHARACTER_LIMIT}
                textAlign={TEXT_TESTER_TEXT_ALIGN}
                labelTextMargin={TEXT_TESTER_LABLE_TEXT_MARGIN}
                margin={TEXT_TESTER_MARGIN}
                padding={TEXT_TESTER_PADDING}
                width={TEXT_TESTER_WIDTH}
                minWidth={TEXT_TESTER_MIN_WIDTH}
                maxWidth={TEXT_TESTER_MAX_WIDTH}
                backgroundColor={TEXT_TESTER_BACKGROUND_COLOR}
                autoFocus={TEXT_TESTER_AUTO_FOCUS}
                captionTextMargin={TEXT_TESTER_CAPTION_TEXT_MARGIN}

            />
            <button type='button' onClick={() => setIsDisabled(!isDisabled)}>
                Toggle disabled
            </button>
            <button
                type='button'
                onClick={() => setInvalidText(TEXT_TESTER_INVALID_TEXT)}
            >
                Invalidate
            </button>
        </>
    );
}
describe('TextInput component test', () => {
    it('should render correctly', () => {
        const tree = render(<TextInputTester/>);
        expect(tree).toMatchSnapshot();
    });

    it('should render TextInput with title, placeholder and caption', () => {
        render(<TextInputTester />);
        expect(screen.getByText(TEXT_TESTER_LABEL)).toBeVisible();
        expect(screen.getByRole('textbox')).toHaveAttribute(
            'placeholder',
            TEXT_TESTER_PLACEHOLDER
        );
        expect(screen.getByText(TEXT_TESTER_CAPTION_TEXT)).toBeVisible();
    });
    it('should change value on typing', async () => {
        render(<TextInputTester />);
        const textInput = screen.getByRole('textbox');
        userEvent.type(textInput, TEXT_TESTER_INPUT_VALUE);
        await waitFor(() =>
            expect(textInput).toHaveValue(TEXT_TESTER_INPUT_VALUE)
        );
    });
    it('should not change value on typing while disabled', async () => {
        render(<TextInputTester />);
        const textInput = screen.getByRole('textbox');
        const toggleDisableButton = screen.getByRole('button', {
            name: 'Toggle disabled',
        });
        userEvent.click(toggleDisableButton);
        await waitFor(() => expect(textInput).toBeDisabled());
        userEvent.type(textInput, TEXT_TESTER_INPUT_VALUE);
        await waitFor(() =>
            expect(textInput).not.toHaveValue(TEXT_TESTER_INPUT_VALUE)
        );
    });
    it('should show invalid text on invalidate', async () => {
        render(<TextInputTester />);
        const invalidateButton = screen.getByRole('button', {
            name: 'Invalidate',
        });
        userEvent.click(invalidateButton);
        await waitFor(() =>
            expect(screen.getByText(TEXT_TESTER_INVALID_TEXT)).toBeVisible()
        );
    });
});
