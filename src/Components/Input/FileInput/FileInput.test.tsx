import React from 'react';
import { render } from '@testing-library/react';
import { FileInput } from './FileInput';

// Snapshot Test
describe('Snapshot FileInput', () => {
  it('should render correctly', () => {
    const tree = render(<FileInput
      label= 'FileInput'
      labelTextMargin= '0px'
      invalidText= ''
      captionText= ''
      margin= '0px'
      padding= '0px'
      width= '100%'
      minWidth= '0px'
      size= 'md'
      variant= 'default'
      uploadLabel= 'Drag and drop or click to upload'
      dropLabel= 'Drop'
      maxFileSizeLabel= 'Max file size is....'
      maxUploadSizeLabel= 'Max upload size is...'
      maxFileSize= {1000}
      maxUploadSize= {1000}
      disabled= {false}
      showIcon= {true}
      captionTextMargin= '0px'
      maxWidth= '100%'
        />
        );
    expect(tree).toMatchSnapshot();
  });
});


