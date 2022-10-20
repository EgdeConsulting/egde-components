import '@testing-library/jest-dom';
import { render} from '@testing-library/react';
import React, { useState } from 'react';
import { RichTextAreaInput } from 'Components';
import { createRoot } from "react-dom/client";

const RICHTEXTAREAINPUT_PLACEHOLDER = 'DatePicker placeholder';
const RICHTEXTAREAINPUT_LABEL = 'RichTextAreaInput label';

const RichTextAreaInputTester = (): JSX.Element => {
    const [value, setValue] = useState<string>('');

    return (
        <>
            <RichTextAreaInput
                value={value}
                onChange={setValue}
                placeholder={RICHTEXTAREAINPUT_PLACEHOLDER}
                label={RICHTEXTAREAINPUT_LABEL}
            />
        </>
    );
}


describe('RichTextAreaInput component test', () => {
    it('matches snapshot', () => {
        const tree = render(<RichTextAreaInputTester/>);
        expect(tree).toMatchSnapshot();
    });
    it('renders without chrashing', () => {
        const div = document.createElement('div');
const root = createRoot(div);

root.render(<RichTextAreaInputTester/>);
    })
});
