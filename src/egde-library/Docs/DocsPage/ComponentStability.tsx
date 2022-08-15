/* eslint-disable */
import React, { ReactElement } from 'react';

export interface ComponentStabilityProps {
    variant: 'stable' | 'unstable' | 'deprecated' | 'none';
}

const ComponentStability = (props: ComponentStabilityProps): ReactElement => {
    const { variant } = props;
    let backgroundcolor;
    let displayState = 'inline-block';

    switch (variant) {
        case 'stable':
            backgroundcolor = '#138849';
            break;
        case 'unstable':
            backgroundcolor = '#D2CB3F';
            break;
        case 'deprecated':
            backgroundcolor = '#D23F47';
            break;
        case 'none':
            displayState = 'none';
            break;
    }

    return (
        <div
            style={{
                borderRadius: '999999px',
                display: displayState,
                padding: '2px 8px',
                fontSize: '14px',
                lineHeight: '20px',
                fontWeight: '700',
                fontFamily: 'Verdana',
                textAlign: 'center',
                letterSpacing: '0.25px',
                color: '#ffffff',
                marginBottom: '16px',
                marginRight: '3px',
                backgroundColor: backgroundcolor,
                boxShadow: 'rgb(0 0 0 / 30%) 0 3px 9px 0',
            }}
        >
            {(variant || '').charAt(0).toUpperCase() + (variant || '').slice(1)}
        </div>
    );
};

export { ComponentStability };
