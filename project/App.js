import React, { useState } from 'react';
import { SafeAreaProvider } from 'react-native-safe-area-context';
import { NavigationContainer } from '@react-navigation/native';
import AppLoading from 'expo-app-loading';
import { BottomNavigation } from './src/navigation';
import { LocationContextProvider } from './src/contexts';
import { useCustomFonts } from './src/helpers';
import { OnBoarding } from './src/components'
import { LogBox } from 'react-native';

LogBox.ignoreAllLogs();

export default function App() {
  const fontLoaded = useCustomFonts();
  const [showApp, setShowApp] = useState(false);
  console.disableYellowBox = true;

  if (!fontLoaded) {
    return <AppLoading />;
  }

  if (!showApp) {
    return (
      <OnBoarding
        dotBackgroundColor='#016949'
        onFinish={
          () => {
            setShowApp(true);
          }}
        buttonIconColor='white'
        buttonBackgroundColor='#016949'
      />
    );
  }

  return (
    <LocationContextProvider>
      <SafeAreaProvider>
        <NavigationContainer>
          <BottomNavigation />
        </NavigationContainer>
      </SafeAreaProvider>
    </LocationContextProvider>
  );
}
