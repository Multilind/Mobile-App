import React, { useState, useEffect } from 'react';
import { View, FlatList } from 'react-native';
import { useRoute } from '@react-navigation/native';
import { SafeAreaView } from 'react-native-safe-area-context';
import {
  GoBack,
  TopBar,
  Word,
  SearchBar,
  LoadingOrEmptyMessage,
} from '../../components';
import { FilterListSearchWord, sortMeaning } from '../../utils';
import styles from './styles';
import Words from '../../words.json'

export function WordsScreen() {
  const route = useRoute();
  const language = route.params?.language;
  const { content } = Words;
  const [words, setWords] = useState(content);
  const [wordSearch, setWordSearch] = useState('');
  const [loading, setLoading] = useState(true);

  // useEffect(() => {
  //   async function getWords() {
  //     const response = await WordService.getAllWords(language.id_lingua);
  //     setLoading(false);
  //     setWords(response.palavras);
  //   }
  //   getWords();
  // }, []);

  const filteredWords = FilterListSearchWord(words, wordSearch);

  return (
    <SafeAreaView style={{backgroundColor: 'white'}}>
      <View style={{ marginBottom: 20 }}>
        <GoBack />
        <TopBar>Palavras</TopBar>
        <SearchBar
          placeholder="Pesquisar por uma Palavra"
          onChange={setWordSearch}
        />
      </View>
      <FlatList
        contentContainerStyle={styles.listcontainer}
        ListEmptyComponent={
          <View style={styles.loadingOrEmptyContainer}>
            <LoadingOrEmptyMessage
              loading={loading}
              isEmpty={words?.length === 0 || filteredWords.length === 0}
              emptyMessage={
                filteredWords.length === 0 && wordSearch.length !== 0
                  ? 'Não há resultados para busca'
                  : `Ainda não há palavras da língua ${language.name} :(`
              }
            />
          </View>
        }
        data={sortMeaning(filteredWords)}
        renderItem={({ item }) => <Word word={item} />}
        keyExtractor={(item) => String(item.id_palavra)}
      />
    </SafeAreaView>
  );
}
