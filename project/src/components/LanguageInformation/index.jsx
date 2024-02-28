import React from 'react';
import { View, Text } from 'react-native';
import styles from './styles';

export function LanguageInfo({ language, style }) {
  return (
    <View style={[styles.textcontainer, style]}>
      <Text style={styles.firsttext}>
        Tronco Linguístico: {language?.familia?.nome ?? 'Isolada'}
      </Text>
      <Text style={styles.firsttext}>
        Família Linguística: {language?.tronco?.nome ?? 'Isolada'}
      </Text>
    </View>
  );
}
