import { addons } from '@storybook/addons';
import icon from './egdeIcon.ico';
import fonts from '../src/Styles/Fonts/fonts.css'; // This import allows the fontBase in egdeTheme to load correctly

// Solution fetched from https://github.com/storybookjs/storybook/issues/6155
const iconLink = document.createElement('link');
iconLink.setAttribute('rel', 'shortcut icon');
iconLink.setAttribute('href', icon);
document.head.appendChild(iconLink);

setTimeout(() => {
    let toolbarButtons = [
        document.querySelector('[title="Remount component"]'),
        document.querySelector('[title="Set color mode to dark"]'),
    ];

    for (let i = 0; i < toolbarButtons.length; i++) {
        if (toolbarButtons[i]) {
            toolbarButtons[i].setAttribute('style', 'display: none;');
        }
    }
}, 2500);

addons.setConfig({
    // previewTabs: {
    //     'storybook/docs/panel': { index: -1 },
    // },
    // showToolbar: false,
    toolbar: {
        title: { hidden: true },
        zoom: { hidden: true },
        eject: { hidden: true },
        copy: { hidden: true },
        // fullscreen: { hidden: true },
        'storybook/background': { hidden: true },
        'storybook/viewport': { hidden: true },
    },
});
