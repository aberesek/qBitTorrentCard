const path = require('path');

module.exports = {
  entry: './src/index.ts',
  output: {
    filename: 'qbittorrent-card.js',
    path: path.resolve(__dirname, 'dist'),
    library: {
      type: 'module'
    }
  },
  experiments: {
    outputModule: true
  },
  module: {
    rules: [
      {
        test: /\.ts$/,
        use: 'ts-loader',
        exclude: /node_modules/
      },
      {
        test: /\.json$/,
        type: 'json',
        parser: {
          parse: JSON.parse
        }
      }
    ]
  },
  resolve: {
    extensions: ['.ts', '.js', '.json']
  },
  externals: {
    'home-assistant-js-websocket': 'home-assistant-js-websocket'
  }
};

