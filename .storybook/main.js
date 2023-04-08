const path = require("path");
module.exports = {
  stories: ["../src/**/*.stories.mdx", "../src/**/*.stories.@(js|jsx|ts|tsx)"],
  addons: [
    "@storybook/addon-links",
    "@storybook/addon-essentials",
    "@storybook/addon-interactions",
    "storybook-addon-next-router",
    "@tomfreudenberg/next-auth-mock/storybook",
  ],
  framework: "@storybook/react",
  core: {
    builder: "@storybook/builder-webpack5",
  },
  webpackFinal: async (config) => {
    config.resolve.alias[
      "@tomfreudenberg/next-auth-mock/storybook/preview-mock-auth-states"
    ] = path.resolve(__dirname, "previewMockAuthStates.js");
    return config;
  },
};
