import React from 'react';
import { Text, View } from 'react-native';
import { useRoute } from '@react-navigation/native';
import styles from './styles';

export function WordMeaning({ title }) {
  const route = useRoute();
  const word = route.params?.word;
  return (
    <View style={styles.container}>
      <View style={styles.header}>
        <Text style={styles.title}>{title}</Text>
      </View>
      <View style={styles.body}>
        <Text style={styles.meaning}>{word.significado}</Text>
      </View>
    </View>
  );
}
