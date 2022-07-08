import React from 'react';
import { render } from '@testing-library/react';
import { Tabs } from './Tabs';

// Snapshot Test
describe('Snapshot Select', () => {
  it('should render correctly', () => {
    const tree = render(<Tabs
      tabs= {[
        {
          title: 'The first tab',
          children: [<div key={'1.1'}>Content of tab 1</div>],
        },
        {
          title: 'The second tab',
          children: [<div key={'2.1'}>Content of tab 2</div>],
        },
      ]}
      centerTabs= {false}
        />
        );
    expect(tree).toMatchSnapshot();
  });
});


