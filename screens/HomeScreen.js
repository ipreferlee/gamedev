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
    backgroundColor: '#000',
    alignItems: 'center',
    padding: 20,
  },
  profileCard: {
    backgroundColor: '#111', // Slightly lighter black for depth
    borderRadius: 15,
    padding: 20,
    alignItems: 'center',
    shadowColor: '#1DA1F2',
    shadowOffset: { width: 0, height: 4 },
    shadowOpacity: 0.3,
    shadowRadius: 6,
    elevation: 5,
    marginTop: 40,
    width: '90%',
  },
  profileImage: {
    width: 140,
    height: 140,
    borderRadius: 70,
    borderWidth: 3,
    borderColor: '#1DA1F2',
  },
  name: {
    fontSize: 24,
    fontWeight: 'bold',
    color: 'white',
    marginTop: 15,
    letterSpacing: 0.8,
  },
  title: {
    fontSize: 16,
    color: '#1DA1F2',
    marginTop: 5,
    fontWeight: '600',
    textTransform: 'uppercase',
  },
  bio: {
    fontSize: 14,
    color: '#8899A6',
    textAlign: 'center',
    marginTop: 15,
    lineHeight: 22,
    paddingHorizontal: 10,
  },
  divider: {
    height: 1,
    backgroundColor: '#1DA1F2',
    marginVertical: 15,
    opacity: 0.5,
    width: '80%',
  },
  socialIcons: {
    flexDirection: 'row',
    marginTop: 15,
    gap: 20,
  },
  icon: {
    fontSize: 24,
    color: '#1DA1F2',
  },
  button: {
    marginTop: 20,
    backgroundColor: '#1DA1F2',
    paddingVertical: 10,
    paddingHorizontal: 20,
    borderRadius: 25,
    alignItems: 'center',
    justifyContent: 'center',
    width: 150,
  },
  buttonText: {
    color: 'white',
    fontSize: 16,
    fontWeight: '600',
    textTransform: 'uppercase',
  },
  statsContainer: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    width: '80%',
    marginTop: 20,
  },
  statsBox: {
    alignItems: 'center',
  },
  statsNumber: {
    color: 'white',
    fontSize: 18,
    fontWeight: 'bold',
  },
  statsLabel: {
    color: '#8899A6',
    fontSize: 14,
  },
});

