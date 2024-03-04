import React, { useState } from 'react';
import { InfoCard } from '../../components';
import { SafeAreaView } from 'react-native-safe-area-context';
import { View } from 'react-native';
import styles from './styles';
import { contributionImage, guideImage, databaseImage, contributorImage } from '../../assets/images';
import { NativeModules } from "react-native";

export function SettingsScreen() {
  const [showApp, setShowApp] = useState(false);
  const [showOnBoarding, setShowOnBoarding] = useState(false);

  if (showOnBoarding && !showApp) {
    NativeModules.DevSettings.reload();
  }

  const handleGuidePress = () => {
    setShowOnBoarding(true);
  };

  return (
    <SafeAreaView>
      <View style={styles.container}>
        <InfoCard
          styles={styles.infoCard}
          image={contributionImage}
          externalUrl="https://www.decadalinguasindigenasbr.com/materiais/"
          text="Contribua com nossa base de dados"
        />
        <InfoCard
          styles={styles.infoCard}
          image={guideImage}
          text="Guia de Uso Passo a Passo"
          onPressCallback={handleGuidePress}
        />
        <InfoCard
          styles={styles.infoCard}
          image={databaseImage}
          navigate="AboutScreen"
          text="Base de Dados Utilizadas"
          screenType="database"
        />
        <InfoCard
          styles={styles.infoCard}
          image={contributorImage}
          navigate="AboutScreen"
          text="Contribuidores"
          screenType="contributor"
        />
      </View>
    </SafeAreaView>
  );
}
