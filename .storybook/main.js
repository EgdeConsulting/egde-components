const path = require('path');

module.exports = {
    stories: [
        '../src/Pages/Introduction.stories.mdx',
        '../src/**/*.stories.mdx',
        //'../src/**/*.stories.@(js|jsx|ts|tsx|md|mdx)',
    ],
    addons: [
        '@storybook/addon-links',
        // '@storybook/addon-essentials',
        // '@storybook/addon-actions',
        // '@storybook/addon-interactions',
        '@chakra-ui/storybook-addon',
        '@storybook/addon-docs',
    ],
    framework: '@storybook/react',
    core: {
        'builder': '@storybook/builder-webpack5',
    },
    features: {
        emotionAlias: false,
    },
    // enabling this will prevent the inclusion of the Chakra UI storybook
    // refs: {
    //     '@chakra-ui/react': {
    //         disable: true,
    //     },
    // },
    webpackFinal: async (config) => {
        config.resolve.modules = [
            ...(config.resolve.modules || []),
            path.resolve(__dirname, '../src/'),
        ];

        return config;
    },
};
