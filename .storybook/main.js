const path = require('path');

module.exports = {
    stories: [
        '../src/**/Introduction.stories.mdx',
        '../src/**/Installation.stories.mdx',
        '../src/Docs/*.stories.mdx',
        '../src/**/*.stories.mdx',
    ],
    addons: [
        '@storybook/addon-links',
        //'@storybook/addon-essentials',
        // '@storybook/addon-actions',
        // '@storybook/addon-interactions',
        '@chakra-ui/storybook-addon',
        '@storybook/addon-docs',
        'storybook-dark-mode',
        '@storybook/addon-viewport',
        '@storybook/addon-a11y',
        
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
