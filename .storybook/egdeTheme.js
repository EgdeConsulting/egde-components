import { create } from '@storybook/theming';

export default create({
    base: 'dark',

    colorPrimary: '#d06cff',
    colorSecondary: '#ff7300',

    // UI
    // appBg: 'white',
    appContentBg: '#474747',
    appBorderColor: '#ffab66',
    appBorderRadius: 0,

    // Typography
    fontBase: '"Open Sans", sans-serif',
    //fontCode: 'monospace',

    // Text colors
    textColor: '#ffab66',
    // textInverseColor: 'rgba(255,255,255,0.9)',

    // Toolbar default and active colors
    // barTextColor: 'red',
    // barSelectedColor: 'red',
    // barBg: 'hotpink',

    // Form colors
    //inputBg: 'red',
    inputBorder: '#ffab66',
    // inputTextColor: 'black',
    inputBorderRadius: 0,

    brandTitle: 'Egde storybook',
    brandUrl: 'https://github.com/EgdeConsulting/egde-components',
    brandImage: 'https://egde.no/wp-content/uploads/2020/08/Egde-logo-clr-RGB.svg',
    brandTarget: '_blank',
});