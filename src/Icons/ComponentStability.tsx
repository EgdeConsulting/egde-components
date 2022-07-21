/* eslint-disable */
import React, { ReactElement } from 'react';

export interface ComponentStabilityProps {
    variant?: 'stable' | 'unstable' | 'deprecated';
}

const ComponentStability = (props: ComponentStabilityProps): ReactElement => {
    const { variant } = props;
    let backgroundcolor;

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
    }

    return (
        <div
            style={{
                borderRadius: '999999px',
                display: 'inline-block',
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
            }}
        >
            {(variant || '').charAt(0).toUpperCase() + (variant || '').slice(1)}
        </div>
    );
};

export { ComponentStability };
