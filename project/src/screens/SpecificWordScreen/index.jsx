import React from 'react';
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

export function SpecificWordScreen() {
  const insets = useSafeAreaInsets();
  const route = useRoute();
  const word = route.params?.word;
  const navigation = useNavigation();

  return (
    <SafeAreaView style={{ flex: 1, backgroundColor: 'white' }}>
      <View style={{ marginTop: insets.top - 15 }}>
        <GoBack />
        <TopBar>{word.nome}</TopBar>
      </View>
      <View style={styles.info}>
        <WordMeaning title="Tradução (Português formal)"/>
        <WordMeaning title="Tradução (Português indígena)*"/>
        <Text style={styles.text}>*Português indígena é o nome que estamos usando para designar 
          o português falado pelos povos indígenas, sendo diferente do 
          português formal e do português brasileiro tendo em vista a 
          forte influência da língua materna dos povos originais.</Text>
      </View>
    </SafeAreaView>
  );
}
