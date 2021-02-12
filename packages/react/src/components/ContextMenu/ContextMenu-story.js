/**
 * Copyright IBM Corp. 2020
 *
 * This source code is licensed under the Apache-2.0 license found in the
 * LICENSE file in the root directory of this source tree.
 */

import React from 'react';
import { action } from '@storybook/addon-actions';
import { InlineNotification } from '../Notification';

import ContextMenu, {
  ContextMenuItem,
  ContextMenuDivider,
  ContextMenuSelectableItem,
  ContextMenuRadioGroup,
  useContextMenu,
} from '../ContextMenu';

export default {
  title: 'unstable_ContextMenu',
  parameters: {
    component: ContextMenu,
  },
};

const InfoBanners = () => (
  <>
    <InlineNotification
      kind="info"
      title="Experimental component"
      subtitle="This component is considered experimental. Its API may change until the stable version is released."
      lowContrast
      hideCloseButton
    />
    <InlineNotification
      kind="info"
      title="Context menu"
      subtitle="Right-click anywhere on this page to access an example implementation of this component."
      lowContrast
      hideCloseButton
    />
  </>
);

export const _ContextMenu = () => {
  const contextMenuProps = useContextMenu();

  return (
    <div style={{ height: 'calc(100vh - 6.25rem)' }}>
      <InfoBanners />
      <ContextMenu {...contextMenuProps}>
        <ContextMenuItem label="Share with">
          <ContextMenuRadioGroup
            label="Share with"
            items={['None', 'Product team', 'Organization', 'Company']}
            initialSelectedItem="Product team"
            onChange={action('onChange')}
          />
        </ContextMenuItem>
        <ContextMenuDivider />
        <ContextMenuItem
          label="Cut"
          shortcut="⌘X"
          shortcutText="command x"
          onClick={action('onClick')}
        />
        <ContextMenuItem
          label="Copy"
          shortcut="⌘C"
          shortcutText="command c"
          onClick={action('onClick')}
        />
        <ContextMenuItem
          label="Copy path"
          shortcut="⌥⌘C"
          shortcutText="option command c"
          onClick={action('onClick')}
        />
        <ContextMenuItem
          label="Paste"
          shortcut="⌘V"
          shortcutText="command v"
          disabled
          onClick={action('onClick')}
        />
        <ContextMenuItem label="Duplicate" onClick={action('onClick')} />
        <ContextMenuDivider />
        <ContextMenuSelectableItem
          label="Publish"
          initialChecked
          onChange={action('onChange')}
        />
        <ContextMenuDivider />
        <ContextMenuItem
          label="Rename"
          shortcut="↩︎"
          shortcutText="enter"
          onClick={action('onClick')}
        />
        <ContextMenuItem
          label="Delete"
          shortcut="⌘⌫"
          shortcutText="command backspace"
          onClick={action('onClick')}
        />
      </ContextMenu>
    </div>
  );
};

_ContextMenu.storyName = 'ContextMenu';
