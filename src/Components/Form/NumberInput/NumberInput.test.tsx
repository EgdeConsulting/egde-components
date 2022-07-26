import React from 'react';
import { render } from '@testing-library/react';
import { NumberInput } from './NumberInput';

// Snapshot Test
describe('Snapshot NumberInput', () => {
  it('should render correctly', () => {
    const tree = render(<NumberInput
        label= 'Number Input'
        labelTextMargin= '0'
        value= ''
        maxValueLength= {15}
        onChange= {() => {}}
        invalidText= ''
        isDisabled= {false}
        placeholder= 'Placeholder'
        captionText= ''
        isCurrency= {false}
        currencySpacer= ' '
        margin= '0'
        padding= '0'
        width= '100%'
        minWidth= '0'
        backgroundColor= '#ffffff'
        autoFocus= {false}
        textAlign= 'right'
        allowNegative= {false}
        captionTextMargin= '0'
        maxWidth= '100%'
        maxValue= '10'
        />
        );
    expect(tree).toMatchSnapshot();
  });
});


