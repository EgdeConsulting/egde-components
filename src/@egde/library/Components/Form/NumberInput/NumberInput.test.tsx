import React, { useState } from 'react';
import '@testing-library/jest-dom';
import { render, screen, waitFor } from '@testing-library/react';
import userEvent from '@testing-library/user-event';
import { NumberInput } from '@egde/components';
import ReactDOM from 'react-dom';

const NUMBER_TESTER_LABEL = 'Number label';
const NUMBER_TESTER_PLACEHOLDER = 'Number placeholder';
const NUMBER_TESTER_VALID_INPUT = '1234567890';
const NUMBER_TESTER_INVALID_INPUT =
    '§!"#$%&/()=?+`´^¨*@;,‚:.…-_–<>≤≥„·—¿≠}¶‰¢¥®¡qwertyuiopåasdfghjkløæzxcvbnm';
const NUMBER_TESTER_INVALID_TEXT = 'Invalid text';
const NUMBER_TESTER_CAPTION_TEXT = 'Caption text';
const NUMBER_TESTER_CAPTION_TEXT_MARGIN = '0';
const NUMBER_TESTER_LABEL_TEXT_MARGIN = '0';
const NUMBER_TESTER_MARGIN = '0';
const NUMBER_TESTER_PADDING = '0';
const NUMBER_TESTER_WIDTH = '100%';
const NUMBER_TESTER_MIN_WIDTH = '0';
const NUMBER_TESTER_MAX_WIDTH = '100%';
const NUMBER_TESTER_MAX_ValueLength = 15;
const NUMBER_TESTER_BACKGROUND_COLOR = '#ffffff';
const NUMBER_TESTER_AUTO_FOCUS = false;
const NUMBER_TESTER_ALLOW_NEGATIVE = false;
const NUMBER_TESTER_TEXT_ALIGN = 'right';

const NumberInputTester = (props: {
    isCurrency?: boolean;
    currencySpacer?: string;
}): JSX.Element => {
    const { isCurrency, currencySpacer } = props;
    const [value, setValue] = useState<string>('');
    const [isDisabled, setIsDisabled] = useState<boolean>(false);
    const [invalidText, setInvalidText] = useState<string>('');
    return (
        <>
            <NumberInput
                label={NUMBER_TESTER_LABEL}
                placeholder={NUMBER_TESTER_PLACEHOLDER}
                onChange={setValue}
                value={value}
                invalidText={invalidText}
                captionText={NUMBER_TESTER_CAPTION_TEXT}
                isDisabled={isDisabled}
                isCurrency={isCurrency}
                currencySpacer={currencySpacer}
                captionTextMargin={NUMBER_TESTER_CAPTION_TEXT_MARGIN}
                labelTextMargin={NUMBER_TESTER_LABEL_TEXT_MARGIN}
                margin={NUMBER_TESTER_MARGIN}
                padding={NUMBER_TESTER_PADDING}
                width={NUMBER_TESTER_WIDTH}
                minWidth={NUMBER_TESTER_MIN_WIDTH}
                maxWidth={NUMBER_TESTER_MAX_WIDTH}
                maxValueLength={NUMBER_TESTER_MAX_ValueLength}
                backgroundColor={NUMBER_TESTER_BACKGROUND_COLOR}
                autoFocus={NUMBER_TESTER_AUTO_FOCUS}
                allowNegative={NUMBER_TESTER_ALLOW_NEGATIVE}
                textAlign={NUMBER_TESTER_TEXT_ALIGN}
            />
            <button type="button" onClick={() => setIsDisabled(!isDisabled)}>
                Toggle disabled
            </button>
            <button
                type="button"
                onClick={() => setInvalidText(NUMBER_TESTER_INVALID_TEXT)}
            >
                Invalidate
            </button>
        </>
    );
};
describe('NumberInput component test', () => {
    it('matches snapshot', () => {
        const tree = render(
            <NumberInputTester isCurrency currencySpacer=" " />,
        );
        expect(tree).toMatchSnapshot();
    });
    it('renders without chrashing', () => {
        const div = document.createElement('div');
        ReactDOM.render(<NumberInputTester />, div);
    });
    it('should render NumberInput with title, placeholder and caption', () => {
        render(<NumberInputTester />);
        expect(screen.getByText(NUMBER_TESTER_LABEL)).toBeVisible();
        expect(screen.getByRole('textbox')).toHaveAttribute(
            'placeholder',
            NUMBER_TESTER_PLACEHOLDER,
        );
        expect(screen.getByText(NUMBER_TESTER_CAPTION_TEXT)).toBeVisible();
    });
    it('should change value on typing', async () => {
        render(<NumberInputTester />);
        const numberInput = screen.getByRole('textbox');
        userEvent.type(numberInput, NUMBER_TESTER_VALID_INPUT);
        await waitFor(() =>
            expect(numberInput).toHaveValue(NUMBER_TESTER_VALID_INPUT),
        );
    });
    it('should only type numbers', async () => {
        render(<NumberInputTester />);
        const numberInput = screen.getByRole('textbox');
        userEvent.type(numberInput, NUMBER_TESTER_INVALID_INPUT);
        await waitFor(() => expect(numberInput).toHaveValue(''));
    });
    it('should not change value on typing while disabled', async () => {
        render(<NumberInputTester />);
        const numberInput = screen.getByRole('textbox');
        const toggleDisableButton = screen.getByRole('button', {
            name: 'Toggle disabled',
        });
        userEvent.click(toggleDisableButton);
        await waitFor(() => expect(numberInput).toBeDisabled());
        userEvent.type(numberInput, NUMBER_TESTER_VALID_INPUT);
        await waitFor(() =>
            expect(numberInput).not.toHaveValue(NUMBER_TESTER_VALID_INPUT),
        );
    });
    it('should show invalid text on invalidate', async () => {
        render(<NumberInputTester />);
        const invalidateButton = screen.getByRole('button', {
            name: 'Invalidate',
        });
        userEvent.click(invalidateButton);
        await waitFor(() =>
            expect(screen.getByText(NUMBER_TESTER_INVALID_TEXT)).toBeVisible(),
        );
    });
    it('should add appropriate spacing for currency', async () => {
        render(<NumberInputTester isCurrency />);
        const numberInput = screen.getByRole('textbox');
        const threeDigits = '123';
        const fourDigits = '1234';
        const fourDigitsAsCurrency = '1 234';
        userEvent.type(numberInput, threeDigits);
        await waitFor(() => expect(numberInput).toHaveValue(threeDigits));
        userEvent.clear(numberInput);
        userEvent.type(numberInput, fourDigits);
        await waitFor(() =>
            expect(numberInput).toHaveValue(fourDigitsAsCurrency),
        );
    });
    it('should add appropriate spacing for currency with custom currencySpacer', async () => {
        render(<NumberInputTester isCurrency currencySpacer="," />);
        const numberInput = screen.getByRole('textbox');
        const fourDigits = '1234';
        const fourDigitsAsCurrency = '1,234';
        userEvent.type(numberInput, fourDigits);
        await waitFor(() =>
            expect(numberInput).toHaveValue(fourDigitsAsCurrency),
        );
    });
});
