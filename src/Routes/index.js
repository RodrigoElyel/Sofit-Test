import { View, Text } from 'react-native'
import React from 'react'

// NAVIGATIONS
import { createStackNavigator } from '@react-navigation/stack';

// SCREENS
import HomeScreen from '../Screens/Home'
import DetailsScreen from '../Screens/Details'
import LoginScreen from '../Screens/Login'

import colors from '../Styles/colors';

const Stack = createStackNavigator();

const StackScreen = () => {
    return (
        <Stack.Navigator
        screenOptions={{
            headerShown: true,
            headerTintColor: colors.black,
            headerStyle: { backgroundColor: colors.green },
            headerTitleAlign: 'center',
        }}
        >
            <Stack.Screen name="Login" component={LoginScreen} />
            <Stack.Screen name="Home" component={HomeScreen} />
            <Stack.Screen name="Details" component={DetailsScreen} />
        </Stack.Navigator>
    )
}

export default StackScreen

