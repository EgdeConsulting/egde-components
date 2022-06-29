import { addons } from '@storybook/addons';
import egdeTheme from './egdeTheme';
import icon from '../docs/egdeIcon.ico';
import fonts from '../src/Styles/Fonts/fonts.css'; // This import allows the fontBase in egdeTheme.js to load correctly

// Solution fetched from https://github.com/storybookjs/storybook/issues/6155
const iconLink = document.createElement('link');
iconLink.setAttribute('rel', 'shortcut icon');
iconLink.setAttribute('href', icon);
document.head.appendChild(iconLink);

addons.setConfig({
  theme: egdeTheme,
  previewTabs: {
    'storybook/docs/panel': { index: -1 },
  },
  options: {
    storySort: {
      order: ['Egde Library', ['Startpage']],
    },
  },
});
