/**
 * Copyright IBM Corp. 2016, 2018
 *
 * This source code is licensed under the Apache-2.0 license found in the
 * LICENSE file in the root directory of this source tree.
 */

import Search20 from '@carbon/icons-react/lib/search/20';
import Notification20 from '@carbon/icons-react/lib/notification/20';
import AppSwitcher20 from '@carbon/icons-react/lib/app-switcher/20';

import { storiesOf } from '@storybook/react';
import { action } from '@storybook/addon-actions';

import React from 'react';
import { withReadme } from 'storybook-readme';
import readme from './README.md';
import HeaderContainer from './HeaderContainer';
import {
  Content,
  Header,
  HeaderMenuButton,
  HeaderName,
  HeaderNavigation,
  HeaderMenu,
  HeaderMenuItem,
  HeaderGlobalBar,
  HeaderGlobalAction,
  HeaderPanel,
  SkipToContent,
  SideNav,
  // Temporarily comment these out until they are needed again
  // SideNavHeader,
  // SideNavDetails,
  // SideNavSwitcher,
  SideNavItems,
  SideNavLink,
  SideNavMenu,
  SideNavMenuItem,
  Switcher,
  SwitcherItem,
  SwitcherItemLink,
} from '../UIShell';

const Fade16 = () => (
  <svg
    width="16"
    height="16"
    xmlns="http://www.w3.org/2000/svg"
    viewBox="0 0 32 32"
    aria-hidden="true">
    <path d="M8.24 25.14L7 26.67a14 14 0 0 0 4.18 2.44l.68-1.88a12 12 0 0 1-3.62-2.09zm-4.05-7.07l-2 .35A13.89 13.89 0 0 0 3.86 23l1.73-1a11.9 11.9 0 0 1-1.4-3.93zm7.63-13.31l-.68-1.88A14 14 0 0 0 7 5.33l1.24 1.53a12 12 0 0 1 3.58-2.1zM5.59 10L3.86 9a13.89 13.89 0 0 0-1.64 4.54l2 .35A11.9 11.9 0 0 1 5.59 10zM16 2v2a12 12 0 0 1 0 24v2a14 14 0 0 0 0-28z" />
  </svg>
);

const StoryContent = () => {
  const content = Array.from({ length: 10 }, (_, i) => (
    <div key={i}>
      <h2>Title</h2>
      <p>
        Elit dolores reiciendis sit id consequuntur facere! Recusandae rerum
        sequi possimus soluta sit Facilis quidem minima sit ipsa consequuntur
        Maiores facilis dolorum suscipit velit soluta unde. Aliquam consequuntur
        cum eum
      </p>
    </div>
  ));
  return <Content id="main-content">{content}</Content>;
};

