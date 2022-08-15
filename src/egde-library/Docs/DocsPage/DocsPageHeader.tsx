import React from 'react';
import { ComponentStability, ComponentStabilityProps } from 'egde-library';
import { Alert } from 'egde-components';
import { styles } from 'egde-styles';
import { ChakraProvider } from '@chakra-ui/react';

interface ImportantNoteProps {
    noteMessage?: string;
}

interface DocsPageHeaderProps
    extends ComponentStabilityProps,
        ImportantNoteProps {
    title: string;
    description: string | JSX.Element | JSX.Element[];
    addImportantNote: boolean;
}

const DocsPageHeader = (props: DocsPageHeaderProps) => {
    const {
        title: title,
        description: description,
        addImportantNote,
        noteMessage,
        variant,
    } = props;

    return (
        <div className="docsPage">
            {addImportantNote && (
                <div>
                    <ChakraProvider theme={styles}>
                        <Alert
                            description={noteMessage || ''}
                            status="warning"
                            hasNoCloseButton={true}
                        />
                    </ChakraProvider>
                    <br />
                </div>
            )}
            <h1>{title}</h1>
            <ComponentStability variant={variant} />
            <hr />
            <div className="description">{description}</div>
        </div>
    );
};

export { DocsPageHeader };
