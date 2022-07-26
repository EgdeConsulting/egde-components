import React from 'react';
import { ComponentStability, ComponentStabilityProps } from 'Icons';
import { Alert } from 'Components';
import { styles } from 'Styles';
import { ChakraProvider } from '@chakra-ui/react';

interface ImportantNoteProps {
    noteMessage?: string;
}

interface DocsPageHeaderProps
    extends ComponentStabilityProps,
        ImportantNoteProps {
    componentName: string;
    componentDescription: string;
    addImportantNote: boolean;
}

const DocsPageHeader = (props: DocsPageHeaderProps) => {
    const {
        componentName,
        componentDescription,
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
            <h1>{componentName}</h1>
            <ComponentStability variant={variant} />
            <hr />
            <p>{componentDescription}</p>
        </div>
    );
};

export { DocsPageHeader };
