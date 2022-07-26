import React from 'react';
import { render } from '@testing-library/react';
import { Alert } from './Alert';


// Snapshot Test
describe('Snapshot Alert', () => {
  it('should render correctly', () => {
    const tree = render(<Alert 
        description= 'This is an info alert' 
        status= 'info'
        linkText= ''
        linkHref= ''
        onClose={ () => {} }
        hasNoCloseButton ={false}
        route= ''
        />
        );
    expect(tree).toMatchSnapshot();
  });
});
