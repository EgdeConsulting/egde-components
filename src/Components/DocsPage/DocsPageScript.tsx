import React from 'react';
import { useEffect } from 'react';

interface DocsPageScriptProps {
    variant: 'moveStories' | 'createStoryHeadings';
}

const useScriptMoveComponents = (async = true) => {
    useEffect(() => {
        const script = document.createElement('script');

        script.innerHTML = `setTimeout(() => {
                let stories = document.getElementsByClassName(
                    'sbdocs sbdocs-preview css-1fqqvvq',
                );

                if (stories.length !== 0) {
                    for (let i = 0; i < stories.length; i++) {
                        let parent =
                            i == 0
                                ? document.getElementById('docsContent')
                                : document.getElementById('storiesContent');

                        let insertComponent =
                            i == 0
                                ? document.getElementById('componentProps')
                                : document.getElementById('storyHeading' + i);

                        if (parent !== null && insertComponent !== null) {
                            parent.insertBefore(stories[i], insertComponent);
                        }
                    }
                }
            }, 10)`;

        script.async = async;

        document.body.appendChild(script);

        return () => {
            document.body.removeChild(script);
        };
    }, [async]);
};

const useScriptCreateStoryHeadings = (async = true) => {
    useEffect(() => {
        const script = document.createElement('script');

        script.innerHTML = `document
        .querySelectorAll('[id^="story--"]')
        .forEach((element, key) => {
            if (key !== 0) {
                const rawId = element.getAttribute('id');

                if (rawId !== null) {
                    const matches = Array.from(rawId.matchAll(/--/g)).map(
                        (x) => x.index,
                    );
                    const index = (matches[1] || 0) + 2;
                    const headingTitleRaw = rawId
                        .substring(index)
                        .replace(/-/g, ' ');

                    const arr = headingTitleRaw.split(' ');

                    for (let i = 0; i < arr.length; i++) {
                        arr[i] =
                            arr[i].charAt(0).toUpperCase() +
                            arr[i].slice(1);
                    }

                    const headingTitle = arr.join(' ');

                    const parent =
                        document.getElementById('storiesContent');

                    if (parent) {
                        const child = document.createElement('h3');
                        child.id = 'storyHeading' + (key - 1);
                        child.classList.add('css-ypcfyr');
                        child.innerHTML = headingTitle;
                        parent.appendChild(child);
                    }
                }
            }
        });`;

        script.async = async;

        document.body.appendChild(script);

        return () => {
            document.body.removeChild(script);
        };
    }, [async]);
};

const DocsPageScript = (props: DocsPageScriptProps) => {
    const { variant } = props;

    switch (variant) {
        case 'moveStories':
            useScriptMoveComponents();
            break;
        case 'createStoryHeadings':
            useScriptCreateStoryHeadings();
            break;
    }

    return <></>;
};

export { DocsPageScript };
