# egde-components

## Installation & setup

After having cloned the egde-components repository run:

```sh
yarn
```

This will automatically install all of the needed project dependencies.
To enable yarn (on windows 10) with Node.js >= 16.10, open cmd or powershell `WITH` admin rights and run:

```sh
corepack enable
```

On Windows it's possible that Visual Studio Code will run into an error when trying to execute yarn commands from the internal terminal (see the error below). Deleting the specified file in the error message will in this case solve the issue.  
![Error message for running yarn command in VSC terminal](https://i.imgur.com/HbfIOui.png)

Another error which can be encountered during installation of the project is:
`There appears to be trouble with your network connection. Retrying...`
In this case us the following flag to solve the issue:

```sh
yarn --network-timeout 1000000
```

## Testing

To see how the components will appear in the component library run:

```sh
yarn
yarn storybook
```

This will open the storybook locally on the PC with local changes. For a online preview with the latest available library on GitHub visit:

[Egde Component Library Online](https://egdeconsulting.github.io/egde-components)

## Project Structure

When creating a new stories-file ensure to use the path-enums defined in **LibPath.ts** when setting the **title-property**.

## Lint

```sh
 yarn run lint
```
