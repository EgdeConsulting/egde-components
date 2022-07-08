import React from 'react';
import { render } from '@testing-library/react';
import { TextInput } from './TextInput';

// Snapshot Test
describe('Snapshot TextAreaInput', () => {
  it('should render correctly', () => {
    const tree = render(<TextInput
        label= 'Number Input'
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
        backgroundColor= '#ffffff'
        autoFocus= {false}
        textAlign= 'right'
        characterLimit= {0}
        captionTextMargin= '0'
        maxWidth= '100%'
        />
        );
    expect(tree).toMatchSnapshot();
  });
});


