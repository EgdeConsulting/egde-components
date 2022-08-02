import { styles } from '../src/Styles';
import '../src/Docs/DocsPage/docsPage.css';
import egdeThemeLight from './egdeThemeLight';
import egdeThemeDark from './egdeThemeDark';

export const parameters = {
    actions: { argTypesRegex: '^on[A-Z].*' },
    viewMode: 'docs',
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
