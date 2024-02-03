import React from 'react';
import { TouchableOpacity, Text, View, Image } from 'react-native';
import styles from './styles';
import { useNavigation } from '@react-navigation/native';

export function InfoCard({ navigate, image, text }) {
  const navigation = useNavigation();
  return (
    <TouchableOpacity
      style={styles.button}
      onPress={() => {
        navigation.navigate(navigate);
      }}
    >
      <View style={styles.flexview}>
        <Text style={styles.text}>{text}</Text>
        <Image style={styles.img} source={image} />
      </View>
    </TouchableOpacity>
  );
}
