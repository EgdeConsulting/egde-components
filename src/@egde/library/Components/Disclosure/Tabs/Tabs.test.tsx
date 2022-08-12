import React from 'react';
import '@testing-library/jest-dom';
import { render, screen, waitFor } from '@testing-library/react';
import userEvent from '@testing-library/user-event';
import { Tabs } from '@egde/components';
import ReactDOM from 'react-dom';

const TAB_TITLES: string[] = ['First', 'Second', 'Third'];
const TAB_CONTENT: string[] = ['FirstContent', 'SecondContent', 'ThirdContent'];

const TabsTester = (): JSX.Element => {
    const tabs = [
        {
            title: TAB_TITLES[0],
            children: <div>{TAB_CONTENT[0]}</div>,
        },
        {
            title: TAB_TITLES[1],
            children: <div>{TAB_CONTENT[1]}</div>,
        },
        {
            title: TAB_TITLES[2],
            children: <div>{TAB_CONTENT[2]}</div>,
        },
    ];

    return (
        <div>
            <Tabs tabs={tabs} centerTabs />
        </div>
    );
};

describe('Tabs component test', () => {
    it('matches snapshot', () => {
        const tree = render(<TabsTester />);
        expect(tree).toMatchSnapshot();
    });
    it('renders without chrashing', () => {
        const div = document.createElement('div');
        ReactDOM.render(<TabsTester />, div);
    });

    it('default tab selected, only first content visible', () => {
        render(<TabsTester />);
        expect(
            screen.getByRole('tab', { name: TAB_TITLES[0] }),
        ).toHaveAttribute('aria-selected', 'true');
        expect(
            screen.getByRole('tab', { name: TAB_TITLES[1] }),
        ).toHaveAttribute('aria-selected', 'false');
        expect(
            screen.getByRole('tab', { name: TAB_TITLES[2] }),
        ).toHaveAttribute('aria-selected', 'false');
        expect(screen.getByText(TAB_CONTENT[0])).toBeVisible();
        expect(screen.getByText(TAB_CONTENT[1])).not.toBeVisible();
        expect(screen.getByText(TAB_CONTENT[2])).not.toBeVisible();
    });

    it('click second tab, second tab selected, only second content visible', async () => {
        render(<TabsTester />);
        const tabTwo = screen.getByRole('tab', { name: TAB_TITLES[1] });
        expect(screen.getByText(TAB_CONTENT[0])).toBeVisible();
        userEvent.click(tabTwo);
        await waitFor(() =>
            expect(tabTwo).toHaveAttribute('aria-selected', 'true'),
        );
        expect(
            await screen.findByRole('tab', { name: TAB_TITLES[0] }),
        ).toHaveAttribute('aria-selected', 'false');
        expect(
            await screen.findByRole('tab', { name: TAB_TITLES[2] }),
        ).toHaveAttribute('aria-selected', 'false');
        expect(await screen.findByText(TAB_CONTENT[0])).not.toBeVisible();
        expect(await screen.findByText(TAB_CONTENT[1])).toBeVisible();
        expect(await screen.findByText(TAB_CONTENT[2])).not.toBeVisible();
    });

    it('click third tab, third tab selected, only third content visible', async () => {
        render(<TabsTester />);
        const tabThree = screen.getByRole('tab', { name: TAB_TITLES[2] });
        expect(screen.getByText(TAB_CONTENT[0])).toBeVisible();
        userEvent.click(tabThree);
        await waitFor(() =>
            expect(tabThree).toHaveAttribute('aria-selected', 'true'),
        );
        expect(
            await screen.findByRole('tab', { name: TAB_TITLES[0] }),
        ).toHaveAttribute('aria-selected', 'false');
        expect(
            await screen.findByRole('tab', { name: TAB_TITLES[1] }),
        ).toHaveAttribute('aria-selected', 'false');
        expect(await screen.findByText(TAB_CONTENT[0])).not.toBeVisible();
        expect(await screen.findByText(TAB_CONTENT[2])).toBeVisible();
        expect(await screen.findByText(TAB_CONTENT[1])).not.toBeVisible();
    });
});
