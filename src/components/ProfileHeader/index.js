import React from 'react';
import {Image, StyleSheet, Text, View} from 'react-native';
import Carousel from 'react-native-snap-carousel';
const ProfileHeader = () => {
  const renderItem = ({item}) => {
    return <Image source={item} style={styles.image} />;
  };

  return (
    <View style={styles.container}>
      <View>
        <Carousel
          data={[
            require('../../storage/images/profil1.jpg'),
            require('../../storage/images/profil2.jpg'),
            require('../../storage/images/profil3.jpg'),
          ]}
          renderItem={renderItem}
          sliderWidth={140}
          itemWidth={100}
          layout={'stack'}
        />
      </View>

      <View style={styles.numbers}>
        <View style={styles.left}>
          <Text style={styles.numberContainer}>2</Text>
          <Text style={styles.text}>Posts</Text>
        </View>
        <View>
          <Text style={styles.numberContainer}>404</Text>
          <Text style={styles.text}>Followers</Text>
        </View>
        <View>
          <Text style={styles.numberContainer}>387</Text>
          <Text style={styles.text}>Following</Text>
        </View>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    marginTop: 20,
    marginHorizontal: 10,
  },
  image: {
    height: 80,
    width: 80,
    borderRadius: 100,
    marginLeft: 10,
    marginBottom: 10,
  },
  numbers: {
    flexDirection: 'row',
    justifyContent: 'space-around',
    width: '60%',
    alignItems: 'center',
    marginHorizontal: 5,
  },
  numberContainer: {
    color: 'black',
    fontWeight: 'bold',
    alignSelf: 'center',
    fontSize: 18,
    marginBottom: 5,
  },
  text: {
    color: 'black',
    fontSize: 16,
    alignSelf: 'center',
  },
});
export default ProfileHeader;
