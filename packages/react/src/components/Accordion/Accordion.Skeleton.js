/**
 * Copyright IBM Corp. 2016, 2018
 *
 * This source code is licensed under the Apache-2.0 license found in the
 * LICENSE file in the root directory of this source tree.
 */

import PropTypes from 'prop-types';
import React from 'react';
import cx from 'classnames';
import { ChevronRight16 } from '@carbon/icons-react';
import { settings } from 'carbon-components';
import SkeletonText from '../SkeletonText';
import deprecate from '../../prop-types/deprecate';

const { prefix } = settings;

function AccordionSkeleton({
  open,
  count,
  className: customClassName,
  ...rest
}) {
  const className = cx(
    `${prefix}--accordion`,
    `${prefix}--skeleton`,
    customClassName
  );
  const numSkeletonItems = open ? count - 1 : count;
  return (
    <ul className={className} {...rest}>
      {open && (
        <li
          className={`${prefix}--accordion__item ${prefix}--accordion__item--active`}>
          <span className={`${prefix}--accordion__heading`}>
            <ChevronRight16 className={`${prefix}--accordion__arrow`} />
            <SkeletonText className={`${prefix}--accordion__title`} />
          </span>
          <div className={`${prefix}--accordion__content`}>
            <SkeletonText width="90%" />
            <SkeletonText width="80%" />
            <SkeletonText width="95%" />
          </div>
        </li>
      )}
      {Array.from({ length: numSkeletonItems }).map((_, i) => (
        <AccordionSkeletonItem key={i} />
      ))}
    </ul>
  );
}

AccordionSkeleton.propTypes = {
  /**
   * `false` to not display the first item opened
   */
  open: PropTypes.bool,

  /**
   * Set number of items to render
   */
  count: PropTypes.number,

  /**
   * Set unique identifier to generate unique item keys
   */
  uid: deprecate(PropTypes.any),

  /**
   * Specify an optional className to add.
   */
  className: PropTypes.string,
};

AccordionSkeleton.defaultProps = {
  open: true,
  count: 4,
};

function AccordionSkeletonItem() {
  return (
    <li className={`${prefix}--accordion__item`}>
      <span className={`${prefix}--accordion__heading`}>
        <ChevronRight16 className={`${prefix}--accordion__arrow`} />
        <SkeletonText className={`${prefix}--accordion__title`} />
      </span>
    </li>
  );
}

export default AccordionSkeleton;
