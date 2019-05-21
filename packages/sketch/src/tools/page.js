/**
 * Copyright IBM Corp. 2018, 2018
 *
 * This source code is licensed under the Apache-2.0 license found in the
 * LICENSE file in the root directory of this source tree.
 */

import { Document, Page } from 'sketch/dom';

/**
 * Find or create a page for the given document context and page name
 */
export function findOrCreatePage(document, name) {
  const [page] = document.pages.filter(page => page.name === name);

  if (page) {
    page.remove();
  }

  return new Page({
    name,
    parent: document,
  });
}
