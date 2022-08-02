import { styles } from '../src/Styles';
import '../src/Docs/DocsPage/docsPage.css';
import egdeThemeLight from './egdeThemeLight';
import egdeThemeDark from './egdeThemeDark';
import { INITIAL_VIEWPORTS } from '@storybook/addon-viewport';

export const parameters = {
    actions: { argTypesRegex: '^on[A-Z].*' },
    viewMode: 'docs',
    viewport: {
        viewports: INITIAL_VIEWPORTS,
      },
    controls: {
        matchers: {
            color: /(background|color)$/i,
            date: /Date$/,
        },
    },
    chakra: {
        theme: styles,
    },
    darkMode: {
        dark: { ...egdeThemeDark },
        light: { ...egdeThemeLight },
    },
};
