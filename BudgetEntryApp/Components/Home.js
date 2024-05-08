import React from 'react'
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs'
import { NavigationContainer } from '@react-navigation/native';
import Icon from 'react-native-vector-icons/dist/FontAwesome5';
import Entypo from 'react-native-vector-icons/dist/Entypo';
import BudgetEntryListingScreen from './BudgetEntryListingScreen';
import BudgetEntryScreen from './BudgetEntryScreen';

const Tab = createBottomTabNavigator();
function Home() {
  return (
    <NavigationContainer>
      <Tab.Navigator screenOptions={{
        tabBarActiveTintColor: 'black',
        tabBarInactiveTintColor: "grey"
      }} >
        <Tab.Screen name='Budget List' component={BudgetEntryListingScreen}  options={{
          tabBarIcon: ({ color, size }) => (
            <Icon name="clipboard-list" size={size} color={color}></Icon>
          )
        }}></Tab.Screen>
        <Tab.Screen name='Budget Entry' component={BudgetEntryScreen} options={{
          tabBarIcon: ({ color, size }) => (
            <Entypo name="pencil" size={size} color={color}></Entypo>
          )
        }}></Tab.Screen>
      </Tab.Navigator>
    </NavigationContainer>
  )
}

export default Home
