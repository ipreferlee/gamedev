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
    backgroundColor: 'black',
  },
  content: {
    padding: 20,
  },
  heading: {
    fontSize: 28,
    fontWeight: 'bold',
    color: 'white',
    marginBottom: 30,
  },
  hobbyItem: {
    flexDirection: 'row',
    alignItems: 'center',
    marginBottom: 25,
    backgroundColor: '#192734',
    padding: 15,
    borderRadius: 10,
  },
  iconContainer: {
    width: 50,
    height: 50,
    backgroundColor: '#253341',
    borderRadius: 25,
    justifyContent: 'center',
    alignItems: 'center',
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
  },
  hobbyDescription: {
    fontSize: 14,
    color: '#8899A6',
    lineHeight: 20,
  },
});
