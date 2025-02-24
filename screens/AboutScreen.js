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
    backgroundColor: 'black',
  },
  content: {
    padding: 20,
  },
  heading: {
    fontSize: 28,
    fontWeight: 'bold',
    color: 'white',
    marginBottom: 20,
  },
  subheading: {
    fontSize: 22,
    fontWeight: 'bold',
    color: '#1DA1F2',
    marginTop: 20,
    marginBottom: 10,
  },
  text: {
    fontSize: 16,
    color: '#8899A6',
    lineHeight: 24,
    marginBottom: 15,
  },
});