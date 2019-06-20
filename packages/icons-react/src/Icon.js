/**
 * Copyright IBM Corp. 2019, 2019
 *
 * This source code is licensed under the Apache-2.0 license found in the
 * LICENSE file in the root directory of this source tree.
 */

import { getAttributes } from '@carbon/icon-helpers';
import PropTypes from 'prop-types';
import React from 'react';

const defaultStyle = {
  willChange: 'transform',
};

const Icon = React.forwardRef(function Icon(
  { className, children, style = {}, tabIndex, ...rest },
  ref
) {
  const { tabindex, ...props } = getAttributes({
    ...rest,
    tabindex: tabIndex,
  });

  if (className) {
    props.className = className;
  }

  if (tabindex !== undefined && tabindex !== null) {
    props.tabIndex = tabindex;
  }

  if (ref) {
    props.ref = ref;
  }

  props.style = {
    ...defaultStyle,
    ...style,
  };

  return React.createElement('svg', props, children);
});

Icon.displayName = 'Icon';
Icon.propTypes = {
  'aria-hidden': PropTypes.string,
  'aria-label': PropTypes.string,
  'aria-labelledby': PropTypes.string,
  className: PropTypes.string,
  children: PropTypes.node,
  height: PropTypes.number,
  preserveAspectRatio: PropTypes.string,
  tabIndex: PropTypes.string,
  viewBox: PropTypes.string,
  width: PropTypes.number,
  xmlns: PropTypes.string,
};
Icon.defaultProps = {
  xmlns: 'http://www.w3.org/2000/svg',
  preserveAspectRatio: 'xMidYMid meet',
};

export default Icon;
