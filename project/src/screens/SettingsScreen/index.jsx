import React from 'react';
import { InfoCard } from '../../components'
import { SafeAreaView } from 'react-native-safe-area-context';
import { View } from 'react-native';
import styles from './styles';
import { contributionImage, guideImage, databaseImage, contributorImage } from '../../assets/images';

export function SettingsScreen() {
  return (
    <SafeAreaView>
      <View style={styles.container}>
        <InfoCard styles={styles.infoCard}
          image={contributionImage}
          navigate="Words"
          text="Contribua com nossa base de dados"></InfoCard>
        <InfoCard styles={styles.infoCard}
        image={guideImage}
        navigate="Words"
        text="Guia de Uso Passo a Passo"></InfoCard>
        <InfoCard styles={styles.infoCard}
        image={databaseImage}
        navigate="Words"
        text="Base de Dados Utilizadas"></InfoCard>
        <InfoCard styles={styles.infoCard}
        image={contributorImage}
        navigate="Words"
        text="Contribuidores"></InfoCard>
      </View>
    </SafeAreaView>
  );
}
