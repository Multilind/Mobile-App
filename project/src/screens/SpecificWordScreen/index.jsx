import React, { useState } from 'react';
import {
  View,
  Text,
  ScrollView,
  SafeAreaView,
  TouchableOpacity,
} from 'react-native';
import { useSafeAreaInsets } from 'react-native-safe-area-context';
import { useRoute, useNavigation } from '@react-navigation/native';
import { FontAwesome } from '@expo/vector-icons';
import styles from './styles';
import { GoBack, TopBar, WordMeaning } from '../../components';
import {
  SCREEN_HEIGHT,
  MONTSERRAT_BOLD,
  MONTSERRAT_SEMIBOLD,
} from '../../constants';
import Images from '../../images.json'
import { Tab, ImageContainer } from '../../components';

export function SpecificWordScreen() {
  const insets = useSafeAreaInsets();
  const route = useRoute();
  const word = route.params?.word;
  const navigation = useNavigation();
  const { content } = Images;
  const [images, setImages] = useState(content);
  const [loading, setLoading] = useState(false);

  const listImages = () => {
    if (loading) {
      return (
        <SafeAreaView>
          <LoadingOrEmptyMessage loading={true} />
        </SafeAreaView>
      );
    } else if (images.length === 0) {
      return (
        <SafeAreaView>
          <LoadingOrEmptyMessage isEmpty={true} emptyMessage="Ainda não há imagens cadastradas :(" />
        </SafeAreaView>
      );
    } else {
      return (
        <SafeAreaView style={styles.container}>
          {images.map((image, index) => (
            <View
              key={image.url}
              style={
                word.length === 2 && index === 0
                  ? styles.containerImage2
                  : styles.containerImage
              }
            >
              <ImageContainer palavra={word.nome} image={image.download_url} />
            </View>
          ))}
        </SafeAreaView>
      );
    }
  }

  const showMeaning = () =>
    <SafeAreaView>
      <View style={styles.info}>
        <WordMeaning title="Tradução (Português formal)" />
        <WordMeaning title="Tradução (Português indígena)*" />
        <Text style={styles.text}>*Português indígena é o nome que estamos usando para designar
          o português falado pelos povos indígenas, sendo diferente do
          português formal e do português brasileiro tendo em vista a
          forte influência da língua materna dos povos originais.</Text>
      </View>
    </SafeAreaView>

  return (
    <View style={{ backgroundColor: 'white', flex: 1 }}>
      <View style={{ marginTop: insets.top - 15, backgroundColor: 'white' }}>
        <GoBack />
        <TopBar>{word.nome}</TopBar>
      </View>
      <Tab firstTitle="Significado" secondTitle="Imagens" firstView={showMeaning()} secondView={listImages()} />
    </View>
  );
}
