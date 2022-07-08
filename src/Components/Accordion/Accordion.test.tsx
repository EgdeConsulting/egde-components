import React from 'react';
import { render } from '@testing-library/react';
import { Accordion } from './Accordion';

// Snapshot Test
describe('Snapshot Accordion', () => {
  it('should render correctly', () => {
    const tree = render(<Accordion items={[{title: 'Test', content: <div>Test</div>}]} />);
    expect(tree).toMatchSnapshot();
  });
});
