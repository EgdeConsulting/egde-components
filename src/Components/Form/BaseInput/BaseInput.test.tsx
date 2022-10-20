import React, { ReactElement } from 'react';
import '@testing-library/jest-dom';
import { render, screen } from '@testing-library/react';
import { BaseInput } from './BaseInput';
import { createRoot } from "react-dom/client";

// Snapshot Test
describe('Snapshot BaseInput', () => {
    it('matches snapshot', () => {
        const tree = render(<BaseInputTester/>);
        expect(tree).toMatchSnapshot();
    });
});

const BASEINPUT_TESTER_LABEL = 'label';
const BASEINPUT_TESTER_CAPTION = 'caption';
const BASEINPUT_TESTER_INVALID_TEXT = 'invalidText';
const BASEINPUT_TESTER_CAPTION_TEXT_MARGIN = '0';
const BASEINPUT_TESTER_LABEL_TEXT_MARGIN = '0';
const BASEINPUT_TESTER_MARGIN = '0';
const BASEINPUT_TESTER_PADDING = '0';
const BASEINPUT_TESTER_WIDTH = '100%';
const BASEINPUT_TESTER_MIN_WIDTH = '0';
const BASEINPUT_TESTER_MAX_WIDTH = '100%';
const BASEINPUT_TESTER_CHILDREN = 'It works';

function BaseInputTester(): ReactElement {
    return (
        <BaseInput
            label={BASEINPUT_TESTER_LABEL}
            captionText={BASEINPUT_TESTER_CAPTION}
            invalidText={BASEINPUT_TESTER_INVALID_TEXT}
            captionTextMargin={BASEINPUT_TESTER_CAPTION_TEXT_MARGIN}
            labelTextMargin={BASEINPUT_TESTER_LABEL_TEXT_MARGIN}
            margin={BASEINPUT_TESTER_MARGIN}
            padding={BASEINPUT_TESTER_PADDING}
            width={BASEINPUT_TESTER_WIDTH}
            minWidth={BASEINPUT_TESTER_MIN_WIDTH}
            maxWidth={BASEINPUT_TESTER_MAX_WIDTH}
        >
            <div>{BASEINPUT_TESTER_CHILDREN}</div> 
        </BaseInput>
    );
}

describe('BaseInput test', () => {
    it('matches snapshot', () => {
        const tree = render(<BaseInputTester/>);
        expect(tree).toMatchSnapshot();
    });
    it('renders without chrashing', () => {
        const div = document.createElement('div');
const root = createRoot(div);

root.render(<BaseInputTester/>);
    })

    it('should render with title, caption text and invalid text', () => {
        render(<BaseInputTester />);
        expect(screen.getByText(BASEINPUT_TESTER_LABEL)).toBeVisible();
        expect(screen.getByText(BASEINPUT_TESTER_CAPTION)).toBeVisible();
        expect(screen.getByText(BASEINPUT_TESTER_INVALID_TEXT)).toBeVisible();
    });
});
