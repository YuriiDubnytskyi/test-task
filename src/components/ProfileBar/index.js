import React from 'react';
import {SafeAreaView, StyleSheet, Text, View} from 'react-native';
import {Ionicons} from '@expo/vector-icons';

const ProfileBar = ({name}) => {
  return (
    <SafeAreaView style={styles.body}>
      <View>
        <Text style={styles.header}>MediaApp</Text>
      </View>
      <View>
        <Text style={styles.header}>{name}</Text>
      </View>

      <View style={styles.icons}>
        <Ionicons
          name="calendar"
          size={24}
          color={'black'}
          style={{paddingRight: 10}}
        />
        <Ionicons
          name="sync-circle-outline"
          size={24}
          color="black"
          style={{paddingRight: 10}}
        />
        <Ionicons name="notifications-outline" size={24} color={'black'} />
      </View>
    </SafeAreaView>
  );
};
const styles = StyleSheet.create({
  body: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    marginHorizontal: 10,
    marginVertical: 10,
  },
  icons: {
    flexDirection: 'row',
    justifyContent: 'space-around',
  },
  header: {
    color: 'black',
    fontWeight: 'bold',
    fontSize: 15,
  },
  icon: {
    width: 28,
    height: 28,
  },
});
export default ProfileBar;
