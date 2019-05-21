/**
 * Copyright IBM Corp. 2018, 2018
 *
 * This source code is licensed under the Apache-2.0 license found in the
 * LICENSE file in the root directory of this source tree.
 */

import sketch from 'sketch';
import { Document, Rectangle, Text } from 'sketch/dom';
import { findOrCreatePage, selectPage } from '../../tools/page';
import { syncTextStyles } from '../../sharedStyles/type';

const TEXT_MARGIN = 16;

export function generate() {
  sketch.UI.message('Hi 👋 We are still working on this! 🚧');

  const document = Document.getSelectedDocument();
  const page = selectPage(findOrCreatePage(document, 'Type'));
  const sharedStyles = syncTextStyles(document);

  let Y_OFFSET = 0;

  for (const sharedStyle of sharedStyles) {
    const layer = new Text({
      name: sharedStyle.name,
      frame: new Rectangle(0, Y_OFFSET, 500, 75),
      style: sharedStyle.style,
      sharedStyleId: sharedStyle.id,
      parent: page,
      text: sharedStyle.name,
    });

    Y_OFFSET = Y_OFFSET + 75 + 16;
  }

  sketch.UI.message('Done! 🎉');
}
