import React from 'react';
import { View, Text } from 'react-native';
import styles from './styles';

export function LanguageInfo({ language }) {
  return (
    <View style={ styles.textcontainer }>
      <Text style={ styles.firstText }>
        Tronco Linguístico: {language?.familia?.nome ?? 'Isolada'}
      </Text>
      <Text style={ styles.firstText }>
        Família Linguística: {language?.tronco?.nome ?? 'Isolada'}
      </Text>
    </View>
  );
}
