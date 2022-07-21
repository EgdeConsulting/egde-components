import React from 'react';

const DocsPageScript = () => {
    return (
        <script>
            {setTimeout(() => {
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
            }, 10)}
        </script>
    );
};

export { DocsPageScript };
