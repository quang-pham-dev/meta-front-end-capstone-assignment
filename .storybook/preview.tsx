import React from "react";
import { Preview } from "@storybook/react";
import "../src/styles/App.css";

const preview: Preview = {
  decorators: [
    (Story) => (
      <div style={{ margin: "3em" }}>
        <Story />
      </div>
    )
  ],
  parameters: {
    // Remove the actions parameter
    controls: {
      matchers: {
        color: /(background|color)$/i,
        date: /Date$/
      }
    }
  }
};

export default preview;
