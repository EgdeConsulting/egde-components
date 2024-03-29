import '@testing-library/jest-dom';
import { render} from '@testing-library/react';
import React, { useState } from 'react';
import { MultiSelect } from 'Components';
import { SelectOption } from 'SharedTypes';
import { createRoot } from "react-dom/client";

const MULTISELECT_PLACEHOLDER = 'DatePicker placeholder';
const MULTISELECT_LABEL = 'RichTextAreaInput label';

const MultiSelectTester = (): JSX.Element => {
    const [value, setValue] = useState<SelectOption[]>([]);

    return (
        <>
            <MultiSelect
                value={value}
                onChange={setValue}
                placeholder={MULTISELECT_PLACEHOLDER}
                label={MULTISELECT_LABEL}
                options={[
                    { label: 'Option 1', value: 1 },
                    { label: 'Option 2', value: 2},
                    { label: 'Option 3', value: 3 },
                ]}
            />
        </>
    );
}


describe('MultiSelect component test', () => {
    it('renders without chrashing', () => {
        const div = document.createElement('div');
const root = createRoot(div);

root.render(<MultiSelectTester/>);
    })
    it('matches snapshot', () => {
        const tree = render(<MultiSelectTester/>);
        expect(tree).toMatchSnapshot();
    });
});
