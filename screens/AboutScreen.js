import React from 'react';
import { View, Text, StyleSheet, ScrollView } from 'react-native';

export default function AboutScreen() {
  return (
    <ScrollView style={styles.container}>
      <View style={styles.content}>
        <Text style={styles.heading}>About Me</Text>
        <Text style={styles.text}>
        My name is Lee Richard Ochoada. I am a 3rd-year college student pursuing a Computer Science degree. Born on December 8, 2000, I currently reside in Villa Obiedo, Cararayan, Naga City.
        </Text>
        
        <Text style={styles.subheading}>Work Experience</Text>
        <Text style={styles.text}>
          • IWTI (2020-2023){'\n'}
          • Fillenvest Mimosa Clark{'\n'}
          • Team Leader
        </Text>
        
        <Text style={styles.subheading}>Philosophy</Text>
        <Text style={styles.text}>
        As a dedicated student, I am passionate about learning new technologies and solving complex problems. I look forward to applying my knowledge to real-world projects and furthering my career in technology.
        </Text>
      </View>
    </ScrollView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#000', // Pure black for contrast
    paddingHorizontal: 20,
    paddingTop: 50,
  },
  content: {
    padding: 20,
    backgroundColor: '#111', // Slightly lighter black for depth
    borderRadius: 15,
    shadowColor: '#1DA1F2',
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.3,
    shadowRadius: 4,
    elevation: 5,
  },
  heading: {
    fontSize: 28,
    fontWeight: 'bold',
    color: 'white',
    marginBottom: 20,
    textAlign: 'center',
    letterSpacing: 1.2,
  },
  subheading: {
    fontSize: 22,
    fontWeight: 'bold',
    color: '#1DA1F2',
    marginTop: 20,
    marginBottom: 10,
    textTransform: 'uppercase',
  },
  text: {
    fontSize: 16,
    color: '#8899A6',
    lineHeight: 24,
    marginBottom: 15,
    textAlign: 'justify',
  },
  divider: {
    height: 1,
    backgroundColor: '#1DA1F2',
    marginVertical: 20,
    opacity: 0.5,
  },
  button: {
    marginTop: 20,
    backgroundColor: '#1DA1F2',
    paddingVertical: 12,
    borderRadius: 25,
    alignItems: 'center',
  },
  buttonText: {
    color: 'white',
    fontSize: 16,
    fontWeight: '600',
    textTransform: 'uppercase',
  },
  listItem: {
    flexDirection: 'row',
    alignItems: 'center',
    paddingVertical: 10,
  },
  listBullet: {
    width: 8,
    height: 8,
    borderRadius: 4,
    backgroundColor: '#1DA1F2',
    marginRight: 10,
  },
  listItemText: {
    fontSize: 16,
    color: '#8899A6',
    lineHeight: 22,
  },
  footerText: {
    textAlign: 'center',
    color: '#666',
    marginTop: 30,
    fontSize: 14,
  },
});
