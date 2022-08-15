import React, { ReactElement } from 'react';
import { render, screen } from '@testing-library/react';
import '@testing-library/jest-dom';
import { Card } from 'egde-components';
import ReactDOM from 'react-dom';

const CARD_TESTER_TITLE = 'CardTitle';
const CARD_TESTER_BODY = 'CardBody';
const ACTION_ICON_TESTID = 'ActionIconTestId';
const TITLE_ICON_TESTID = 'TitleIconTestId';
const TEXT_COLOR_TEST = '#000000';
const TITLE_TEXT_COLOR_TEST = '#000000';
const BODY_TEXT_COLOR_TEST = '#000000';
const TITLE_TEXT_SIZE_TEST = '1.5rem';
const BODY_TEXT_SIZE_TEST = '1rem';
const CARD_HEIGHT_TEST = '100px';
const CARD_WIDTH_TEST = '100px';

function CardTester(props: { mockOnClick: () => void }): ReactElement {
    const { mockOnClick } = props;
    return (
        <Card
            title={CARD_TESTER_TITLE}
            body={CARD_TESTER_BODY}
            onClick={mockOnClick}
            actionIcon={<div data-testid={ACTION_ICON_TESTID}>Placeholder</div>}
            titleIcon={<div data-testid={TITLE_ICON_TESTID}>Placeholder</div>}
            textColors={TEXT_COLOR_TEST}
            titleTextColor={TITLE_TEXT_COLOR_TEST}
            bodyTextColor={BODY_TEXT_COLOR_TEST}
            titleTextSize={TITLE_TEXT_SIZE_TEST}
            bodyTextSize={BODY_TEXT_SIZE_TEST}
            cardHeight={CARD_HEIGHT_TEST}
            cardWidth={CARD_WIDTH_TEST}
        />
    );
}

// TEST
describe('Card component test', () => {
    const mockOnClick = jest.fn();
    it('matches snapshot', () => {
        const tree = render(<CardTester mockOnClick={mockOnClick} />);
        expect(tree).toMatchSnapshot();
    });
    it('renders without chrashing', () => {
        const div = document.createElement('div');
        ReactDOM.render(<CardTester mockOnClick={mockOnClick} />, div);
    });

    it('should render with title, icon and body', () => {
        render(<CardTester mockOnClick={mockOnClick} />);
        expect(screen.getByText(CARD_TESTER_TITLE)).toBeVisible();
        expect(screen.getByText(CARD_TESTER_BODY)).toBeVisible();
        expect(screen.getByTestId(ACTION_ICON_TESTID)).toBeVisible();
        expect(screen.getByTestId(TITLE_ICON_TESTID)).toBeVisible();
    });
});
