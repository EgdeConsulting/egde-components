const RadioStyles = {
    baseStyle: {
        control: {
            backgroundColor: 'white',
            borderColor: 'blue',
            _checked: {
                backgroundColor: 'blue',
                borderColor: 'blue',
                _disabled: {
                    backgroundColor: 'lightblue',
                    borderColor: 'lightblue',
                },
                _hover: {
                    backgroundColor: 'darkblue',
                    borderColor: 'darkblue',
                },
                _invalid: {
                    backgroundColor: 'white',
                    borderColor: 'red',
                    borderWidth: '1px',
                },
            },
            _disabled: {
                backgroundColor: 'lightblue',
                borderColor: 'lightblue',
                _invalid: {
                    backgroundColor: 'lightblue',
                    borderColor: 'lightblue',
                },
            },
            _hover: {
                borderColor: 'darkblue',
                _checked: {
                    backgroundColor: 'darkblue',
                },
                _disabled: {
                    backgroundColor: 'lightblue',
                    borderColor: 'lightblue',
                },
                _invalid: {
                    backgroundColor: 'white',
                    borderWidth: '1px',
                    borderColor: 'red',
                },
            },
            _invalid: {
                backgroundColor: 'white',
                borderWidth: '1px',
                borderColor: 'red',
            },
        },
    },
};

export { RadioStyles };
