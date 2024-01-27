const getConfig = require('./config');

module.exports = {
  module: {
    rules: [
      {
        test: /\.tsx?$/,
        use: [
          {
            loader: 'ts-loader',
            options: {
              transpileOnly: true,
            },
          },
        ],
        exclude: /node_modules/,
      },
    ],
  },
  resolve: {
    alias: {
      '@shared': getConfig('appShared'),
      '@src': getConfig('appDir'),
    },
    extensions: ['.tsx', '.ts', '.jsx', '.js'],
  },
};
