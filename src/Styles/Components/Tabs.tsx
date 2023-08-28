const Tabs = {
    variants: {
        'line': {
            tab: {
                color: 'darkgrey',
                fontSize: '18px',
                _focus: {
                    boxShadow: 'none',
                },
                _selected: {
                    color: 'blue',
                    fontWeight: 'bold',
                    borderBottom: '2px solid',
                },
            },
        },
    },
};

export { Tabs };
