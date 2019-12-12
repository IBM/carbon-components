/**
 * Copyright IBM Corp. 2016, 2018
 *
 * This source code is licensed under the Apache-2.0 license found in the
 * LICENSE file in the root directory of this source tree.
 */

import './styles.scss';
import './polyfills';

import { settings } from 'carbon-components';
import React, { useEffect } from 'react';

const { prefix } = settings;

function Container({ story, hasMainContent }) {
  useEffect(() => {
    const originalDirection = document.documentElement.dir;
    if (process.env.CARBON_REACT_STORYBOOK_USE_RTL === 'true') {
      document.documentElement.dir = 'rtl';
    }
    return () => {
      document.documentElement.dir = originalDirection;
    };
  }, []);

  return (
    <React.StrictMode>
      <div
        data-floating-menu-container
        id={!hasMainContent ? 'main-content' : undefined}
        role={!hasMainContent ? 'main' : 'region'}
        aria-label={!hasMainContent ? undefined : 'UI Shell container'}
        style={{
          padding: '3em',
          display: 'flex',
          flexDirection: 'column',
          alignItems: 'center',
        }}>
        {story()}
      </div>
      <a
        aria-label="input-text-offleft"
        type="text"
        href="main-content"
        className={`${prefix}--visually-hidden`}
      />
    </React.StrictMode>
  );
}

export default Container;
