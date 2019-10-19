// @remove-file-on-eject
/**
 * Copyright (c) 2014-present, Facebook, Inc.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */
'use strict';

const babelJest = require('babel-jest');
const paths = require('../paths');
const appPackageJson = require(paths.appPackageJson);

const useEmotion = appPackageJson.dependencies['@emotion/core'] !== undefined;

module.exports = babelJest.createTransformer({
  presets: [[require.resolve('babel-preset-cramp'), { emotion: useEmotion }]],
  babelrc: false,
  configFile: false,
});
