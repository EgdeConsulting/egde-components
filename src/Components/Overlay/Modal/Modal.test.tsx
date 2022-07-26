import React from 'react';
import { render } from '@testing-library/react';
import { Modal } from './Modal';
import { ModalIconType } from 'Types';


// Snapshot Test
describe('Snapshot Modal', () => {
  it('should render correctly', () => {
    const tree = render(<Modal 
        isModalOpen= {false}
        isCentered= {false}
        iconVariant= {ModalIconType.Check}
        title= 'Modal Title'
        subtitle= 'Modal Subtitle'
        children= {<div>Modal Content</div>}
        buttons= {{
          primary: {
            label: 'Primary Button',
            variant: 'primary',
            onClick: () => {},
          },
          secondary: {
            label: 'Close',
            variant: 'secondary',
            onClick: () => {},
          },
          alignment: 'left',
        }}
        onClose= {() => {}}
        hasCloseButton= {true}
        errorMessage= ''
        width= '25%'
            />);
    expect(tree).toMatchSnapshot();
  });
});
