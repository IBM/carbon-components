/**
 * Copyright IBM Corp. 2020
 *
 * This source code is licensed under the Apache-2.0 license found in the
 * LICENSE file in the root directory of this source tree.
 */

import React from 'react';
import ContextMenu, {
  ContextMenuOption,
  ContextMenuRadioGroup,
  ContextMenuSelectableOption,
  ContextMenuDivider,
} from '../ContextMenu';
import { mount } from 'enzyme';
import { settings } from 'carbon-components';
import { Copy16 } from '@carbon/icons-react';
import { describe, expect } from 'window-or-global';

const { prefix } = settings;

describe('ContextMenu', () => {
  describe('renders as expected', () => {
    describe('menu', () => {
      it('receives the expected classes when closed', () => {
        const wrapper = mount(<ContextMenu />);
        const container = wrapper.childAt(0).childAt(0);

        expect(container.hasClass(`${prefix}--context-menu`)).toBe(true);
        expect(container.hasClass(`${prefix}--context-menu--open`)).toBe(false);
      });

      it('receives the expected classes when opened', () => {
        const wrapper = mount(<ContextMenu open />);

        const container = wrapper.childAt(0).childAt(0);

        expect(container.hasClass(`${prefix}--context-menu`)).toBe(true);
        expect(container.hasClass(`${prefix}--context-menu--open`)).toBe(true);
      });
    });

    describe('option', () => {
      it('receives the expected classes', () => {
        const wrapper = mount(<ContextMenuOption label="Copy" />);
        const container = wrapper.childAt(0);

        expect(container.hasClass(`${prefix}--context-menu-option`)).toBe(true);
      });

      it('renders props.label', () => {
        const wrapper = mount(<ContextMenuOption label="Copy" />);

        expect(
          wrapper.find(`span.${prefix}--context-menu-option__label`).text()
        ).toBe('Copy');
        expect(
          wrapper
            .find(`span.${prefix}--context-menu-option__label`)
            .prop('title')
        ).toBe('Copy');
      });

      it('renders props.renderIcon when provided', () => {
        const wrapper = mount(
          <ContextMenuOption label="Copy" renderIcon={Copy16} indented />
        );

        expect(
          wrapper.find(`div.${prefix}--context-menu-option__icon`).length
        ).toBeGreaterThan(0);
      });

      it('renders props.shortcut when provided', () => {
        const wrapper = mount(
          <ContextMenuOption
            label="Copy"
            shortcut="⌘C"
            shortcutText="command c"
          />
        );

        expect(
          wrapper.find(`div.${prefix}--context-menu-option__info`).length
        ).toBeGreaterThan(0);
        expect(
          wrapper.find(`div.${prefix}--context-menu-option__info`).text()
        ).toBe('⌘C');
        expect(
          wrapper.find(`li.${prefix}--context-menu-option`).prop('aria-label')
        ).toContain('command c');
      });

      it('respects props.disabled', () => {
        const wrapper = mount(<ContextMenuOption label="Copy" disabled />);
        const content = wrapper.find(
          `button.${prefix}--context-menu-option__content`
        );

        expect(content.prop('disabled')).toBe(true);
        expect(
          content.hasClass(`${prefix}--context-menu-option__content--disabled`)
        ).toBe(true);
        expect(
          wrapper
            .find(`li.${prefix}--context-menu-option`)
            .prop('aria-disabled')
        ).toBe(true);
      });

      it('renders props.children as submenu', () => {
        const wrapper = mount(
          <ContextMenu>
            <ContextMenuOption label="Format">
              <ContextMenuOption label="Bold" />
              <ContextMenuOption label="Italic" />
            </ContextMenuOption>
          </ContextMenu>
        );

        const level1 = wrapper.find(`li.${prefix}--context-menu-option`).at(0);

        expect(level1.prop('aria-label')).toBe('Format');
        expect(
          level1.find(`ul.${prefix}--context-menu`).length
        ).toBeGreaterThan(0);
      });
    });

    describe('radiogroup', () => {
      it('receives the expected classes', () => {
        const wrapper = mount(
          <ContextMenuRadioGroup label="Share with" items={['None', 'All']} />
        );
        const container = wrapper.childAt(0);

        expect(container.hasClass(`${prefix}--context-menu-radio-group`)).toBe(
          true
        );
      });

      it('has role "radiogroup"', () => {
        const wrapper = mount(
          <ContextMenuRadioGroup label="Share with" items={['None', 'All']} />
        );
        const container = wrapper.childAt(0);

        expect(container.prop('role')).toBe('radiogroup');
      });

      it('children have role "radio"', () => {
        const wrapper = mount(
          <ContextMenuRadioGroup label="Share with" items={['None', 'All']} />
        );
        const options = wrapper.find(`li.${prefix}--context-menu-option`);

        expect(options.every('li[role="radio"]')).toBe(true);
      });
    });

    describe('selectable', () => {
      it('has role "checkbox"', () => {
        const wrapper = mount(<ContextMenuSelectableOption label="Publish" />);
        const container = wrapper.childAt(0);

        expect(container.prop('role')).toBe('checkbox');
      });
    });

    describe('divider', () => {
      it('receives the expected classes', () => {
        const wrapper = mount(<ContextMenuDivider />);
        const container = wrapper.childAt(0);

        expect(container.hasClass(`${prefix}--context-menu-divider`)).toBe(
          true
        );
      });

      it('has role "separator"', () => {
        const wrapper = mount(<ContextMenuDivider />);
        const container = wrapper.childAt(0);

        expect(container.prop('role')).toBe('separator');
      });
    });
  });
});
