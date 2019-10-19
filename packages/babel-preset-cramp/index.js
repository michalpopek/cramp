/**
 * Copyright (c) 2019 Michał Popek
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */
'use strict';

module.exports = function(api, opts) {
  const env = process.env.BABEL_ENV || process.env.NODE_ENV;
  const isEnvDevelopment = env === 'development';

  const useEmotion = opts.emotion;

  return {
    presets: [
      require('babel-preset-react-app'),
      useEmotion && [
        require('@emotion/babel-preset-css-prop').default,
        { sourceMaps: isEnvDevelopment },
      ],
    ].filter(Boolean),
  };
};
