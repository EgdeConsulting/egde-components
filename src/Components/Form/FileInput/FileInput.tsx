/* eslint-disable */
import React, { ReactElement, useState } from 'react';
import { BaseInput } from 'Components';
import { FileUploadProps } from 'Types';
import Dropzone from 'react-dropzone';
import {
    Box,
    Center,
    List,
    ListItem,
    useMultiStyleConfig,
    IconButton,
} from '@chakra-ui/react';

import {
    UploadIcon,
    UploadDeleteIcon,
    UploadIconDisabled,
    UploadIconHover,
} from 'Icons';

import { FileInputStyles } from 'Styles/Components/FileInputStyles';

export const FileInput = (props: FileUploadProps): ReactElement => {
    const {
        label,
        labelTextMargin,
        invalidText,
        captionText,
        margin,
        padding,
        width,
        minWidth,
        size,
        variant,
    } = props;

    const fileInputStyles = useMultiStyleConfig('FileInput', { size, variant });

    const [totalUploadSizeReached, setTotalUploadSizeReached] =
        useState<boolean>(false);
    const [fileUploadSizeReached, setFileUploadSizeReached] =
        useState<boolean>(false);
    const [filesFromUser, setFilesFromUser] = useState<File[]>();
    const [hoverUploadBox, setHoverUploadBox] = useState(Boolean);

    const onDropAccepted = (acceptedFiles: any[]) => {
        let originalFileState = filesFromUser || [];
        let newFileState = (filesFromUser || []).concat(acceptedFiles);
        setFilesFromUser(newFileState);
        setTotalUploadSizeReached(false);

        if (newFileState) {
            let totalUploadSize = 0;
            totalUploadSize = newFileState
                .map((file: File) => file.size)
                .reduce((a: any, b: any) => {
                    return a + b;
                }, 0);

            if (totalUploadSize > props.maxUploadSize) {
                acceptedFiles = [];
                setFilesFromUser(originalFileState);
                setTotalUploadSizeReached(true);
            } else {
                setFileUploadSizeReached(false);
            }
        }
    };

    const onDropRejected = (rejectedFiles: any[]) => {
        rejectedFiles.forEach((rejected: any, index: number) => {
            if (rejected.errors[0].code === 'file-too-large') {
                setFileUploadSizeReached(true);
            }
        });
    };

    const onDeleteFile = (index: number) => {
        if (filesFromUser) {
            let array = filesFromUser;
            array.splice(index, 1);
            setFilesFromUser([...array]);

            if (filesFromUser.length === 0) {
                setFileUploadSizeReached(false);
                setTotalUploadSizeReached(false);
            }
        }
    };

    const getValidationText = (isDragActive: boolean) => {
        return (
            <Box
                __css={fileInputStyles}
                onMouseEnter={() =>
                    variant !== 'disabled' ?? setHoverUploadBox(true)
                }
                onMouseLeave={() =>
                    variant !== 'disabled' ?? setHoverUploadBox(false)
                }
            >
                <Center>
                    {!isDragActive &&
                    !totalUploadSizeReached &&
                    !fileUploadSizeReached
                        ? props.uploadLabel ??
                          'Dra og slipp filer her, eller klikk for å søke etter filer.'
                        : isDragActive
                        ? props.dropLabel ?? 'Slipp filer'
                        : totalUploadSizeReached
                        ? props.maxUploadSizeLabel ??
                          'Maks opplasting er ' +
                              (
                                  props.maxUploadSize /
                                  1024 /
                                  1024
                              ).toLocaleString() +
                              ' Mb'
                        : props.maxFileSizeLabel ??
                          'Maksstørrelse pr fil er ' +
                              (
                                  props.maxFileSize /
                                  1024 /
                                  1024
                              ).toLocaleString() +
                              ' Mb'}
                </Center>
                {props.showIcon && (
                    <Center marginTop={'0.5rem'}>
                        {hoverUploadBox === true ? (
                            <UploadIconHover />
                        ) : props.variant !== 'disabled' ? (
                            <UploadIcon />
                        ) : (
                            <UploadIconDisabled />
                        )}
                    </Center>
                )}
            </Box>
        );
    };

    return (
        <BaseInput
            label={label}
            labelTextMargin={labelTextMargin}
            invalidText={invalidText}
            captionText={captionText}
            margin={margin}
            padding={padding}
            width={width}
            minWidth={minWidth}
        >
            <Center>
                <Box
                    width={
                        size === 'sm'
                            ? FileInputStyles.sizes.sm.width
                            : FileInputStyles.sizes.md.width
                    }
                >
                    <Dropzone
                        onDropAccepted={onDropAccepted}
                        onDropRejected={onDropRejected}
                        maxSize={props.maxFileSize}
                        disabled={variant === 'disabled' ? true : false}
                    >
                        {({ getRootProps, getInputProps, isDragActive }) => {
                            return (
                                <div {...getRootProps()}>
                                    <input {...getInputProps()} />
                                    <Center>
                                        {getValidationText(isDragActive)}
                                    </Center>
                                </div>
                            );
                        }}
                    </Dropzone>
                    {filesFromUser && (
                        <List paddingTop={'0.5rem'}>
                            {filesFromUser.map((file, i) => (
                                <ListItem key={i}>
                                    {file.name +
                                        ' (' +
                                        Math.round(file.size / 1024) +
                                        ' Kb)'}

                                    <IconButton
                                        marginLeft={'0.5rem'}
                                        aria-label="Fjern fil"
                                        title="Fjern fil"
                                        size="xs"
                                        onClick={() => onDeleteFile(i)}
                                        icon={<UploadDeleteIcon />}
                                    />
                                </ListItem>
                            ))}
                        </List>
                    )}
                </Box>
            </Center>
        </BaseInput>
    );
};
