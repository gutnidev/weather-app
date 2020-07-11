module.exports = {
  publicPath: process.env.NODE_ENV === 'production'
    ? '/weather-app/'
    : '/',
  pwa: {
    name: 'Weather',
    themeColor: '#5674db',
    msTileColor: '#000000',
    appleMobileWebAppCapable: 'yes',
    appleMobileWebAppStatusBarStyle: 'black',

    // настройки манифеста
    manifestOptions: {
      display: 'standalone',
      background_color: '#5674db',
    },
  },
};
