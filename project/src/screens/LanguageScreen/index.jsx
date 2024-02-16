import React, { useState } from 'react';
import { Text, View, ScrollView, Modal, TouchableOpacity } from 'react-native';
import {
  Entypo,
  FontAwesome5,
  AntDesign,
  FontAwesome,
  Octicons
} from '@expo/vector-icons';
import { useSafeAreaInsets } from 'react-native-safe-area-context';
import { useNavigation } from '@react-navigation/native';
import Pressable from 'react-native/Libraries/Components/Pressable/Pressable';
import { TouchableWithoutFeedback } from 'react-native-gesture-handler';
import {
  DARK_GRAY,
  MONTSERRAT_BOLD,
  MONTSERRAT_SEMIBOLD,
  MONTSERRAT_REGULAR,
  SCREEN_HEIGHT,
  SCREEN_WIDTH,
} from '../../constants';
import styles from './styles';
import Languages from '../../languages.json';
import LanguagesPerFamily from '../../languagesPerFamily.json'
import { Input, Tab } from '../../components';
import { FilterListSearch } from '../../utils';

export function LanguageScreen() {
  const { languages } = Languages;
  const { languagesPerFamily } = LanguagesPerFamily;
  const navigation = useNavigation();
  const [lista, setLista] = useState(languages);
  const [listFamily, setListLanguage] = useState(languagesPerFamily);
  const [familySearch, setFamilySearch] = useState('');
  const [expanded, setExpanded] = useState(false);

  const listLanguages = () =>
    lista.map((language) => (
      <View key={language.id} style={styles.listcontainer}>
        <TouchableOpacity
          onPress={() => {
            navigation.navigate('LanguageInitial', { language });
          }}
          style={styles.list}
        >
          <Text style={styles.textlist}>{language.nome}</Text>
          <AntDesign
            name="right"
            size={24}
            color="#B1B1B1"
            style={styles.arrow}
          />
        </TouchableOpacity>
      </View>
    ));

  const listFamilies = () =>
    FilterListSearch(listFamily, familySearch).map((tronco, index) => (
      <View key={tronco.id_tronco} style={styles.listcontainer}>
        <TouchableOpacity
          style={styles.list}
          onPress={() => setExpanded(expanded === index ? null : index)}
        >
          <View style={styles.familyLinguas}>
            <Text style={styles.textlist}>{tronco.nome}</Text>
            {tronco.linguas.length > 0 && (
              <Text style={styles.qtdLinguas}>
                {`${tronco.linguas.length} línguas`}
              </Text>
            )}
          </View>
          {tronco.linguas.length > 0 && (
            <AntDesign
              name={expanded === index ? 'up' : 'down'}
              size={24}
              color="#B1B1B1"
              style={styles.arrow}
            />
          )}
        </TouchableOpacity>

        {expanded === index &&
          tronco.linguas?.map((language) => (
            <View key={language.id} style={styles.listcontainer}>
              <TouchableOpacity
                onPress={() => {
                  navigation.navigate('LanguageInitial', { language });
                }}
                style={styles.list}
              >
                <Text style={styles.textlist}>{language.nome}</Text>
                <AntDesign
                  name="right"
                  size={24}
                  color="#B1B1B1"
                  style={styles.arrow}
                />
              </TouchableOpacity>
            </View>
          ))}
      </View>
    ));

  const insets = useSafeAreaInsets();
  const [visib, setVisib] = useState(false);
  const listOrdenada = () => {
    const newList = [...languages];

    newList.sort((a, b) => a.nome.localeCompare(b.nome));
    setLista(newList);
  };
  const listDesOrdenada = () => {
    const newList = [...languages];

    newList.sort((a, b) => b.nome.localeCompare(a.nome));
    setLista(newList);
  };
  const listOrdenadaTronco = () => {
    const newList = [...languages];

    newList.sort((a, b) =>
      a.troncolinguistico.localeCompare(b.troncolinguistico)
    );
    setLista(newList);
  };
  return (
    <>
      <Modal visible={visib} transparent animationType="fade">
        <TouchableOpacity
          activeOpacity={1}
          onPress={() => {
            setVisib(false);
          }}
          style={{
            width: SCREEN_WIDTH,
            height: SCREEN_HEIGHT,
            backgroundColor: 'rgba(0,0,0,0.3)',
          }}
        >
          <TouchableWithoutFeedback>
            <View
              style={{
                marginTop: 140,
                marginLeft: SCREEN_WIDTH - 233,
                backgroundColor: 'white',
                width: 233,
                padding: 10,
              }}
            >
              <Pressable
                style={styles.flex}
                onPress={() => {
                  listOrdenada();
                  setVisib(false);
                }}
              >
                <FontAwesome5
                  name="sort-alpha-down"
                  size={30}
                  style={styles.iconModal}
                />
                <Text style={styles.textmodal}>
                  Listar por nome (crescente)
                </Text>
              </Pressable>
              <Pressable
                style={styles.flex}
                onPress={() => {
                  listDesOrdenada();
                  setVisib(false);
                }}
              >
                <FontAwesome5
                  name="sort-alpha-down-alt"
                  size={30}
                  style={styles.iconModal}
                />
                <Text style={styles.textmodal}>
                  Listar por nome (decrescente)
                </Text>
              </Pressable>
            </View>
          </TouchableWithoutFeedback>
        </TouchableOpacity>
      </Modal>
      <View style={{ backgroundColor: 'white', flex: 1 }}>
        <View style={styles.container}>
          <Text
            style={{
              marginTop: insets.top,
              fontFamily: MONTSERRAT_BOLD,
              fontSize: 30,
            }}
          >
            Línguas Indígenas
          </Text>
        </View>
        <View style={styles.filters}>
          <Input
            icon={
              <View>
                <Entypo
                  name="magnifying-glass"
                  size={30}
                  style={{ left: 10 }}
                />
              </View>
            }
            inputContainerStyle={[styles.searchBar]}
            placeholder="Pesquisar língua"
          />
          <TouchableOpacity
            onPress={() => {
              setVisib(true);
            }}
          >
            <Octicons
              name="arrow-switch"
              size={24}
              color={DARK_GRAY}
              style={[styles.arrowIcon, { transform: [{ rotate: '-90deg' }] }]}
            />
          </TouchableOpacity>
        </View>
        <Tab firstTitle="Línguas" secondTitle="Famílias Linguísticas" firstView={<ScrollView>{listLanguages()}</ScrollView>} secondView={<ScrollView>{listFamilies()}</ScrollView>} />
      </View>
    </>
  );
}
