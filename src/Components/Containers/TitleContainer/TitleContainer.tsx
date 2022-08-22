import { Box, Heading, Container } from '@chakra-ui/react';
import React, { ReactElement } from 'react';

type TitleContainerProps = {
    title: string;
    padding?: string | (string | number)[];
    margin?: string | (string | number)[];
    width?: string | (string | number)[];
    minWidth?: string | (string | number)[];
    children?: ReactElement | ReactElement[];
};

function TitleContainer(props: TitleContainerProps) {
    const { title, padding, margin, width, minWidth, children } = props;

    return (
        <Container
            width={width}
            minWidth={minWidth}
            display='flex'
            alignItems='center'
            flexDirection='column'
            padding={padding}
            margin={margin}
        >
            <Box>
                <Heading>{title}</Heading>
                {children && children}
            </Box>
        </Container>
    );
}

export { TitleContainer };
