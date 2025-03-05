import React from 'react';
import { View, Text, StyleSheet, TouchableOpacity, Linking } from 'react-native';
import { Ionicons } from '@expo/vector-icons';

export default function ContactsScreen() {
  const contacts = [
    { 
      type: 'Email',
      value: 'lrochoada@gbox.ncf.edu.ph',
      icon: 'mail',
      action: () => Linking.openURL('lrochoada@gbox.ncf.edu.ph')
    },
    {
      type: 'Phone',
      value: '+639196416156',
      icon: 'call',
      action: () => Linking.openURL('tel:+639196416156')
    },
    {
      type: 'GitHub',
      value: 'github.com/ipreferlee',
      icon: 'logo-github',
      action: () => Linking.openURL('https://github.com/ipreferlee')
    },
  
  ];

  return (
    <View style={styles.container}>
      <Text style={styles.heading}>Contact Me</Text>
      
      <Text style={styles.subtitle}>
        Feel free to reach out through any of these channels:
      </Text>

      {contacts.map((contact, index) => (
        <TouchableOpacity
          key={index}
          style={styles.contactItem}
          onPress={contact.action}
        >
          <View style={styles.iconContainer}>
            <Ionicons name={contact.icon} size={24} color="#1DA1F2" />
          </View>
          <View style={styles.contactDetails}>
            <Text style={styles.contactType}>{contact.type}</Text>
            <Text style={styles.contactValue}>{contact.value}</Text>
          </View>
          <Ionicons name="chevron-forward" size={24} color="#8899A6" />
        </TouchableOpacity>
      ))}
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#000',
    paddingHorizontal: 20,
    paddingTop: 50,
  },
  heading: {
    fontSize: 28,
    fontWeight: 'bold',
    color: 'white',
    marginBottom: 10,
    textAlign: 'center',
    letterSpacing: 1.2,
  },
  subtitle: {
    fontSize: 16,
    color: '#8899A6',
    marginBottom: 30,
    textAlign: 'center',
  },
  contactItem: {
    flexDirection: 'row',
    alignItems: 'center',
    backgroundColor: '#192734',
    padding: 15,
    borderRadius: 12,
    marginBottom: 15,
    shadowColor: '#1DA1F2',
    shadowOffset: { width: 0, height: 3 },
    shadowOpacity: 0.3,
    shadowRadius: 4,
    elevation: 5,
    borderWidth: 1,
    borderColor: 'rgba(255,255,255,0.1)',
  },
  iconContainer: {
    width: 50,
    height: 50,
    backgroundColor: '#253341',
    borderRadius: 25,
    justifyContent: 'center',
    alignItems: 'center',
    shadowColor: '#1DA1F2',
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.3,
    shadowRadius: 4,
    elevation: 3,
  },
  contactDetails: {
    flex: 1,
    marginLeft: 15,
  },
  contactType: {
    fontSize: 16,
    fontWeight: 'bold',
    color: 'white',
    marginBottom: 3,
    textTransform: 'capitalize',
    letterSpacing: 0.5,
  },
  contactValue: {
    fontSize: 14,
    color: '#1DA1F2',
    marginTop: 2,
  },
  contactButton: {
    paddingHorizontal: 12,
    paddingVertical: 6,
    backgroundColor: '#1DA1F2',
    borderRadius: 8,
  },
  contactButtonText: {
    fontSize: 14,
    color: 'white',
    fontWeight: 'bold',
    textTransform: 'uppercase',
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
