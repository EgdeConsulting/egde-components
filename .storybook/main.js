const path = require('path');

module.exports = {
  stories: [
    '../src/Components/Startpage.stories.mdx',
    '../src/**/*.stories.mdx',
    '../src/**/*.stories.@(js|jsx|ts|tsx|mdx)'
  ],
  addons: [
    '@storybook/addon-links',
    '@storybook/addon-essentials',
    '@storybook/addon-actions',
    '@storybook/addon-interactions',
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
  webpackFinal: async (config) => {
    config.resolve.modules = [
      ...(config.resolve.modules || []),
      path.resolve(__dirname, '../src/'),
    ];

    return config;
  },
};
