import { StyleFunctionProps } from '@chakra-ui/theme-tools';
import { StepsStyleConfig } from 'chakra-ui-steps';

const Steps = {
    ...StepsStyleConfig,
    baseStyle: (props: StyleFunctionProps): unknown => {
        return {
            ...StepsStyleConfig.baseStyle(props),
            stepIconContainer: {
                backgroundColor: 'darkgrey',
                border: 'none',
                borderRadius: '20px',
                opacity: 0.7,
                _activeStep: {
                    backgroundColor: 'green',
                    opacity: 1,
                    color: 'white',
                },
                _highlighted: {
                    backgroundColor: 'green',
                    opacity: 1,
                    color: 'white',
                },
                '> div': {
                    position: 'relative',
                    top: '27.5%',
                    left: '27.5%',
                },
                '> span': {
                    position: 'relative',
                    top: '20%',
                    color: 'white',
                },
            },
            connector: {
                opacity: 0,
            },
        };
    },
};

export { Steps };
