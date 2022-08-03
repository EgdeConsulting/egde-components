import { create } from '@storybook/theming';

export default create({
    base: 'dark',

    colorPrimary: '#FF7300',
    colorSecondary: '#1080E5',

    // UI
    appBg: '#2F2F2F',
    appContentBg: '#2F2F2F',
    appBorderColor: '#6D6D6D',
    appBorderRadius: 3,

    // Typography
    fontBase: '"Standard", sans-serif',
    // fontCode: 'monospace',

    // Text colors
    textColor: '#FAFAFD',
    // textInverseColor: 'rgba(255,255,255,0.9)',

    // Toolbar default and active colors
    // barTextColor: '',
    // barSelectedColor: '',
    barBg: '#434343',

    // Form colors
    // inputBg: '',
    inputBorder: '#6D6D6D',
    inputTextColor: '#ffffff',
    inputBorderRadius: 3,

    brandTitle: 'Egde storybook',
    brandUrl: 'https://github.com/EgdeConsulting/egde-components',
    brandImage:
        'https://egde.no/wp-content/uploads/2020/08/Egde-logo-clr-RGB.svg',
    brandTarget: '_blank',
});
