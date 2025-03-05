import React from 'react';
import { View, Text, StyleSheet, Image, TouchableOpacity, Alert } from 'react-native';
import AsyncStorage from '@react-native-async-storage/async-storage';
import { StackActions } from '@react-navigation/native';
import ProfileImg from '../assets/profile-img.jpg';  // Ensure this path is correct

export default function HomeScreen({ navigation }) {
  const handleLogout = async () => {
    try {
      await AsyncStorage.removeItem('token'); // Remove the authentication token
      Alert.alert('Logged Out', 'You have been logged out successfully.');
      navigation.dispatch(StackActions.replace('Login')); // Navigate back to Login
    } catch (error) {
      console.error('Error logging out:', error);
    }
  };

  return (
    <View style={styles.container}>
      <Image source={ProfileImg} style={styles.profileImage} />
      <Text style={styles.name}>Ochoada, Lee Richard</Text>
      <Text style={styles.title}>Driving Enthusiast</Text>
      <Text style={styles.bio}>
        Sometimes I drive to clear my head and other times I drive to explore new places. I'm always up for a road trip!
      </Text>

      {/* Logout Button */}
      <TouchableOpacity style={styles.button} onPress={handleLogout}>
        <Text style={styles.buttonText}>Logout</Text>
      </TouchableOpacity>
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
  profileImage: {
    width: 140,
    height: 140,
    borderRadius: 70,
    borderWidth: 3,
    borderColor: '#1DA1F2',
    marginBottom: 15,
  },
  name: {
    fontSize: 24,
    fontWeight: 'bold',
    color: 'white',
    letterSpacing: 0.8,
  },
  title: {
    fontSize: 16,
    color: '#1DA1F2',
    fontWeight: '600',
    textTransform: 'uppercase',
    marginTop: 5,
  },
  bio: {
    fontSize: 14,
    color: '#8899A6',
    textAlign: 'center',
    lineHeight: 22,
    paddingHorizontal: 10,
    marginTop: 15,
  },
  button: {
    marginTop: 30,
    backgroundColor: '#1DA1F2',
    paddingVertical: 12,
    paddingHorizontal: 30,
    borderRadius: 25,
    alignItems: 'center',
    justifyContent: 'center',
  },
  buttonText: {
    color: 'white',
    fontSize: 16,
    fontWeight: '600',
    textTransform: 'uppercase',
  },
});