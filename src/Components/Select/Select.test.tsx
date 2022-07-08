import React from 'react';
import { render } from '@testing-library/react';
import { Select } from './Select';


// Snapshot Test
describe('Snapshot Select', () => {
  it('should render correctly', () => {
    const tree = render(<Select
        label= 'Select'
        options= {[
        { label: 'Option 1', value: 0 },
        { label: 'Option 2', value: 1 },
        { label: 'Option 3', value: 2 },
        ]}
        value= {{ 
            label: '', 
            value: 0 
        }}
        placeholder= 'Select an option'
        filterText= ''
        isDisabled= {false}
        backgroundColor= '#fff'
        autoFocus= {false}
        labelTextMargin= '0'
        invalidText= ''
        captionText= ''
        captionTextMargin= '0'
        margin= '0'
        padding= '0'
        width= '100%'
        minWidth= '0'
        maxWidth= '100%'
        onChange= {() => {}}
        />
        );
    expect(tree).toMatchSnapshot();
  });
});


