import React from 'react';
import { createStackNavigator } from '@react-navigation/stack';
import { LanguageScreen, LanguageInitialScreen, WordsScreen, SpecificWordScreen, SpecificImageScreen, ImageWordScreen } from '../screens';

const Stack = createStackNavigator();

export function LanguageNavigation() {
  return (
    <Stack.Navigator
      screenOptions={{
        headerShown: false,
      }}
    >
      <Stack.Screen name="Language" component={LanguageScreen} />
      <Stack.Screen name="LanguageInitial" component={LanguageInitialScreen} />
      <Stack.Screen name="Words" component={WordsScreen} />
      <Stack.Screen name="SpecificWord" component={SpecificWordScreen} />
      <Stack.Screen
        name="SpecificImageScreen"
        component={SpecificImageScreen}
      />
      <Stack.Screen name="ImageWordScreen" component={ImageWordScreen} />
    </Stack.Navigator>
  );
}
