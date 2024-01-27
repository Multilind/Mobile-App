import React from 'react';
import { InfoCard } from '../../components'
import { SafeAreaView } from 'react-native-safe-area-context';
import { View } from 'react-native';
import styles from './styles';

export function SettingsScreen() {
  return (
    <SafeAreaView>
      <View style={styles.container}>
        <InfoCard styles={styles.infoCard}></InfoCard>
        <InfoCard styles={styles.infoCard}></InfoCard>
        <InfoCard styles={styles.infoCard}></InfoCard>
        <InfoCard styles={styles.infoCard}></InfoCard>
      </View>
    </SafeAreaView>
  );
}
