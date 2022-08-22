import { Box, useStyleConfig, Center } from '@chakra-ui/react';
import React from 'react';

type ContentContainerProps = {
    children: JSX.Element[] | JSX.Element;
    padding?: string | (string | number)[];
    margin?: string | (string | number)[];
    minWidth?: string | (string | number)[];
    width?: string | (string | number)[];
};

function ContentContainer(props: ContentContainerProps) {
    const { padding, margin, minWidth, width, children } = props;

    const styles = useStyleConfig('ContentContainer');

    return (
        <Center>
            <Box
                sx={styles}
                padding={padding}
                minWidth={minWidth}
                width={width}
                margin={margin}
            >
                {children}
            </Box>
        </Center>
    );
}

export { ContentContainer };
