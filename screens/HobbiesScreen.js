import React from 'react';
import { View, Text, StyleSheet, ScrollView } from 'react-native';
import { Ionicons } from '@expo/vector-icons';

export default function HobbiesScreen() {
  const hobbies = [
    { name: 'Photography', icon: 'camera', description: 'Capturing moments and exploring visual storytelling' },
    { name: 'Gaming', icon: 'game-controller', description: 'Strategy and RPG games enthusiast' },
    { name: 'Driving', icon: 'car', description: 'Exploring the open road and learning to drive' }, // Fixed icon', description: 'Science fiction and technical books' },
    { name: 'Sports', icon: 'basketball', description: 'Exploring different sports and staying active' }, // Fixed icon
    { name: 'Cooking', icon: 'restaurant', description: 'Experimenting with international cuisines' },
  ];

  return (
    <ScrollView style={styles.container}>
      <View style={styles.content}>
        <Text style={styles.heading}>Hobbies & Interests</Text>
        
        {hobbies.map((hobby, index) => (
          <View key={index} style={styles.hobbyItem}>
            <View style={styles.iconContainer}>
              <Ionicons name={hobby.icon} size={24} color="#1DA1F2" />
            </View>
            <View style={styles.hobbyDetails}>
              <Text style={styles.hobbyName}>{hobby.name}</Text>
              <Text style={styles.hobbyDescription}>{hobby.description}</Text>
            </View>
          </View>
        ))}
      </View>
    </ScrollView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#000',
    paddingHorizontal: 20,
    paddingTop: 50,
  },
  content: {
    paddingVertical: 20,
  },
  heading: {
    fontSize: 28,
    fontWeight: 'bold',
    color: 'white',
    marginBottom: 30,
    textAlign: 'center',
    letterSpacing: 1.2,
  },
  hobbyItem: {
    flexDirection: 'row',
    alignItems: 'center',
    marginBottom: 20,
    backgroundColor: '#192734',
    padding: 15,
    borderRadius: 12,
    shadowColor: '#1DA1F2',
    shadowOffset: { width: 0, height: 4 },
    shadowOpacity: 0.3,
    shadowRadius: 6,
    elevation: 5,
  },
  iconContainer: {
    width: 60,
    height: 60,
    backgroundColor: '#253341',
    borderRadius: 30,
    justifyContent: 'center',
    alignItems: 'center',
    shadowColor: '#1DA1F2',
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.3,
    shadowRadius: 4,
    elevation: 3,
  },
  hobbyDetails: {
    marginLeft: 15,
    flex: 1,
  },
  hobbyName: {
    fontSize: 18,
    fontWeight: 'bold',
    color: 'white',
    marginBottom: 5,
    textTransform: 'capitalize',
    letterSpacing: 0.5,
  },
  hobbyDescription: {
    fontSize: 14,
    color: '#8899A6',
    lineHeight: 22,
  },
  divider: {
    height: 1,
    backgroundColor: '#1DA1F2',
    marginVertical: 20,
    opacity: 0.4,
    width: '80%',
    alignSelf: 'center',
  },
  button: {
    marginTop: 30,
    backgroundColor: '#1DA1F2',
    paddingVertical: 12,
    borderRadius: 25,
    alignItems: 'center',
    justifyContent: 'center',
    width: '100%',
  },
  buttonText: {
    color: 'white',
    fontSize: 16,
    fontWeight: '600',
    textTransform: 'uppercase',
  },
});
