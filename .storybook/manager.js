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

    let sidebar = document.getElementsByClassName('sto-1q7pov5')[0];

    for (let i = 0; i < toolbarButtons.length; i++) {
        if (toolbarButtons[i]) {
            toolbarButtons[i].style.display = 'none';
        }
    }

    if (sidebar) {
        sidebar.style.width = '330px';
    }
}, 2500);

addons.setConfig({
    toolbar: {
        //Set true to hide canvas and docks from navbar
        title: { hidden: false },
        zoom: { hidden: true },
        eject: { hidden: true },
        copy: { hidden: true },
        // fullscreen: { hidden: true },
        'storybook/background': { hidden: false },
        'storybook/viewport': { hidden: false },
    },
});
