import React, { useContext } from 'react';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import { NavigationContainer } from '@react-navigation/native';
import { Ionicons } from '@expo/vector-icons'; // Import Ionicons from Expo icons
import HomeScreen from './HomeScreen';
import ContactsScreen from './ContactsScreen';
import CalculatorScreen from './CalculatorScreen';
import GalleryScreen from './GalleryScreen';
import AboutScreen from './AboutScreen';
import { ThemeContext } from './ThemeContext'; // Import ThemeContext

const Tab = createBottomTabNavigator();

const Navigation = () => {
  const { darkMode } = useContext(ThemeContext); // Access darkMode state from ThemeContext

  return (
    <NavigationContainer>
      <Tab.Navigator
        screenOptions={({ route }) => ({
          tabBarIcon: ({ focused, color, size }) => {
            let iconName;

            if (route.name === 'Home') {
              iconName = focused ? 'home' : 'home-outline';
            } else if (route.name === 'Calculator') {
              iconName = focused ? 'calculator' : 'calculator-outline';
            } 
            else if (route.name === 'Gallery') { // Add a new condition for the Gallery tab
              iconName = focused ? 'image' : 'image-outline';
            }
            else if (route.name === 'About') {
              iconName = focused ? 'information-circle' : 'information-circle-outline';
            }

            // You can return any component that you like here!
            return <Ionicons name={iconName} size={size} color={color} />;
          },
        })}
        tabBarOptions={{
          activeTintColor: darkMode ? '#ffffff' : '#000000', // Active tab color
          inactiveTintColor: darkMode ? '#999999' : '#666666', // Inactive tab color
          style: {
            backgroundColor: darkMode ? '#333333' : '#f0f0f0', // Background color
          },
        }}
      >
        <Tab.Screen name="Home" component={HomeScreen} />
        <Tab.Screen name="Contacts" component={ContactsScreen} />
        <Tab.Screen name="Calculator" component={CalculatorScreen} />
        <Tab.Screen name="Gallery" component={GalleryScreen} />
        <Tab.Screen name="About" component={AboutScreen} />
      </Tab.Navigator>
    </NavigationContainer>
  );
};

export default Navigation;
