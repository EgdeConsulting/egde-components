import React from 'react';
import { render } from '@testing-library/react';
import { Card } from './Card';


// Snapshot Test
describe('Snapshot Card', () => {
  it('should render correctly', () => {
    const tree = render(<Card 
        title='This is a title' 
        body='This is a body'
        textColors='#000000'
        titleTextColor='#000'
        bodyTextColor='#000'
        titleTextSize='1.5rem'
        bodyTextSize='1rem'
        onClick={() => {}}
        titleIcon={<div>Test</div>}
        actionIcon={<div>Test</div>}
        cardHeight='100px'
        cardWidth='100px'
        />);
    expect(tree).toMatchSnapshot();
  });
});
