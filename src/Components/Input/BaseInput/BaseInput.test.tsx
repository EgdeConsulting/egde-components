import React from 'react';
import { render } from '@testing-library/react';
import { BaseInput } from './BaseInput';

// Snapshot Test
describe('Snapshot BaseInput', () => {
  it('should render correctly', () => {
    const tree = render(<BaseInput
        label= 'It works'
        children= {[<div>It works</div>]}
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


