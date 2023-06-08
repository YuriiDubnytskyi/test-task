import React from 'react';
import {MaterialTabBar, Tabs} from 'react-native-collapsible-tab-view';
import {Ionicons} from '@expo/vector-icons';

import Account from '../screen/Account';
import ProfilePost from '../screen/ProfilePost';

const tabBar = props => (
  <MaterialTabBar {...props} indicatorStyle={{backgroundColor: 'black'}} />
);

const AccountNavigation = () => {
  return (
    <Tabs.Container renderHeader={Account} renderTabBar={tabBar}>
      <Tabs.Tab
        name="ProfilePosts"
        // eslint-disable-next-line react/no-unstable-nested-components
        label={() => (
          <Ionicons name="md-grid-outline" size={24} color={'black'} />
        )}>
        <Tabs.ScrollView>
          <ProfilePost />
        </Tabs.ScrollView>
      </Tabs.Tab>
      <Tabs.Tab
        name="ProfileReels"
        // eslint-disable-next-line react/no-unstable-nested-components
        label={() => (
          <Ionicons name="md-videocam-outline" size={24} color={'black'} />
        )}>
        <Tabs.ScrollView>
          <ProfilePost />
        </Tabs.ScrollView>
      </Tabs.Tab>
      <Tabs.Tab
        name="Tags"
        // eslint-disable-next-line react/no-unstable-nested-components
        label={() => (
          <Ionicons name="md-logo-ionic" size={24} color={'black'} />
        )}>
        <Tabs.ScrollView>
          <ProfilePost />
        </Tabs.ScrollView>
      </Tabs.Tab>
    </Tabs.Container>
  );
};

export default AccountNavigation;
