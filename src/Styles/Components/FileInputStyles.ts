const FileInputStyles = {
    baseStyle: {
        padding: '16px',
        border: 'dashed 1px #01459E',
        backgroundColor: '#DFEEF9',
        color: '#4A4A4A',
        _hover: {
            border: 'dashed 2px #002855',
        },
    },
    sizes: {
        sm: {
            width: '240px',
            paddingLeft: '32px',
        },
        md: {
            width: '392px',
        },
    },
    variants: {
        disabled: {
            backgroundColor: '#A4A4A4',
            color: '#FFFFFF',
            cursor: 'default',
            _hover: {
                border: 'dashed 1px #01459E',
            },
        },
    },
    defaultProps: {
        size: 'md',
    },
};

export { FileInputStyles };
