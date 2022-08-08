/* eslint-disable */

export enum Root {
    GettingStarted = 'Getting Started/',
    Components = 'Components/',
    Templates = 'Templates/',
    DesignTokens = 'Design Tokens/',
    // Example of new root:
    // Layout = "Layout/",
}

export enum LibPath {
    Cards = Root.Components + 'Cards/',
    Containers = Root.Components + 'Containers/',
    Form = Root.Components + 'Form/',
    Navigation = Root.Components + 'Navigation/',
    Overlay = Root.Components + 'Overlay/',
    Disclosure = Root.Components + 'Disclosure/',
    Feedback = Root.Components + 'Feedback/',
    // Example of new sub-directory
    // Headers = Root.Layout + "Headers/",
}
