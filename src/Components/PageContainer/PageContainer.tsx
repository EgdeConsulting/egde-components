import React, { ReactElement } from 'react';
import { Box, Heading, Text, Badge, Center, Container } from '@chakra-ui/react';
import { PageContainerProps } from 'Types';


const Content = (props: PageContainerProps) => {
    const {
        title,
        titleAlignment,
        titleTextColor,
        subtitle,
        subtitleAlignment,
        subtitleTextColor,
        children,
        contentPadding,
        contentMargin,
        subtitlePadding,
        titlePadding,
        titleMargin,
        borderColor,
        borderWidth,
        contentBorderColor,
        contentBorderWidth,
        titleBadge,
        contentColor,
        titlesColor,
        containerMinWidth,
        containerMaxWidth,
        shouldContentFillContainer,
    } = props;

    return (
        <Center
            display={shouldContentFillContainer ? 'block' : 'flex'}
            minWidth={'100%'}
        >
            <Box
                borderColor={borderColor}
                borderWidth={borderWidth}
                borderRadius='5px'
                minWidth={containerMinWidth}
                maxWidth={containerMaxWidth}
                backgroundColor={titlesColor || 'white'}
            >
                <Box
                    margin={titleMargin}
                    padding={titlePadding}
                    id='titles'
                    backgroundColor={titlesColor || 'white'}
                >
                    <Box
                        display='flex'
                        alignItems={
                            titleAlignment === 'right'
                                ? 'end'
                                : titleAlignment === 'left'
                                ? 'start'
                                : 'center'
                        }
                        flexDirection='column'
                    >
                        <div>
                            <Heading color={titleTextColor}>{title}</Heading>
                            {titleBadge && (
                                <Badge
                                    textTransform='none'
                                    variant='solid'
                                    backgroundColor={titleBadge.badgeColor}
                                    color={titleBadge.textColor}
                                    textAlign='center'
                                >
                                    {titleBadge.label}
                                </Badge>
                            )}
                        </div>
                    </Box>
                    {subtitle && (
                        <Text
                            padding={subtitlePadding}
                            textAlign={subtitleAlignment || 'center'}
                            color={subtitleTextColor}
                        >
                            {subtitle}
                        </Text>
                    )}
                </Box>
                <Box
                    id='content'
                    borderColor={contentBorderColor}
                    borderWidth={contentBorderWidth}
                    backgroundColor={contentColor || 'white'}
                    borderRadius='5px'
                    padding={contentPadding}
                    margin={contentMargin}
                >
                    {children}
                </Box>
            </Box>
        </Center>
    );
};

const PageContainer = (props: PageContainerProps): ReactElement => {
    const {
        title,
        titleAlignment,
        titleTextColor,
        subtitle,
        subtitleAlignment,
        subtitleTextColor,
        children,
        containerPadding,
        containerMargin,
        contentPadding,
        contentMargin,
        subtitlePadding,
        titlePadding,
        titleMargin,
        borderColor,
        borderWidth,
        contentBorderColor,
        contentBorderWidth,
        titleBadge,
        backgroundColor,
        contentColor,
        titlesColor,
        height,
        width,
        containerMinWidth,
        containerMaxWidth,
        containerSideMargins,
        shouldContentFillContainer,
        containerSize,
    } = props;

    const contentProps = {
        shouldContentFillContainer: shouldContentFillContainer,
        title: title,
        titleAlignment: titleAlignment,
        titleTextColor: titleTextColor,
        subtitle: subtitle,
        subtitleAlignment: subtitleAlignment,
        subtitleTextColor: subtitleTextColor,
        children: children,
        contentPadding: contentPadding,
        contentMargin: contentMargin,
        subtitlePadding: subtitlePadding,
        titlePadding: titlePadding,
        titleMargin: titleMargin,
        borderColor: borderColor,
        borderWidth: borderWidth,
        contentBorderColor: contentBorderColor,
        contentBorderWidth: contentBorderWidth,
        titleBadge: titleBadge,
        contentColor: contentColor,
        titlesColor: titlesColor,
        containerMinWidth: containerMinWidth,
        containerMaxWidth: containerMaxWidth,
    };

    return (
        <Box
            id='background'
            backgroundColor={backgroundColor}
            padding={containerMargin}
            paddingLeft={containerSideMargins}
            paddingRight={containerSideMargins}
            height={height || '100%'}
            width={width || '100%'}
        >
            {containerSize ? (
                <Container
                    padding={containerPadding}
                    id='container'
                    centerContent
                    maxWidth={containerSize}
                >
                    <Content {...contentProps} />
                </Container>
            ) : (
                <Box
                    padding={containerPadding}
                    id='container'
                    alignContent='center'
                >
                    <Content {...contentProps} />
                </Box>
            )}
        </Box>
    );
};

export { PageContainer };
