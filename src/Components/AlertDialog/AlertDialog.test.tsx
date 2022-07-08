import React, { MutableRefObject } from 'react';
import { render } from '@testing-library/react';
import { AlertDialog } from './AlertDialog';
import { AlertDialogIconType } from 'Types';


// Snapshot Test
describe('Snapshot Alert', () => {
  it('should render correctly', () => {
    const tree = render(<AlertDialog
    iconVariant= {AlertDialogIconType.Warning}
    heading= 'Heading'
    text= 'Alert Dialog Text'
    isOpen={true}
    cancelRef={{} as MutableRefObject<undefined>}
    onClose= {() => {}}
    buttons={[{label: 'Cancel', onClick: () => {}, variant: 'secondary'}]}
        />
        );
    expect(tree).toMatchSnapshot();
  });
});


