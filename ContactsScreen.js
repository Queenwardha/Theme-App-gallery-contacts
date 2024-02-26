// ContactsScreen.js
import React, { useState, useContext } from 'react';
import { View, Text, TextInput, Button, FlatList, StyleSheet } from 'react-native';
import { ThemeContext } from './ThemeContext'; // Import ThemeContext

const ContactsScreen = () => {
  const [name, setName] = useState('');
  const [phoneNumber, setPhoneNumber] = useState('');
  const [contacts, setContacts] = useState([]);
  const { darkMode } = useContext(ThemeContext); // Use darkMode context

  const handleSaveContact = () => {
    // Perform validation on input fields
    if (name.trim() === '' || phoneNumber.trim() === '') {
      return;
    }

    // Save the contact
    const newContact = { name, phoneNumber };
    setContacts([...contacts, newContact]);

    // Clear input fields after saving
    setName('');
    setPhoneNumber('');
  };

  const renderContactItem = ({ item }) => {
    return (
      <View style={[styles.contactItem, darkMode && styles.darkContactItem]}>
        <Text style={darkMode && styles.darkText}>{item.name}</Text>
        <Text style={darkMode && styles.darkText}>{item.phoneNumber}</Text>
      </View>
    );
  };

  return (
    <View style={[styles.container, darkMode && styles.darkContainer]}>
      <View style={styles.formContainer}>
        <Text style={[styles.label, darkMode && styles.darkText]}>Name:</Text>
        <TextInput
          style={[styles.input, darkMode && styles.darkInput]}
          value={name}
          onChangeText={setName}
          placeholder="Enter name"
          placeholderTextColor={darkMode ? '#aaa' : '#888'}
        />
        <Text style={[styles.label, darkMode && styles.darkText]}>Phone Number:</Text>
        <TextInput
          style={[styles.input, darkMode && styles.darkInput]}
          value={phoneNumber}
          onChangeText={setPhoneNumber}
          placeholder="Enter phone number"
          keyboardType="phone-pad"
          placeholderTextColor={darkMode ? '#aaa' : '#888'}
        />
        <Button title="Save Contact" onPress={handleSaveContact} />
      </View>
      <View style={styles.contactsContainer}>
        <Text style={[styles.title, darkMode && styles.darkText]}>Saved Contacts</Text>
        {contacts.length > 0 ? (
          <FlatList
            data={contacts}
            renderItem={renderContactItem}
            keyExtractor={(item, index) => index.toString()}
          />
        ) : (
          <Text style={darkMode && styles.darkText}>No contacts saved yet.</Text>
        )}
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 20,
    backgroundColor: '#fff',
  },
  darkContainer: {
    backgroundColor: '#333',
  },
  formContainer: {
    marginBottom: 20,
  },
  contactsContainer: {
    flex: 1,
  },
  title: {
    fontSize: 24,
    fontWeight: 'bold',
    marginBottom: 20,
    color: '#000',
  },
  label: {
    fontSize: 16,
    marginBottom: 5,
    color: '#000',
  },
  input: {
    height: 40,
    borderWidth: 1,
    borderColor: '#ccc',
    borderRadius: 5,
    paddingHorizontal: 10,
    marginBottom: 20,
    color: '#000',
    backgroundColor: '#fff',
  },
  darkInput: {
    color: '#fff',
    backgroundColor: '#444',
    borderColor: '#888',
  },
  contactItem: {
    padding: 10,
    borderWidth: 1,
    borderColor: '#ccc',
    borderRadius: 5,
    marginBottom: 10,
    backgroundColor: '#fff',
  },
  darkContactItem: {
    backgroundColor: '#444',
    borderColor: '#888',
  },
  darkText: {
    color: '#fff',
  },
});

export default ContactsScreen;
