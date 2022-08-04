import React from 'react';
import '@testing-library/jest-dom';
import { render, cleanup } from '@testing-library/react';
import { Button } from './Button';
import ReactDOM from 'react-dom';

const BUTTON_LABEL = 'Hello';
const BUTTON_VARIANT = 'primary';

const ButtonTester = (): JSX.Element => {
    const [value, setValue] = React.useState<number>(0);

    const label = BUTTON_LABEL;
    const variant = BUTTON_VARIANT;

    const handleOnClick = () => {
        setValue(value + 1);
    }

    return (
        <div>
            <Button label={label} variant={variant} onClick={handleOnClick}/>
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
        ReactDOM.render(<ButtonTester/>, div);
    })
    it('renders the Button component', () => {
        render(<ButtonTester/>);
    });
    it('renders the Button component with the correct label', () => {
        const { getByText } = render(<ButtonTester/>);
        const buttonLabel = getByText(BUTTON_LABEL);
        expect(buttonLabel).toBeInTheDocument();
    });
   
});
