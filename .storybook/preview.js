import { styles } from '../src/Styles';
import '../src/Docs/DocsPage/docsPage.css';
import egdeThemeLight from './egdeThemeLight';
import egdeThemeDark from './egdeThemeDark';
import { backgroundColors } from './backgrounds';
import { INITIAL_VIEWPORTS } from '@storybook/addon-viewport';

export const parameters = {
    actions: { argTypesRegex: '^on.*' },
    viewMode: 'docs',
    viewport: {
        viewports: INITIAL_VIEWPORTS,
    },
    previewTabs: {
        'storybook/docs/panel': { title: 'Documentation', index: -1 },
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
    backgrounds: {
        values: backgroundColors,
    },
};

// Hacky way of clicking on Docs button on first load of page.
// https://github.com/storybookjs/storybook/issues/13128
const clickDocsButtonOnFirstLoad = () => {
    window.removeEventListener('load', clickDocsButtonOnFirstLoad);

    try {
        const docsButtonSelector = window.parent.document.evaluate(
            "//button[contains(., 'Documentation')]",
            window.parent.document,
            null,
            XPathResult.ANY_TYPE,
            null,
        );

        const button = docsButtonSelector.iterateNext();

        button.click();
    } catch (error) {
        // Do nothing if it wasn't able to click on Docs button.
    }
};

window.addEventListener('load', clickDocsButtonOnFirstLoad);
