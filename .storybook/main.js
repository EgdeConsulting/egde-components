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
        '@chakra-ui/storybook-addon',
        '@storybook/addon-docs',
        'storybook-dark-mode',
        '@storybook/addon-viewport',
        '@storybook/addon-a11y',
        '@storybook/addon-backgrounds',
        '@storybook/addon-controls',
        'addon-screen-reader',
        '@storybook/addon-actions',

        
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
