/**
 * Copyright IBM Corp. 2018, 2018
 *
 * This source code is licensed under the Apache-2.0 license found in the
 * LICENSE file in the root directory of this source tree.
 */

'use strict';

const { createTransformer } = require('babel-jest');

const babelOptions = {
  presets: ['babel-preset-carbon/test'],
};

module.exports = createTransformer(babelOptions);
