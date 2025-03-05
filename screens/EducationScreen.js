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
  section: {
    backgroundColor: '#111',
    borderRadius: 15,
    padding: 20,
    marginBottom: 20,
    shadowColor: '#1DA1F2',
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.3,
    shadowRadius: 4,
    elevation: 5,
  },
  subheading: {
    fontSize: 22,
    fontWeight: 'bold',
    color: 'white',
    marginBottom: 15,
    borderBottomWidth: 2,
    borderBottomColor: '#1DA1F2',
    paddingBottom: 5,
    textTransform: 'uppercase',
  },
  educationItem: {
    flexDirection: 'row',
    alignItems: 'flex-start',
    marginBottom: 20,
  },
  eduIcon: {
    width: 30,
    height: 30,
    tintColor: '#1DA1F2',
  },
  eduDetails: {
    marginLeft: 15,
    flex: 1,
  },
  degree: {
    fontSize: 18,
    fontWeight: 'bold',
    color: 'white',
    marginBottom: 3,
  },
  school: {
    fontSize: 16,
    color: '#1DA1F2',
  },
  year: {
    fontSize: 14,
    color: '#8899A6',
    marginTop: 3,
  },
  divider: {
    height: 1,
    backgroundColor: '#1DA1F2',
    marginVertical: 20,
    opacity: 0.4,
  },
  certificationItem: {
    flexDirection: 'row',
    alignItems: 'center',
    marginBottom: 15,
  },
  certIcon: {
    width: 25,
    height: 25,
    tintColor: '#1DA1F2',
  },
  certification: {
    fontSize: 16,
    color: '#8899A6',
    marginLeft: 15,
    flexShrink: 1,
  },
  button: {
    marginTop: 20,
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
