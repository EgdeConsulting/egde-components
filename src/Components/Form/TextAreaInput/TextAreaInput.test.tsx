import React from 'react';
import { render } from '@testing-library/react';
import { TextAreaInput } from './TextAreaInput';

// Snapshot Test
describe('Snapshot TextAreaInput', () => {
  it('should render correctly', () => {
    const tree = render(<TextAreaInput
        label= 'TextareaInput'
        labelTextMargin= '0'
        placeholder= 'Placeholder'
        onChange= {() => {}}
        value= ''
        invalidText= ''
        captionText= ''
        isDisabled= {false}
        margin= '0'
        padding= '0'
        width= '100%'
        minWidth= '0'
        backgroundColor= 'transparent'
        autoFocus= {false}
        maxWidth= '100%'
        textAlign= 'right'
        characterLimit= {1000}
        captionTextMargin= '0'
        />
        );
    expect(tree).toMatchSnapshot();
  });
});


