import React from 'react';
import { render } from '@testing-library/react';
import { Button } from './Button';

// Snapshot Test
describe('Snapshot Button', () => {
  it('should render correctly', () => {
    const tree = render(<Button label='Hello' variant='primary'/>);
    expect(tree).toMatchSnapshot();
  });
});

// Component Test
describe('Button', () => {
  it('renders the Button component', () => {
    render(<Button label="Hello world!" />);
  });
});
