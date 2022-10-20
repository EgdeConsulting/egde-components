import React from 'react';
import '@testing-library/jest-dom';
import userEvent from '@testing-library/user-event';
import { render, cleanup } from '@testing-library/react';
import { Button } from './Button';
import { createRoot } from "react-dom/client";


const BUTTON_LABEL = 'Hello';
const BUTTON_VARIANT = 'primary';

const ButtonTester = (): JSX.Element => {
    const [label, setLabel] = React.useState<string>(BUTTON_LABEL);

    const variant = BUTTON_VARIANT;

    const testHandleOnClick = () => {
        setLabel('Clicked');
    }

    return (
        <div>
            <Button label={label} variant={variant} onClick={testHandleOnClick}/>
        </div>
    );
}

afterEach(cleanup);
describe('Button Tests', () => {
    it('matches snapshot', () => {
        const tree = render(<ButtonTester/>);
        expect(tree).toMatchSnapshot();
    });
    it('renders without chrashing', () => {
        const div = document.createElement('div');
const root = createRoot(div);

root.render(<ButtonTester/>);
    })
    it('renders the Button component', () => {
        render(<ButtonTester/>);
    });
    it('renders the Button component with the correct label', () => {
        const { getByText } = render(<ButtonTester/>);
        const buttonLabel = getByText(BUTTON_LABEL);
        expect(buttonLabel).toBeInTheDocument();
    });
   it('handle on click', () => {
        const { getByText } = render(<ButtonTester/>);
        const btn = getByText(BUTTON_LABEL);
        expect(btn.innerHTML).toBe(BUTTON_LABEL);
        userEvent.click(btn);
        expect(btn.innerHTML).toBe('Clicked');
    });
} );
