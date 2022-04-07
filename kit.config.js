module.exports = {
  themes: {
    development: {
      theme: process.env.THEME_ID,
      password: process.env.PASSWORD,
      store: process.env.STORE,
      ignore: [
        'config/settings_data.json'
      ]
    },
    staging: {
      theme: process.env.STAGING_THEME_ID || process.env.THEME_ID,
      password: process.env.STAGING_PASSWORD || process.env.PASSWORD,
      store: process.env.STORE,
      ignore: [
        'config/settings_data.json'
      ]
    },
    production: {
      theme: process.env.PRODUCTION_THEME_ID || process.env.THEME_ID,
      password: process.env.PRODUCTION_PASSWORD || process.env.PASSWORD,
      store: process.env.STORE,
      ignore: [
        'config/settings_data.json'
      ]
    }
  },
  babel: {
    plugins: [
      '@babel/plugin-proposal-object-rest-spread'
    ],
    sourceMaps: true,
    presets: [
      '@babel/preset-env'
    ]
  },
  reloadDelay: Number(process.env.RELOAD_DELAY) || 1500,
  open: true,
  'css.chunk': false,
  'css.chunk.testSplitting': false,
  'css.chunk.updateOriginalFile': true,
  'debug.showDeploymentLog': true,
  'debug.cssSplitting': false,
  debug: false
}
