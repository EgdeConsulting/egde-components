import React from 'react';
import { render } from '@testing-library/react';
import { Select } from './Select';
import ReactDOM from 'react-dom';


const SELECT_PLACEHOLDER = 'Select placeholder';
const SELECT_LABEL = 'Select label';
const SELECT_OPTIONS = [
    { label: 'Option 1', value: 1 },
    { label: 'Option 2', value: 2},
    { label: 'Option 3', value: 3 },
];
const SELECT_VALUE = {
    label: '',
    value: 0,
}
const SelectTester = (): JSX.Element => {
    const [value, setValue] = React.useState<any>(SELECT_VALUE);

    return (
        <>
            <Select
                value={value}
                onChange={setValue}
                placeholder={SELECT_PLACEHOLDER}
                label={SELECT_LABEL}
                options={SELECT_OPTIONS}
              />
        </>
    );
}

    

describe('Snapshot Select', () => {
  it('matches snapshot', () => {
    const tree = render(<SelectTester />
    );
    expect(tree).toMatchSnapshot();
  });
  it('renders without chrashing', () => {
    const div = document.createElement('div');
    ReactDOM.render(<SelectTester/>, div);
})
});

