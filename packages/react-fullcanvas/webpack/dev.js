import { resolve } from 'path';
import { networkInterfaces } from 'os';
import {
  HotModuleReplacementPlugin,
  NamedModulesPlugin,
  LoaderOptionsPlugin
} from 'webpack';
import {
  forEach,
  get,
  isEqual
} from 'lodash';
import autoprefixer from 'autoprefixer';

const getExternalIpAddress = () => {
  let externalIpAddress;
  let ExternalNetworkInterfaces = networkInterfaces().en0 || networkInterfaces().en5;
  forEach(ExternalNetworkInterfaces, (item) => {
    if (isEqual(get(item, 'family'), 'IPv4')) {
      externalIpAddress = get(item, 'address');
    }
  });
  return externalIpAddress;
};

export default {
  target: 'web',
  entry: [
    'react-hot-loader/patch',
    'webpack-dev-server/client?https://'+ getExternalIpAddress() +':9898',
    'webpack/hot/only-dev-server',
    './src/index.js'
  ],
  output: {
    path: resolve(__dirname, '../example'),
    filename: 'bundle.js',
    publicPath: '/'
  },
  devtool: 'eval-source-map',
  devServer: {
    hot: true,
    contentBase: resolve(__dirname, '../example'),
    publicPath: '/',
    compress: true,
    https: true,
    stats: 'normal',
    historyApiFallback: true,
    host: getExternalIpAddress(),
    port: 9898
  },
  module: {
    rules: [
      {
        test: /\.js$/,
        use: [
          'babel-loader',
        ],
        exclude: /node_modules/
      },
      {
        // "oneOf" will traverse all following loaders until one will
        // match the requirements. When no loader matches it will fall
        // back to the "file" loader at the end of the loader list.
        oneOf: [
          // "postcss" loader applies autoprefixer to our CSS.
          // "css" loader resolves paths in CSS and adds assets as dependencies.
          // "style" loader turns CSS into JS modules that inject <style> tags.
          // In production, we use a plugin to extract that CSS to a file, but
          // in development "style" loader enables hot editing of CSS.
          {
            test: /\.css$/,
            use: [
              require.resolve('style-loader'),
              {
                loader: require.resolve('css-loader'),
                options: {
                  importLoaders: 1,
                },
              },
              {
                loader: require.resolve('postcss-loader'),
                options: {
                  // Necessary for external CSS imports to work
                  // https://github.com/facebookincubator/create-react-app/issues/2677
                  ident: 'postcss',
                  plugins: () => [
                    require('postcss-flexbugs-fixes'),
                    autoprefixer({
                      browsers: [
                        '>1%',
                        'last 3 versions',
                        'Firefox ESR',
                        'not ie_mob < 10',
                      ],
                      flexbox: 'no-2009',
                    }),
                  ],
                },
              },
            ],
          },
        ],
      },
    ],
  },
  plugins: [
    new HotModuleReplacementPlugin(),
    new NamedModulesPlugin(),
    new LoaderOptionsPlugin({
      minimize: true,
      debug: true
    })
  ]
};
