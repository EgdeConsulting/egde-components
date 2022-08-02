import '@testing-library/jest-dom';
import { render} from '@testing-library/react';
import React, { useState } from 'react';
import { RichTextAreaInput } from 'Components';

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
    it('should render correctly', () => {
        const tree = render(<RichTextAreaInputTester/>);
        expect(tree).toMatchSnapshot();
    });
});
