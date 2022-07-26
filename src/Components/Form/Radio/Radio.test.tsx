import React from 'react';
import { render } from '@testing-library/react';
import { Radio } from './Radio';



// Snapshot Test
describe('Snapshot Radio', () => {
  it('should render correctly', () => {
    const tree = render(<Radio
        options= {['option 1', 'option 2', 'option 3']}
        value= {0}
        onChange= {() => {}}
        isDisabled= {false}
        backgroundColor= '#fff'
        direction= 'column'
        autoFocus= {false}
        label= 'Radio'
        labelTextMargin= '0'
        invalidText= ''
        captionText= ''
        captionTextMargin= '0'
        margin= '0'
        padding= '0'
        width= '100%'
        minWidth= '0'
        maxWidth= '100%'
        />
        );
    expect(tree).toMatchSnapshot();
  });
});


