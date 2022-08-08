import React from 'react';
import { ComponentStability, ComponentStabilityProps } from 'Docs';
import { Alert } from 'Components';
import { styles } from 'Styles';
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
            <p>{description}</p>
        </div>
    );
};

export { DocsPageHeader };
