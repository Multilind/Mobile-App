import React, { useState } from 'react';
import { Image } from 'react-native';
import { SafeAreaProvider } from 'react-native-safe-area-context';
import { NavigationContainer } from '@react-navigation/native';
import AppLoading from 'expo-app-loading';
import { BottomNavigation } from './src/navigation';
import { LocationContextProvider } from './src/contexts';
import { useCustomFonts } from './src/helpers';
import OnboardingScreen from 'simple-react-native-onboarding';
import { OnBoarding } from './src/components'
import { stepOne, stepTwo, stepThree, stepFour } from './src/assets/images';

const data = [
  {
    _id: '1',
    image: <Image source={stepOne} />
  },
  {
    _id: '2',
    image: <Image source={stepTwo} />
  },
  {
    _id: '3',
    image: <Image source={stepThree} />
  },
  {
    _id: '4',
    image: <Image source={stepFour} />
  },
]

export default function App() {
  const fontLoaded = useCustomFonts();
  const [showApp, setShowApp] = useState(false);

  if (!fontLoaded) {
    return <AppLoading />;
  }

  if (!showApp) {
    return (
      <OnBoarding
        data={data}
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
