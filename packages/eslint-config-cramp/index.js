/**
 * Copyright (c) 2019 Michał Popek
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */
'use strict';

module.exports = {
  extends: [
    'react-app',
    'prettier',
    'prettier/react',
    'prettier/@typescript-eslint',
  ],
  plugins: ['simple-import-sort', 'prettier'],
  rules: {
    'simple-import-sort/sort': 'error',
    'prettier/prettier': 'error',
    'import/first': 'error',
    'import/newline-after-import': 'error',
    'import/no-duplicates': 'error',
  },
};
