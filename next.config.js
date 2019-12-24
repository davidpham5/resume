const withCSS = require('@zeit/next-css');
const withImages = require('next-images');

module.exports = withCSS(withImages({
  webpack(config, options) {
    return config
  },
  exportTrailingSlash: true,
  exportPathMap: function() {
    return {
      '/': { page: '/' },
      '/home': { page: '/home' },
      '/resume': { page : '/resume' },
      '/lab': { page: '/lab' }
    };
  },
  assetPrefix: process.env.NODE_ENV === 'production' ? '/resume' : '',
}))