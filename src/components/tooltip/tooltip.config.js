/**
 * Copyright IBM Corp. 2016, 2018
 *
 * This source code is licensed under the Apache-2.0 license found in the
 * LICENSE file in the root directory of this source tree.
 */

'use strict';

const featureFlags = require('../../globals/js/feature-flags');
const { prefix } = require('../../globals/js/settings');

module.exports = {
  context: {
    featureFlags,
    prefix,
  },
  variants: [
    {
      name: 'default',
      label: 'Interactive Tooltip',
      notes: `
        Interactive tooltip should be used if there are actions a user can take in the tooltip (e.g. a link or a button).
        For more regular use case, e.g. giving the user more text information about something,
        use definition tooltip or icon tooltip.
      `,
    },
    {
      name: 'definition',
      label: 'Definition Tooltip',
      notes: `
        This tooltip variation is for regular use case of tooltip,
        e.g. giving the user more text information about something, like defining a word.
        This works better than the interactive tooltip in regular use cases
        because the info icon used in interactive tooltip can be repetitive when it’s shown several times on a page.
        This tooltip variation does not use any JavaScript.
        If there are actions a user can take in the tooltip (e.g. a link or a button), use the main variation.
      `,
    },
    {
      name: 'icon',
      label: 'Icon Tooltip',
      notes: `
        This tooltip variation is for short single line of text describing an icon.
        This tooltip variation does not use any JavaScript. No label should be added to this variation.
        If there are actions a user can take in the tooltip (e.g. a link or a button), use the main variation.
      `,
    },
  ],
};
