import { addons } from '@storybook/addons';
import egdeTheme from './egdeTheme';
import favicon from '../docs/favicon.ico';

// Solution fetched from https://github.com/storybookjs/storybook/issues/6155
const link = document.createElement('link');
link.setAttribute('rel', 'shortcut icon');
link.setAttribute('href', favicon);
document.head.appendChild(link);

addons.setConfig({
  theme: egdeTheme,
  previewTabs: {
    'storybook/docs/panel': { index: -1 },
  },
  options: {
    storySort: {
      order: ["Egde Library", ["Startpage"]],
    }
  },
});