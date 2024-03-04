import React from 'react';
import { createStackNavigator } from '@react-navigation/stack';
import { AboutScreen, SettingsScreen } from '../screens';

const Stack = createStackNavigator();

export function SettingsNavigation() {
  return (
    <Stack.Navigator
      screenOptions={{
        headerShown: false,
      }}
    >
      <Stack.Screen name="Settings" component={SettingsScreen} />
      <Stack.Screen name="AboutScreen" component={AboutScreen} />
    </Stack.Navigator>
  );
}
