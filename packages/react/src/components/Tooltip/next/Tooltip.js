/**
 * Copyright IBM Corp. 2016, 2018
 *
 * This source code is licensed under the Apache-2.0 license found in the
 * LICENSE file in the root directory of this source tree.
 */

import { settings } from 'carbon-components';
import cx from 'classnames';
import PropTypes from 'prop-types';
import React, { useRef, useEffect, useState } from 'react';
import { Popover, PopoverContent } from '../../Popover';
import { canUseDOM } from '../../../internal/environment';
import { useEvent } from '../../../internal/useEvent';
import { useId } from '../../../internal/useId';
import { useNoInteractiveChildren } from '../../../internal/useNoInteractiveChildren';

const { prefix } = settings;

function Tooltip({
  className: customClassName,
  children,
  label,
  description,
  ...rest
}) {
  const containerRef = useRef(null);
  const tooltipRef = useRef(null);
  const [open, setOpen] = useState(false);
  const id = useId('tooltip');
  const child = React.Children.only(children);

  const triggerProps = {
    onFocus: () => setOpen(true),
    onBlur: () => setOpen(false),
  };

  if (label) {
    triggerProps['aria-labelledby'] = id;
  } else {
    triggerProps['aria-describedby'] = id;
  }

  if (__DEV__) {
    useNoInteractiveChildren(
      tooltipRef,
      'The Tooltip component must have no interactive content rendered by the' +
        '`label` or `description` prop'
    );
  }

  if (canUseDOM) {
    useEvent(window, 'keydown', () => {
      setOpen(false);
    });
  }

  return (
    <div
      {...rest}
      className={cx('cds--tooltip', customClassName)}
      onMouseEnter={() => setOpen(true)}
      onMouseLeave={() => setOpen(false)}
      ref={containerRef}>
      {React.cloneElement(child, triggerProps)}
      <Popover align="top" open={open} highContrast>
        <PopoverContent
          aria-hidden="true"
          className={`cds--tooltip-content`}
          id={id}
          ref={tooltipRef}
          role="tooltip">
          {label || description}
        </PopoverContent>
      </Popover>
    </div>
  );
}

Tooltip.propTypes = {
  /**
   * Pass in the child to which the tooltip will be applied
   */
  children: PropTypes.node,

  /**
   * Specify an optional className to be applied to the container node
   */
  className: PropTypes.string,

  /**
   * Provide the label to be rendered inside of the Tooltip. The label will use
   * `aria-labelledby` and will fully describe the child node that is provided.
   * This means that if you have text in the child node, that it will not be
   * announced to the screen reader.
   *
   * Note: if label and description are both provided, description will not be
   * used
   */
  label: PropTypes.node,

  /**
   * Provide the description to be rendered inside of the Tooltip. The
   * description will use `aria-describedby` and will describe the child node
   * in addition to the text rendered inside of the child. This means that if you
   * have text in the child node, that it will be announced alongside the
   * description to the screen reader.
   *
   * Note: if label and description are both provided, label will be used and
   * description will not be used
   */
  description: PropTypes.node,
};

export { Tooltip };
