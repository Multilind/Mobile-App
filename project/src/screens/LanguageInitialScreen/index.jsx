import React from 'react';
import { View, ScrollView } from 'react-native';
import { SafeAreaView } from 'react-native-safe-area-context';
import { useRoute, useNavigation } from '@react-navigation/native';
import { GoBack, TopBar, LanguageInfo, DictOrImage } from '../../components';
import styles from './styles';
import { portraitImage, dictionaryImage } from '../../assets/images';

export function LanguageInitialScreen() {
  const route = useRoute();
  const language = route.params?.language;
  const navigation = useNavigation();

  return (
    <SafeAreaView>
      <ScrollView>
        <GoBack />
        <TopBar>{language.nome}</TopBar>
        <View style={styles.container}>
          <LanguageInfo language={language} style={styles.LanguageInfo} />

          <View style={styles.Dict}>
            <DictOrImage
              style={styles.dictChildren}
              language={language}
              image={dictionaryImage}
              navigate="Words"
              text="Dicionário"
              color="#016949"
            />

            <DictOrImage
              style={styles.imageChildren}
              language={language}
              navigate="ImageWordScreen"
              image={portraitImage}
              text="Imagens"
              color="#2D48BA"
            />
          </View>
        </View>
      </ScrollView>
    </SafeAreaView>
  );
}
