module.exports = {
  stories: ['../**/stories/*.stories.{js,md,mdx}'],
  addons: [
    'storybook-prebuilt/addon-actions/register.js',
    'storybook-prebuilt/addon-knobs/register.js',
    'storybook-prebuilt/addon-a11y/register.js',
    'storybook-prebuilt/addon-docs/register.js',
  ],
  esDevServer: {
    // custom es-dev-server options
    nodeResolve: true,
    watch: true,
    open: true,
  },
  // Rollup build output directory (build-storybook only)
  outputDir: '../docs',
  // Configuration for rollup (build-storybook only)
  rollup: config => {
    return config;
  },
};
