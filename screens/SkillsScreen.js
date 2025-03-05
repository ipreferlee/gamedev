import React from 'react';
import { View, Text, StyleSheet, ScrollView } from 'react-native';

export default function SkillsScreen() {
  const skills = {
    'Driving': [
      { name: 'Drifting', level: 90 },
      { name: 'Street Racing', level: 85 },
      { name: 'Formula 1', level: 75 },
    ],
    'Sports': [
      { name: 'Basketball', level: 95 },
      { name: 'Badminton', level: 90 },
      { name: 'Volleyball', level: 85 },
    ],
    'Housechores': [
      { name: 'Sleeping', level: 90 },
      { name: 'Cleaning', level: 80 },
      { name: 'Cooking', level: 75 },
    ],
  };

  const SkillBar = ({ name, level }) => (
    <View style={styles.skillBar}>
      <Text style={styles.skillName}>{name}</Text>
      <View style={styles.barContainer}>
        <View style={[styles.bar, { width: `${level}%` }]} />
      </View>
    </View>
  );
  
  

  return (
    <ScrollView style={styles.container}>
      <View style={styles.content}>
        <Text style={styles.heading}>Technical Skills</Text>
        
        {Object.entries(skills).map(([category, skillList]) => (
          <View key={category} style={styles.categoryContainer}>
            <Text style={styles.categoryTitle}>{category}</Text>
            {skillList.map((skill, index) => (
              <SkillBar key={index} name={skill.name} level={skill.level} />
            ))}
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
  categoryContainer: {
    marginBottom: 30,
    backgroundColor: '#111',
    padding: 15,
    borderRadius: 12,
    shadowColor: '#1DA1F2',
    shadowOffset: { width: 0, height: 3 },
    shadowOpacity: 0.3,
    shadowRadius: 4,
    elevation: 5,
  },
  categoryTitle: {
    fontSize: 22,
    fontWeight: 'bold',
    color: '#1DA1F2',
    marginBottom: 15,
    textTransform: 'uppercase',
    letterSpacing: 0.8,
  },
  skillBar: {
    marginBottom: 20,
  },
  skillName: {
    fontSize: 16,
    fontWeight: 'bold',
    color: 'white',
    marginBottom: 8,
    textTransform: 'capitalize',
  },
  barContainer: {
    height: 12,
    backgroundColor: '#253341',
    borderRadius: 6,
    overflow: 'hidden',
    position: 'relative',
  },
  bar: {
    height: '100%',
    backgroundColor: '#1DA1F2',
    borderRadius: 6,
    position: 'absolute',
    left: 0,
    top: 0,
  },
  percentageText: {
    position: 'absolute',
    right: 10,
    top: -25,
    color: '#1DA1F2',
    fontSize: 14,
    fontWeight: 'bold',
  },
  divider: {
    height: 1,
    backgroundColor: '#1DA1F2',
    marginVertical: 25,
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
