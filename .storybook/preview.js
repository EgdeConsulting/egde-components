import { styles } from '../src/Styles';
//const theme = required('../src/Styles');
//import { theme } from "@chakra-ui/react";
export const parameters = {
  actions: { argTypesRegex: '^on[A-Z].*' },
  controls: {
    matchers: {
      color: /(background|color)$/i,
      date: /Date$/,
    },
  },
  chakra: {
    theme: styles,
  },
};

// Ref https://issuehunt.io/r/storybookjs/storybook/issues/13128
function clickDocsButtonOnFirstLoad() {
  window.removeEventListener('load', clickDocsButtonOnFirstLoad);

  try {
    const docsButtonSelector = window.parent.document.evaluate(
      "//button[contains(., 'Docs')]",
      window.parent.document,
      null,
      XPathResult.ANY_TYPE,
      null,
    );

    const button = docsButtonSelector.iterateNext();

    button.click();
  } catch (error) {
    // Do nothing if it wasn't able to click on Docs button.
  }
}

window.addEventListener('load', clickDocsButtonOnFirstLoad);
