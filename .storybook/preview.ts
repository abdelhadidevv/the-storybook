import type { Preview } from "@storybook/react";
import { initializeRTL } from "storybook-addon-rtl";

import "../src/index.css"


initializeRTL();

const preview: Preview = {
  parameters: {
    actions: { argTypesRegex: "^on[A-Z].*" },
    controls: {
      matchers: {
        color: /(background|color)$/i,
        date: /Date$/,
      },
    },
    backgrounds:{
      default: 'dark-theme',
      values: [
        {
          name: 'dark-theme',
          value: '#091116',
        },
        {
          name: 'light-theme',
          value: '#fff',
        },
      ],
    }
  },
};

export default preview;
