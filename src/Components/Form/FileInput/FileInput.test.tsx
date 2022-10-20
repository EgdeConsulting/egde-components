import React from 'react';
import '@testing-library/jest-dom';
import { render } from '@testing-library/react';
import { FileInput } from './FileInput';
import { createRoot } from "react-dom/client";

const FILEINPUT_LABEL = 'FileInput label';
const FILEINPUT_VARIANT = 'default';
const UPLOAD_LABEL = 'Upload label';
const DROP_LABEL = 'Drop label';
const MAX_FILE_SIZE_LABEL = 'Max file size label';
const MAX_UPLOAD_SIZE_LABEL = 'Max upload size label';
const MAX_UPLOAD_SIZE_VALUE = 1000;
const MAX_FILE_SIZE_VALUE = 1000;

const FileInputTester = (): JSX.Element => {
    return (
        <>
            <FileInput
                label={FILEINPUT_LABEL}
                variant={FILEINPUT_VARIANT}
                uploadLabel={UPLOAD_LABEL}
                dropLabel={DROP_LABEL}
                maxFileSizeLabel={MAX_FILE_SIZE_LABEL}
                maxUploadSizeLabel={MAX_UPLOAD_SIZE_LABEL}
                maxUploadSize={MAX_UPLOAD_SIZE_VALUE}
                maxFileSize={MAX_FILE_SIZE_VALUE}
            />
        </>
    );
}


// Snapshot Test
describe('Snapshot FileInput', () => {
  it('matches snapshot', () => {
    const tree = render(<FileInputTester />);
    expect(tree).toMatchSnapshot();
  });
  it('renders without chrashing', () => {
    const div = document.createElement('div');
    const root = createRoot(div);
        root.render(<FileInputTester/>)
})
});


