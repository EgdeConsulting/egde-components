import { addons } from '@storybook/addons';
import icon from './egdeIcon.ico';
import fonts from '../src/Styles/Fonts/fonts.css'; // This import allows the fontBase in egdeTheme to load correctly

// Solution fetched from https://github.com/storybookjs/storybook/issues/6155
const iconLink = document.createElement('link');
iconLink.setAttribute('rel', 'shortcut icon');
iconLink.setAttribute('href', icon);
document.head.appendChild(iconLink);

addons.setConfig({
    toolbar: {
        title: { hidden: false }, //Set true to hide "Canvas" and "Docs" from toolbar
        zoom: { hidden: false },
        eject: { hidden: false },
        copy: { hidden: false },
        fullscreen: { hidden: false },
        'storybook/background': { hidden: false },
        'storybook/viewport': { hidden: false },
    },
});

function setToolbarButtonVisibility(showButtons) {
    const toolbarButtons = [
        document.querySelector('[title="Remount component"]'),
        document.querySelector('[title*="Set color mode"]'),
        document.querySelector('[title="Apply a grid to the preview"]'),
        document.querySelector(
            '[title="Change the background of the preview"]',
        ),
        document.querySelector('[title*="Set layout direction"]'),
    ];

    for (let i = 0; i < toolbarButtons.length; i++) {
        if (toolbarButtons[i]) {
            toolbarButtons[i].style.display = showButtons
                ? 'inline-flex'
                : 'none';
        }
    }
}

setInterval(() => {
    try {
        const docsButton = document
            .getElementsByClassName('sto-1xonygc')[0]
            .getElementsByTagName('button')[0];

        const showButtons = docsButton.classList.contains('sto-1dtue14')
            ? false
            : true;

        setToolbarButtonVisibility(showButtons);
    } catch {
        // Some of the elements haven't rendered yet.
    }
}, 100);

// Moves the dark-mode button next to the fullscreen button on the toolbar.
setTimeout(() => {
    const parent = document.getElementsByClassName('sto-102is01')[0];

    if (parent) {
        const child = parent.childNodes[0];
        const darkModeButton = document.querySelector(
            '[title*="Change theme to"]',
        );

        if (child && darkModeButton) {
            parent.insertBefore(darkModeButton, child);
        }
    }
}, 3000);

// Sets default width of the navbar by editing localStorage key.
function setSidebarWidth(width) {
    const storybookLayout = localStorage.getItem('storybook-layout');

    if (!storybookLayout) {
        localStorage.setItem(
            'storybook-layout',
            '{"resizerPanel":{"x":0,"y":0},"resizerNav":{"x":' +
                width +
                ',"y":0}}',
        );
    }
}

setSidebarWidth(330);
