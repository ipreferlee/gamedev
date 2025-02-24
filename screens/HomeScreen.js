import React from 'react';
import { View, Text, StyleSheet, Image } from 'react-native';
import ProfileImg from '../assets/profile-img.jpg';  // Ensure this path is correct

export default function HomeScreen() {
  return (
    <View style={styles.container}>
      <Image
        source={ProfileImg}
        style={styles.profileImage}
      />
      <Text style={styles.name}>Ochoada, Lee Richard</Text>
      <Text style={styles.title}>Driving Enthusiast</Text>
      <Text style={styles.bio}>
        Sometimes I drive to clear my head and other times I drive to explore new places. I'm always up for a road trip!
      </Text>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: 'black',
    alignItems: 'center',
    padding: 20,
  },
  profileImage: {
    width: 150,
    height: 150,
    borderRadius: 75,
    marginTop: 50,
  },
  name: {
    fontSize: 24,
    fontWeight: 'bold',
    color: 'white',
    marginTop: 20,
  },
  title: {
    fontSize: 18,
    color: '#1DA1F2',
    marginTop: 10,
  },
  bio: {
    fontSize: 16,
    color: '#8899A6',
    textAlign: 'center',
    marginTop: 20,
    lineHeight: 24,
  },
});
