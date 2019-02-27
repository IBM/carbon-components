/**
 * Copyright IBM Corp. 2016, 2018
 *
 * This source code is licensed under the Apache-2.0 license found in the
 * LICENSE file in the root directory of this source tree.
 */

'use strict';

const { prefix } = require('../../globals/js/settings');

const items = [
  {
    id: 'radio-button-1',
    value: 'red',
    label: 'Radio Button label',
  },
  {
    id: 'radio-button-2',
    value: 'green',
    label: 'Radio Button label',
  },
  {
    id: 'radio-button-3',
    value: 'blue',
    label: 'Radio Button label',
    disabled: true,
  },
];

module.exports = {
  context: {
    prefix,
  },
  variants: [
    {
      name: 'default',
      label: 'Radio button group',
      context: {
        selectedValue: 'red',
        group: 'radio-button',
        items,
      },
    },
    {
      name: 'horizontal-bottom',
      label: 'Radio button group (Label at bottom)',
      context: {
        direction: 'bottom',
        selectedValue: 'red',
        group: 'radio-button',
        items,
      },
    },
    {
      name: 'horizontal-left',
      label: 'Radio button group (Label at left)',
      context: {
        direction: 'left',
        selectedValue: 'red',
        group: 'radio-button',
        items,
      },
    },
    {
      name: 'horizontal-top',
      label: 'Radio button group (Label at top)',
      context: {
        direction: 'top',
        selectedValue: 'red',
        group: 'radio-button',
        items,
      },
    },
    {
      name: 'vertical',
      label: 'Vertical radio button group',
      meta: {
        xVersionOnly: true,
      },
      context: {
        selectedValue: 'red',
        group: 'radio-button--vertical',
        vertical: true,
        items,
      },
    },
    {
      name: 'vertical-bottom',
      label: 'Vertical radio button group (Label at bottom)',
      meta: {
        xVersionOnly: true,
      },
      context: {
        direction: 'bottom',
        selectedValue: 'red',
        group: 'radio-button--vertical',
        vertical: true,
        items,
      },
    },
    {
      name: 'vertical-left',
      label: 'Vertical radio button group (Label at left)',
      meta: {
        xVersionOnly: true,
      },
      context: {
        direction: 'left',
        selectedValue: 'red',
        group: 'radio-button--vertical',
        vertical: true,
        items,
      },
    },
    {
      name: 'vertical-top',
      label: 'Vertical radio button group (Label at top)',
      meta: {
        xVersionOnly: true,
      },
      context: {
        direction: 'top',
        selectedValue: 'red',
        group: 'radio-button--vertical',
        vertical: true,
        items,
      },
    },
  ],
};