// Ideally, we'd have a <UIShell> component that could help make using these
// components much simpler. In the interim, we're going to create presentational
// components and try and piece them together to figure out what are standard
// usage patterns for each to see what kind of component API we should expose
storiesOf('[Experimental] UI Shell', module)
  .add(
    'Header',
    withReadme(readme, () => (
      <Header>
        <HeaderMenuButton
          aria-label="Open menu"
          onClick={action('Menu clicked')}
        />
        <HeaderName href="#" prefix="IBM">
          [Platform]
        </HeaderName>
        <HeaderNavigation aria-label="IBM [Platform]">
          <HeaderMenuItem href="#">Link 1</HeaderMenuItem>
          <HeaderMenuItem href="#">Link 2</HeaderMenuItem>
          <HeaderMenuItem href="#">Link 3</HeaderMenuItem>
          <HeaderMenu aria-label="Link 4">
            <HeaderMenuItem href="#">Sub-link 1</HeaderMenuItem>
            <HeaderMenuItem href="#">Sub-link 2</HeaderMenuItem>
            <HeaderMenuItem href="#">Sub-link 3</HeaderMenuItem>
          </HeaderMenu>
        </HeaderNavigation>
        <HeaderGlobalBar>
          <HeaderGlobalAction
            aria-label="Search"
            onClick={action('search click')}>
            <Search20 />
          </HeaderGlobalAction>
          <HeaderGlobalAction
            aria-label="Notifications"
            onClick={action('notification click')}>
            <Notification20 />
          </HeaderGlobalAction>
          <HeaderGlobalAction
            aria-label="App Switcher"
            onClick={action('app-switcher click')}>
            <AppSwitcher20 />
          </HeaderGlobalAction>
        </HeaderGlobalBar>
      </Header>
    )),
    {
      info: {
        text: '[Experimental] UI Shell',
      },
    }
  )
  .add(
    'Header Base',
    withReadme(readme, () => (
      <Header aria-label="IBM Platform Name">
        <HeaderName href="#" prefix="IBM">
          [Platform]
        </HeaderName>
      </Header>
    ))
  )
  .add(
    'Header Base w/ Menu',
    withReadme(readme, () => (
      <Header aria-label="IBM Platform Name">
        <HeaderMenuButton
          aria-label="Open menu"
          onClick={action('Menu clicked')}
        />
        <HeaderName href="#" prefix="IBM">
          [Platform]
        </HeaderName>
      </Header>
    ))
  )
  .add(
    'Header Base w/ Navigation',
    withReadme(readme, () => (
      <Header aria-label="IBM Platform Name">
        <HeaderName href="#" prefix="IBM">
          [Platform]
        </HeaderName>
        <HeaderNavigation aria-label="IBM [Platform]">
          <HeaderMenuItem href="#">Link 1</HeaderMenuItem>
          <HeaderMenuItem href="#">Link 2</HeaderMenuItem>
          <HeaderMenuItem href="#">Link 3</HeaderMenuItem>
          <HeaderMenu aria-label="Link 4">
            <HeaderMenuItem href="#">Sub-link 1</HeaderMenuItem>
            <HeaderMenuItem href="#">Sub-link 2</HeaderMenuItem>
            <HeaderMenuItem href="#">Sub-link 3</HeaderMenuItem>
          </HeaderMenu>
        </HeaderNavigation>
      </Header>
    ))
  )
  .add(
    'Header Base w/ Actions',
    withReadme(readme, () => (
      <Header aria-label="IBM Platform Name">
        <HeaderName href="#" prefix="IBM">
          [Platform]
        </HeaderName>
        <HeaderGlobalBar>
          <HeaderGlobalAction
            aria-label="Search"
            onClick={action('search click')}>
            <Search20 />
          </HeaderGlobalAction>
          <HeaderGlobalAction
            aria-label="Notifications"
            onClick={action('notification click')}>
            <Notification20 />
          </HeaderGlobalAction>
          <HeaderGlobalAction
            aria-label="App Switcher"
            onClick={action('app-switcher click')}>
            <AppSwitcher20 />
          </HeaderGlobalAction>
        </HeaderGlobalBar>
      </Header>
    ))
  )
  .add(
    'Header Base w/ Actions and Right Panel',
    withReadme(readme, () => (
      <Header aria-label="IBM Platform Name">
        <HeaderName href="#" prefix="IBM">
          [Platform]
        </HeaderName>
        <HeaderGlobalBar>
          <HeaderGlobalAction
            aria-label="Search"
            onClick={action('search click')}>
            <Search20 />
          </HeaderGlobalAction>
          <HeaderGlobalAction
            aria-label="Notifications"
            isActive
            onClick={action('notification click')}>
            <Notification20 />
          </HeaderGlobalAction>
          <HeaderGlobalAction
            aria-label="App Switcher"
            onClick={action('app-switcher click')}>
            <AppSwitcher20 />
          </HeaderGlobalAction>
        </HeaderGlobalBar>
        <HeaderPanel expanded />
      </Header>
    ))
  )
  .add(
    'Header Base w/ Actions and Switcher',
    withReadme(readme, () => (
      <Header aria-label="IBM Platform Name">
        <HeaderName href="#" prefix="IBM">
          [Platform]
        </HeaderName>
        <HeaderGlobalBar>
          <HeaderGlobalAction
            aria-label="Search"
            onClick={action('search click')}>
            <Search20 />
          </HeaderGlobalAction>
          <HeaderGlobalAction
            aria-label="Notifications"
            onClick={action('notification click')}>
            <Notification20 />
          </HeaderGlobalAction>
          <HeaderGlobalAction
            aria-label="App Switcher"
            isActive
            onClick={action('app-switcher click')}>
            <AppSwitcher20 />
          </HeaderGlobalAction>
        </HeaderGlobalBar>
        <HeaderPanel expanded>
          <Switcher>
            <SwitcherItem>
              <SwitcherItemLink isSelected href="javascript:void(0)">
                Link
              </SwitcherItemLink>
            </SwitcherItem>
            <SwitcherItem>
              <SwitcherItemLink href="javascript:void(0)">
                Link
              </SwitcherItemLink>
            </SwitcherItem>
            <SwitcherItem>
              <SwitcherItemLink href="javascript:void(0)">
                Link
              </SwitcherItemLink>
            </SwitcherItem>
            <SwitcherItem>
              <SwitcherItemLink href="javascript:void(0)">
                Link
              </SwitcherItemLink>
            </SwitcherItem>
            <SwitcherItem>
              <SwitcherItemLink href="javascript:void(0)">
                Link
              </SwitcherItemLink>
            </SwitcherItem>
            <SwitcherItem>
              <SwitcherItemLink href="javascript:void(0)">
                Link
              </SwitcherItemLink>
            </SwitcherItem>
          </Switcher>
        </HeaderPanel>
      </Header>
    ))
  )
  .add(
    'Header Base w/ Navigation and Actions',
    withReadme(readme, () => (
      <Header aria-label="IBM Platform Name">
        <HeaderName href="#" prefix="IBM">
          [Platform]
        </HeaderName>
        <HeaderNavigation aria-label="IBM [Platform]">
          <HeaderMenuItem href="#">Link 1</HeaderMenuItem>
          <HeaderMenuItem href="#">Link 2</HeaderMenuItem>
          <HeaderMenuItem href="#">Link 3</HeaderMenuItem>
          <HeaderMenu aria-label="Link 4">
            <HeaderMenuItem href="#">Sub-link 1</HeaderMenuItem>
            <HeaderMenuItem href="#">Sub-link 2</HeaderMenuItem>
            <HeaderMenuItem href="#">Sub-link 3</HeaderMenuItem>
          </HeaderMenu>
        </HeaderNavigation>
        <HeaderGlobalBar>
          <HeaderGlobalAction
            aria-label="Search"
            onClick={action('search click')}>
            <Search20 />
          </HeaderGlobalAction>
          <HeaderGlobalAction
            aria-label="Notifications"
            onClick={action('notification click')}>
            <Notification20 />
          </HeaderGlobalAction>
          <HeaderGlobalAction
            aria-label="App Switcher"
            onClick={action('app-switcher click')}>
            <AppSwitcher20 />
          </HeaderGlobalAction>
        </HeaderGlobalBar>
      </Header>
    ))
  )
  .add(
    'Fixed SideNav',
    withReadme(readme, () => (
      <>
        <SideNav isFixedNav expanded={true} aria-label="Side navigation">
          <SideNavItems>
            <SideNavMenu title="L0 menu">
              <SideNavMenuItem href="javascript:void(0)">
                L0 menu item
              </SideNavMenuItem>
              <SideNavMenuItem aria-current="page" href="javascript:void(0)">
                L0 menu item
              </SideNavMenuItem>
              <SideNavMenuItem href="javascript:void(0)">
                L0 menu item
              </SideNavMenuItem>
            </SideNavMenu>
            <SideNavMenu title="L0 menu">
              <SideNavMenuItem href="javascript:void(0)">
                L0 menu item
              </SideNavMenuItem>
              <SideNavMenuItem aria-current="page" href="javascript:void(0)">
                L0 menu item
              </SideNavMenuItem>
              <SideNavMenuItem href="javascript:void(0)">
                L0 menu item
              </SideNavMenuItem>
            </SideNavMenu>
            <SideNavMenu title="L0 menu">
              <SideNavMenuItem href="javascript:void(0)">
                L0 menu item
              </SideNavMenuItem>
              <SideNavMenuItem aria-current="page" href="javascript:void(0)">
                L0 menu item
              </SideNavMenuItem>
              <SideNavMenuItem href="javascript:void(0)">
                L0 menu item
              </SideNavMenuItem>
            </SideNavMenu>
            <SideNavLink href="javascript:void(0)">L0 link</SideNavLink>
            <SideNavLink href="javascript:void(0)">L0 link</SideNavLink>
          </SideNavItems>
        </SideNav>
        <StoryContent />
      </>
    ))
  )
  .add(
    'Fixed SideNav w/ Icons',
    withReadme(readme, () => (
      <>
        <SideNav isFixedNav expanded={true} aria-label="Side navigation">
          <SideNavItems>
            <SideNavMenu renderIcon={Fade16} title="Category title">
              <SideNavMenuItem href="javascript:void(0)">Link</SideNavMenuItem>
              <SideNavMenuItem aria-current="page" href="javascript:void(0)">
                Link
              </SideNavMenuItem>
              <SideNavMenuItem href="javascript:void(0)">Link</SideNavMenuItem>
            </SideNavMenu>
            <SideNavMenu renderIcon={Fade16} title="Category title">
              <SideNavMenuItem href="javascript:void(0)">Link</SideNavMenuItem>
              <SideNavMenuItem aria-current="page" href="javascript:void(0)">
                Link
              </SideNavMenuItem>
              <SideNavMenuItem href="javascript:void(0)">Link</SideNavMenuItem>
            </SideNavMenu>
            <SideNavMenu renderIcon={Fade16} title="Category title">
              <SideNavMenuItem href="javascript:void(0)">Link</SideNavMenuItem>
              <SideNavMenuItem aria-current="page" href="javascript:void(0)">
                Link
              </SideNavMenuItem>
              <SideNavMenuItem href="javascript:void(0)">Link</SideNavMenuItem>
            </SideNavMenu>
            <SideNavLink renderIcon={Fade16} href="javascript:void(0)">
              Link
            </SideNavLink>
            <SideNavLink renderIcon={Fade16} href="javascript:void(0)">
              Link
            </SideNavLink>
          </SideNavItems>
        </SideNav>
        <StoryContent />
      </>
    ))
  )
  .add(
    'SideNav w/ Header',
    withReadme(readme, () => (
      <HeaderContainer
        render={({ isSideNavExpanded, onClickSideNavExpand }) => (
          <>
            <Header aria-label="IBM Platform Name">
              <SkipToContent />
              <HeaderMenuButton
                aria-label="Open menu"
                onClick={onClickSideNavExpand}
                isActive={isSideNavExpanded}
              />
              <HeaderName href="#" prefix="IBM">
                [Platform]
              </HeaderName>
              <HeaderNavigation aria-label="IBM [Platform]">
                <HeaderMenuItem href="#">Link 1</HeaderMenuItem>
                <HeaderMenuItem href="#">Link 2</HeaderMenuItem>
                <HeaderMenuItem href="#">Link 3</HeaderMenuItem>
                <HeaderMenu aria-label="Link 4">
                  <HeaderMenuItem href="#">Sub-link 1</HeaderMenuItem>
                  <HeaderMenuItem href="#">Sub-link 2</HeaderMenuItem>
                  <HeaderMenuItem href="#">Sub-link 3</HeaderMenuItem>
                </HeaderMenu>
              </HeaderNavigation>
              <HeaderGlobalBar>
                <HeaderGlobalAction
                  aria-label="Search"
                  onClick={action('search click')}>
                  <Search20 />
                </HeaderGlobalAction>
                <HeaderGlobalAction
                  aria-label="Notifications"
                  onClick={action('notification click')}>
                  <Notification20 />
                </HeaderGlobalAction>
                <HeaderGlobalAction
                  aria-label="App Switcher"
                  onClick={action('app-switcher click')}>
                  <AppSwitcher20 />
                </HeaderGlobalAction>
              </HeaderGlobalBar>
              <SideNav
                aria-label="Side navigation"
                expanded={isSideNavExpanded}>
                <SideNavItems>
                  <SideNavMenu renderIcon={Fade16} title="Category title">
                    <SideNavMenuItem href="javascript:void(0)">
                      Link
                    </SideNavMenuItem>
                    <SideNavMenuItem
                      aria-current="page"
                      href="javascript:void(0)">
                      Link
                    </SideNavMenuItem>
                    <SideNavMenuItem href="javascript:void(0)">
                      Link
                    </SideNavMenuItem>
                  </SideNavMenu>
                  <SideNavMenu renderIcon={Fade16} title="Category title">
                    <SideNavMenuItem href="javascript:void(0)">
                      Link
                    </SideNavMenuItem>
                    <SideNavMenuItem
                      aria-current="page"
                      href="javascript:void(0)">
                      Link
                    </SideNavMenuItem>
                    <SideNavMenuItem href="javascript:void(0)">
                      Link
                    </SideNavMenuItem>
                  </SideNavMenu>
                  <SideNavMenu renderIcon={Fade16} title="Category title">
                    <SideNavMenuItem href="javascript:void(0)">
                      Link
                    </SideNavMenuItem>
                    <SideNavMenuItem
                      aria-current="page"
                      href="javascript:void(0)">
                      Link
                    </SideNavMenuItem>
                    <SideNavMenuItem href="javascript:void(0)">
                      Link
                    </SideNavMenuItem>
                  </SideNavMenu>
                  <SideNavLink renderIcon={Fade16} href="javascript:void(0)">
                    Link
                  </SideNavLink>
                  <SideNavLink renderIcon={Fade16} href="javascript:void(0)">
                    Link
                  </SideNavLink>
                </SideNavItems>
              </SideNav>
            </Header>
            <StoryContent />
          </>
        )}
      />
    ))
  );
