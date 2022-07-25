import { styles } from '../src/Styles';
import '../src/Components/DocsPage/docsPage.css';

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
};
