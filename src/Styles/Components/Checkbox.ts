const Checkbox = {
    baseStyle: {
        control: {
            backgroundColor: 'white',
            borderColor: 'blue',
            borderRadius: 'sm',
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
                    borderWidth: '2px',
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
                    borderWidth: '2px',
                    borderColor: 'red',
                },
            },
            _invalid: {
                borderWidth: '2px',
                borderColor: 'red',
            },
        },
    },
};

export { Checkbox };
