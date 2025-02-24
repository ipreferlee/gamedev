import React from 'react';
import { View, Text, StyleSheet, ScrollView } from 'react-native';
import { Ionicons } from '@expo/vector-icons';

export default function EducationScreen() {
  return (
    <ScrollView style={styles.container}>
      <View style={styles.content}>
        <Text style={styles.heading}>Education</Text>
        
        <View style={styles.educationItem}>
          <Ionicons name="school" size={24} color="#1DA1F2" />
          <View style={styles.eduDetails}>
            <Text style={styles.degree}>Bachelor of Science in Computer Science</Text>
            <Text style={styles.school}>Naga College Foundation</Text>
            <Text style={styles.year}>2024 - 2025</Text>
          </View>
        </View>

        <View style={styles.educationItem}>
          <Ionicons name="school" size={24} color="#1DA1F2" />
          <View style={styles.eduDetails}>
            <Text style={styles.degree}>Senior High School</Text>
            <Text style={styles.school}>Systems Plus College Foundation</Text>
            <Text style={styles.year}>2016 - 2018</Text>
          </View>
        </View>

        <View style={styles.educationItem}>
          <Ionicons name="school" size={24} color="#1DA1F2" />
          <View style={styles.eduDetails}>
            <Text style={styles.degree}> High School</Text>
            <Text style={styles.school}>Angeles City National High School</Text>
            <Text style={styles.year}>2011 - 2015</Text>
          </View>
        </View>
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
  educationItem: {
    flexDirection: 'row',
    alignItems: 'flex-start',
    marginBottom: 30,
  },
  eduDetails: {
    marginLeft: 15,
  },
  degree: {
    fontSize: 18,
    fontWeight: 'bold',
    color: 'white',
  },
  school: {
    fontSize: 16,
    color: '#1DA1F2',
    marginTop: 5,
  },
  year: {
    fontSize: 14,
    color: '#8899A6',
    marginTop: 5,
  },
  subheading: {
    fontSize: 22,
    fontWeight: 'bold',
    color: 'white',
    marginTop: 20,
    marginBottom: 20,
  },
  certificationItem: {
    flexDirection: 'row',
    alignItems: 'center',
    marginBottom: 15,
  },
  certification: {
    fontSize: 16,
    color: '#8899A6',
    marginLeft: 15,
  },
});