/* eslint-disable no-param-reassign */
module.exports = function override(config) {
  config.resolve = {
    extensions: ['.ts', '.tsx', '.js', '.css', '.scss'],
  };

  config.module.rules.push(
    {
      test: /\.scss$/i,
      use: [
        require.resolve('style-loader'),
        {
          loader: require.resolve('css-loader'),
          options: {
            importLoaders: 1,
            modules: true,
            localIdentName: '[name]__[local]__[hash:base64:5]',
          },
        },
      ],
    },
  );

  return config;
};
