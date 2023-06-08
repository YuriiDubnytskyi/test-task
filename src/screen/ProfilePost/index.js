import React from 'react';
import {Image, StyleSheet, View} from 'react-native';

const ProfilePost = () => {
  return (
    <View>
      <View style={styles.container}>
        <Image
          source={require('../../storage/random/image13.jpeg')}
          style={styles.image}
        />
        <Image
          source={require('../../storage/random/image14.jpeg')}
          style={styles.image}
        />
        <Image
          source={require('../../storage/random/image15.jpeg')}
          style={styles.image}
        />
      </View>
      <View style={styles.container}>
        <Image
          source={require('../../storage/random/image1.jpeg')}
          style={styles.image}
        />
        <Image
          source={require('../../storage/random/image2.jpg')}
          style={styles.image}
        />
        <Image
          source={require('../../storage/random/image3.jpg')}
          style={styles.image}
        />
      </View>
      <View style={styles.container}>
        <Image
          source={require('../../storage/random/image4.jpg')}
          style={styles.image}
        />
        <Image
          source={require('../../storage/random/image5.jpg')}
          style={styles.image}
        />
        <Image
          source={require('../../storage/random/image6.jpg')}
          style={styles.image}
        />
      </View>
      <View style={styles.container}>
        <Image
          source={require('../../storage/random/image8.jpg')}
          style={styles.image}
        />
        <Image
          source={require('../../storage/random/image9.jpg')}
          style={styles.image}
        />
        <Image
          source={require('../../storage/random/image10.jpg')}
          style={styles.image}
        />
      </View>
      <View style={styles.container}>
        <Image
          source={require('../../storage/random/image7.jpg')}
          style={styles.image}
        />
        <Image
          source={require('../../storage/random/image11.jpg')}
          style={styles.image}
        />
        <Image
          source={require('../../storage/random/image12.jpg')}
          style={styles.image}
        />
      </View>
      <View style={styles.container}>
        <Image
          source={require('../../storage/random/image13.jpeg')}
          style={styles.image}
        />
        <Image
          source={require('../../storage/random/image14.jpeg')}
          style={styles.image}
        />
        <Image
          source={require('../../storage/random/image15.jpeg')}
          style={styles.image}
        />
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flexDirection: 'row',
  },
  image: {
    height: 135,
    width: '33.3%',
  },
});

export default ProfilePost;
