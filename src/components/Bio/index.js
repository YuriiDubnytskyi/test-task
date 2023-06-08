import React from 'react';
import {SafeAreaView, StyleSheet, Text, View} from 'react-native';

const Bio = ({name, profession, position}) => {
  return (
    <SafeAreaView>
      <View style={styles.bioContainer}>
        <Text style={styles.userName}>{name}</Text>
        <Text style={styles.profession}>{profession}</Text>
        <Text style={styles.position}>{position}</Text>
      </View>

      <View
        style={{
          marginTop: 10,
          flexDirection: 'row',
          justifyContent: 'space-around',
        }}>
        <View style={styles.button}>
          <Text style={styles.text}>Plan mode</Text>
        </View>
        <View style={styles.button}>
          <Text style={styles.text}>Drafts</Text>
        </View>
        <View style={styles.button}>
          <Text style={styles.text}>Hide Icons</Text>
        </View>
      </View>
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({
  userName: {
    color: 'black',
    fontWeight: 'bold',
    marginTop: 3,
    fontSize: 14,
  },
  position: {
    color: 'black',
    fontSize: 12,
    fontWeight: 500,
  },
  profession: {
    color: 'grey',
    fontSize: 12,
    fontWeight: 700,
    marginTop: 5,
  },
  bioContainer: {
    marginVertical: 5,
    marginHorizontal: 15,
  },
  button: {
    height: 35,
    borderRadius: 10,
    backgroundColor: '#D0D0D0',
    justifyContent: 'center',
    marginVertical: 5,
    marginBottom: 20,
    marginLeft: 15,
    marginRight: 10,
    alignItems: 'center',
    width: '30%',
  },
  text: {
    color: 'black',
    fontWeight: 'bold',
    fontSize: 16,
  },
});

export default Bio;
