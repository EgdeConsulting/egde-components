import { create } from '@storybook/theming';

export default create({
  base: 'light',

  colorPrimary: '#01233D',
  colorSecondary: '#01233D',

  // UI
  appBg: '#FAFAFD',
  appContentBg: '#FAFAFD',
  appBorderColor: '#C7C8DB',
  appBorderRadius: 0,

  // Typography
  fontBase: '"Standard", sans-serif',
  // fontCode: 'monospace',

  // Text colors
  textColor: '#01233D',
  // textInverseColor: 'rgba(255,255,255,0.9)',

  // Toolbar default and active colors
  // barTextColor: '',
  // barSelectedColor: '',
  barBg: '#E8EAF9',

  // Form colors
  // inputBg: '',
  inputBorder: '#C7C8DB',
  inputTextColor: '#01233D',
  inputBorderRadius: 0,

  brandTitle: 'Egde storybook',
  brandUrl: 'https://github.com/EgdeConsulting/egde-components',
  brandImage:
    'https://egde.no/wp-content/uploads/2020/08/Egde-logo-clr-RGB.svg',
  brandTarget: '_blank',
});
