import React, { useState } from 'react';
import { TouchableOpacity, Text, View, Image, Linking } from 'react-native';
import styles from './styles';
import { useNavigation } from '@react-navigation/native';

export function InfoCard({ navigate, image, text, externalUrl, onPressCallback }) {
  const navigation = useNavigation();
  
  const handlePress = () => {
    if (externalUrl) {
      Linking.openURL(externalUrl);
    } if (navigate) {
      navigation.navigate(navigate);
    }
    onPressCallback();
  };

  return (
    <TouchableOpacity
      style={styles.button}
      onPress={handlePress}
    >
      <View style={styles.flexview}>
        <Text style={styles.text}>{text}</Text>
        <Image style={styles.img} source={image} />
      </View>
    </TouchableOpacity>
  );
}
