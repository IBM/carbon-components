/**
 * Copyright IBM Corp. 2016, 2018
 *
 * This source code is licensed under the Apache-2.0 license found in the
 * LICENSE file in the root directory of this source tree.
 */

import PropTypes from 'prop-types';
import React from 'react';

const TableCell = React.forwardRef(function TableCell(
  { children, colWidth, ...rest },
  ref
) {
  return (
    <td {...rest} ref={ref} style={{ width: colWidth }}>
      {children}
    </td>
  );
});

TableCell.propTypes = {
  /**
   * Pass in children that will be embedded in the table header label
   */
  children: PropTypes.node,

  // internal properties for column resizing
  colWidth: PropTypes.number,
};

TableCell.displayName = 'TableCell';

export default TableCell;
