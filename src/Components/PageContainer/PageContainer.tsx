import React,{ ReactElement } from 'react';
import { Box, Heading, Text, Badge, Center } from '@chakra-ui/react';
import { PageContainerProps } from 'Types';

const PageContainer = (props: PageContainerProps): ReactElement  =>{
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
        containerSideMargins,
        shouldContentFillContainer,
    } = props;

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
            <Box
                padding={containerPadding}
                id='container'
                alignContent='center'
            >
                <Center display={shouldContentFillContainer ? 'block' : 'flex'}>
                    <Box
                        borderColor={borderColor}
                        borderWidth={borderWidth}
                        borderRadius='5px'
                        minWidth={containerMinWidth}
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
                                    <Heading color={titleTextColor}>
                                        {title}
                                    </Heading>
                                    {titleBadge && (
                                        <Badge
                                            marginTop='8px'
                                            textTransform='none'
                                            variant='solid'
                                            backgroundColor={
                                                titleBadge.badgeColor
                                            }
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
            </Box>
        </Box>
    );
}

export { PageContainer };
