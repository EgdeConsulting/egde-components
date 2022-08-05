import React, { ReactElement, useState } from 'react';
import '@testing-library/jest-dom';
import { render, screen, waitFor } from '@testing-library/react';
import userEvent from '@testing-library/user-event';
import { IconTestID } from 'Types';
import { Alert } from './Alert';
import ReactDOM from 'react-dom';


const ALERT_TESTER_ICON = IconTestID.AlertWarning;
const ALERT_TESTER_STATUS = 'warning';
const ALERT_TESTER_DESCRIPTION = 'This is the warning description';
const ALERT_TESTER_LINK_HREF = 'https://chakra-ui.com/docs/navigation/link#';
const ALERT_TESTER_LINK_TEXT = 'Learn more';

const AlertTester = (): ReactElement => {
    const [isVisible, setIsVisible] = useState<boolean>(true);
    return isVisible ? (
        <Alert
            status={ALERT_TESTER_STATUS}
            description={ALERT_TESTER_DESCRIPTION}
            onClose={() => setIsVisible(false)}
            linkText={ALERT_TESTER_LINK_TEXT}
            linkHref={ALERT_TESTER_LINK_HREF}
            hasNoCloseButton ={false}
          route= ''
        />
    ) : (
        <></>
    );
}


describe('Alert component test', () => {
    it('matches snapshot', () => {
        const tree = render(<AlertTester/>);
        expect(tree).toMatchSnapshot();
      });
      it('renders without chrashing', () => {
        const div = document.createElement('div');
        ReactDOM.render(<AlertTester/>, div);
    })

    it('should render with icon, description, link and close button', async () => {
        render(<AlertTester />);

        expect(screen.getByTestId(ALERT_TESTER_ICON)).toBeVisible();
        expect(screen.getByText(ALERT_TESTER_DESCRIPTION)).toBeVisible();
        expect(screen.getByRole('link')).toHaveAttribute(
            'href',
            ALERT_TESTER_LINK_HREF
        );
        const closeButton = screen.getByRole('button', { name: 'Close' });
        expect(closeButton).toBeVisible();
        userEvent.click(closeButton);
        await waitFor(() => expect(closeButton).not.toBeVisible());
    });
});
