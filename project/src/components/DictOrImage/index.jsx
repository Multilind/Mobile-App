import React from 'react';
import { View, Text, Image, TouchableOpacity } from 'react-native';
import { useNavigation } from '@react-navigation/native';
import { AntDesign } from '@expo/vector-icons';
import styles from './styles';

export function DictOrImage({ language, image, text, style, navigate, color }) {
  const navigation = useNavigation();

  let descriptionText = '';
  if (text === 'Dicionário') {
    descriptionText = 'Acesse o dicionário de palavras da língua ';
  } else if (text === 'Imagens') {
    descriptionText = 'Veja as imagens que ilustram as palavras do dicionário da língua ';
  }

  return (
    <TouchableOpacity
      style={[styles.dictionary, style]}
      onPress={() => {
        navigation.navigate(navigate, { language });
      }}
    >
      <View style={styles.flexview}>
        <Image style={styles.img} source={image} />
        <Text style={styles.buttontext}>{text}</Text>
        <AntDesign name="right" size={24} color={color} />
      </View>
      <View style={styles.description}>
        <Text>{descriptionText}<Text style={{ fontWeight: 'bold' }}>{language.nome}</Text></Text>
      </View>
    </TouchableOpacity>
  );
}
