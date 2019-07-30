/**
 * Copyright IBM Corp. 2016, 2018
 *
 * This source code is licensed under the Apache-2.0 license found in the
 * LICENSE file in the root directory of this source tree.
 */

import { ChevronRight16 } from '@carbon/icons-react';
import { settings } from 'carbon-components';
import cx from 'classnames';
import PropTypes from 'prop-types';
import React, { useEffect, useState, useRef } from 'react';
import { match, keys } from '../../internal/keyboard';

const { prefix } = settings;
const defaultRenderExpando = props => <button {...props} />;

function AccordionItem({
  children,
  className: customClassName,
  iconDescription = 'Expand/Collapse',
  open = false,
  onHeadingClick,
  renderExpando: Expando = defaultRenderExpando,
  title = 'title',
  ...rest
}) {
  const [isOpen, setIsOpen] = useState(open);
  const [lastEvent, setLastEvent] = useState(null);
  const [prevIsOpen, setPrevIsOpen] = useState(open);
  const savedOnHeadingClick = useRef(onHeadingClick);
  const className = cx({
    [`${prefix}--accordion__item`]: true,
    [`${prefix}--accordion__item--active`]: isOpen,
    [customClassName]: !!customClassName,
  });

  if (open !== prevIsOpen) {
    setIsOpen(open);
    setPrevIsOpen(open);
  }

  useEffect(() => {
    savedOnHeadingClick.current = onHeadingClick;
  }, [onHeadingClick]);

  useEffect(() => {
    const { current: onHeadingClick } = savedOnHeadingClick;
    // Only call `onHeadingClick` if we have an event triggered from a click
    // handler
    if (lastEvent && onHeadingClick) {
      // TODO: normalize signature, potentially:
      // onHeadingClick :: (event: Event, state: { isOpen: Boolean }) => any
      onHeadingClick({ isOpen, event: lastEvent });
    }
  }, [isOpen, lastEvent]);

  // When the AccordionItem heading is clicked, toggle the open state of the
  // panel
  function onClick(event) {
    event.persist();
    setIsOpen(value => !value);
    setLastEvent(event);
  }

  // If the AccordionItem is open, and the user hits the ESC key, then close it
  function onKeyDown(event) {
    if (isOpen && match(event, keys.Escape)) {
      setIsOpen(false);
    }
  }

  return (
    <li className={className} {...rest}>
      <Expando
        aria-expanded={isOpen}
        className={`${prefix}--accordion__heading`}
        onClick={onClick}
        onKeyDown={onKeyDown}
        title={iconDescription}
        type="button">
        <ChevronRight16
          aria-label={iconDescription}
          className={`${prefix}--accordion__arrow`}
        />
        <div className={`${prefix}--accordion__title`}>{title}</div>
      </Expando>
      <div className={`${prefix}--accordion__content`}>{children}</div>
    </li>
  );
}

AccordionItem.propTypes = {
  /**
   * Provide the contents of your AccordionItem
   */
  children: PropTypes.node,

  /**
   * Specify an optional className to be applied to the container node
   */
  className: PropTypes.string,

  /**
   * The accordion title.
   */
  title: PropTypes.node,

  /**
   * The callback function to render the expando button.
   * Can be a React component class.
   */
  renderExpando: PropTypes.func,

  /**
   * The description of the expando icon.
   */
  iconDescription: PropTypes.string,

  /**
   * `true` to open the expando.
   */
  open: PropTypes.bool,

  /**
   * The handler of the massaged `click` event.
   */
  onClick: PropTypes.func,

  /**
   * The handler of the massaged `click` event on the heading.
   */
  onHeadingClick: PropTypes.func,
};

export default AccordionItem;
