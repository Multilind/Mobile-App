import React, { useState, useEffect } from 'react';
import { View, ScrollView } from 'react-native';
import { useRoute } from '@react-navigation/native';
import { SafeAreaView } from 'react-native-safe-area-context';
import { WordService } from '../../services';
import { GoBack, TopBar, ListWords, SearchBar } from '../../components';
import { FilterListSearch } from '../../utils';

export function WordsScreen() {
  const route = useRoute();
  const language = route.params?.language;
  const [words, setWords] = useState([]);
  const [wordSearch, setWordSearch] = useState('');

  useEffect(() => {
    async function getWords() {
      const response = await WordService.getAllWords(language.id_lingua);
      setWords(response.palavras);
    }
    getWords();
  }, []);

  return (
    <SafeAreaView>
      <View style={{ paddingVertical: 10 }}>
        <GoBack />
        <TopBar>Palavras</TopBar>
        <SearchBar
          placeholder="Pesquisar por uma Palavra"
          onChange={setWordSearch}
        />
      </View>
      <View>
        <ScrollView>
          <ListWords listWords={FilterListSearch(words, wordSearch)} />
        </ScrollView>
      </View>
    </SafeAreaView>
  );
}
