import React from 'react';
import {ScrollView} from 'react-native';

import Bio from '../../components/Bio';
import Container from '../../components/Container';
import ProfileBar from '../../components/ProfileBar';
import ProfileHeader from '../../components/ProfileHeader';

const Account = () => {
  const mockData = {
    name: 'Yurii Dubnytskyi',
    profession: 'Programmer',
    position: 'Middle React/React-Native Developer',
  };

  return (
    <Container>
      <ScrollView>
        <ProfileBar name={mockData.name} />
        <ProfileHeader />
        <Bio
          name={mockData.name}
          profession={mockData.profession}
          position={mockData.position}
        />
      </ScrollView>
    </Container>
  );
};
export default Account;
