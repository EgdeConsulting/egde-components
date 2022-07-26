import React from 'react';
import { render } from '@testing-library/react';
import { Checkbox } from './Checkbox';


// Snapshot Test
describe('Snapshot Checkbox', () => {
  it('should render correctly', () => {
    const tree = render(<Checkbox 
        direction= 'column'
        options= {['Checkbox Option One', 'Checkbox Option Two', 'Checkbox Option Three']}
        value= {[0]}
        onChange= {() => {}}
        invalidText= ''
        isDisabled= {false}
        backgroundColor= '#ffffff'
        autoFocus={false}
        label= 'Checkbox'
        labelTextMargin= '0px'
        captionText= ''
        captionTextMargin= '0px'
        margin= '0px'
        padding= '0px'
        width= '100%'
        minWidth= '0px'
        maxWidth= '100%'
        />);
    expect(tree).toMatchSnapshot();
  });
});
