import React from 'react';
import { Props } from '@storybook/addon-docs';

interface DocsPageBodyProps {
    addStories: boolean;
}

const DocsPageBody = (props: DocsPageBodyProps) => {
    const { addStories } = props;

    return (
        <div className="docsPage">
            <p>
                Change some of the props and see how the <code>Base</code>{' '}
                component changes.
            </p>
            <Props story="Base" />
            {addStories && (
                <div>
                    <h1>Stories</h1>
                    <hr />
                    <p>
                        Below are shown different implementations of the
                        component in regards to varying use cases.
                    </p>
                    <br />
                </div>
            )}
        </div>
    );
};

export { DocsPageBody };