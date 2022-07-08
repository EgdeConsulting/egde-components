import React from 'react';
import { render } from '@testing-library/react';
import { DeleteModal } from './DeleteModal';


// Snapshot Test
describe('Snapshot DeleteModal', () => {
  it('should render correctly', () => {
    const tree = render(<DeleteModal 
        isModalOpen= {false}
        isCentered= {false}
        setIsModalOpen= {() => {}}
        onSubmit= { () => {}}
        deleteButtonLabel= 'Delete'
        deleteText= 'Are you sure you want to delete this?'
        title= 'Delete Modal'
        cancelButtonLabel= 'Cancel'
        />);
    expect(tree).toMatchSnapshot();
  });
});
