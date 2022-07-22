import React from 'react';
import { ComponentStability, ComponentStabilityProps } from 'Icons';
import { DocsPageScript } from 'Components';
import { Props } from '@storybook/addon-docs/blocks';
import { Alert } from 'Components';

interface ImportantNoteProps {
    noteMessage?: string;
}

interface StoriesContentProps {
    storyNames?: string[];
}

interface DocsPageProps
    extends ComponentStabilityProps,
        StoriesContentProps,
        ImportantNoteProps {
    componentName: string;
    componentDescription: string;
    addStories: boolean;
    addImportantNote: boolean;
}

const StoriesContent = (props: StoriesContentProps) => {
    const { storyNames } = props;
    return (
        <div id="storiesContent">
            <h1 className="css-1d8ls76">Stories</h1>
            <hr />
            <p className="css-1p8ieni">
                Below are shown different implementations of the component in
                regards to varying use cases.
            </p>
            <br />
            {(storyNames || []).map((value, index) => {
                return (
                    <h3
                        key={index}
                        className="css-ypcfyr"
                        id={'storyHeading' + index}
                    >
                        {value}
                    </h3>
                );
            })}
            {/*<DocsPageScript variant="createStoryHeadings" />*/}
        </div>
    );
};

const DocsPage = (props: DocsPageProps) => {
    const {
        componentName,
        componentDescription,
        addStories,
        storyNames,
        addImportantNote,
        noteMessage,
        variant,
    } = props;

    return (
        <div id="docsContent">
            {addImportantNote && (
                <div>
                    {/* Alert component doesn't get its styling */}
                    <Alert
                        description={noteMessage || ''}
                        status="warning"
                        hasNoCloseButton={true}
                    />
                    <br />
                </div>
            )}
            {/* The default MDX styling (i.e. class css-1d8ls76) isn't rendered into the DOM, 
            unless a standard mdx-page has been loaded prior (i.e. Introduction.stories.mdx) */}
            <h1 className="css-1d8ls76">{componentName}</h1>
            <ComponentStability variant={variant} />
            <hr />
            <p className="css-1p8ieni">{componentDescription}</p>
            <p className="css-1p8ieni" id="componentProps">
                Change some of the props and see how the <code>Base</code>{' '}
                component changes.
            </p>
            <Props story="Base" />
            {addStories && <StoriesContent storyNames={storyNames} />}
            <DocsPageScript variant="moveStories" />
        </div>
    );
};

export { DocsPage };
