import React from 'react';
import { View, Text, TouchableOpacity, Linking, ScrollView } from 'react-native';
import data from '../../aboutScreenData.json';
import { useRoute } from '@react-navigation/native';
import { AntDesign } from '@expo/vector-icons'; // Import AntDesign for the right arrow icon
import styles from './styles';

export function AboutScreen({ navigation }) {
  const route = useRoute();
  const screenType = route.params?.screenType;

  const renderData = (dataType) => (
    <View key={dataType.id} style={styles.container}>
      <ScrollView>
        <Text style={styles.title}>{dataType.title}</Text>
        {dataType.content?.map((dataContent) => (
          <View key={dataContent.id} style={styles.listcontainer}>
            <TouchableOpacity
              style={styles.list}
              onPress={async () => {
                if (dataType.id === 2) {
                  return;
                }
                const supported = await Linking.canOpenURL(dataContent.url);
                if (supported) {
                  await Linking.openURL(dataContent.url);
                } else {
                  console.log(`Don't know how to open this URL: ${dataContent.url}`);
                }
              }}
            >
              <Text style={styles.textlist}>{dataContent.nome}</Text>
              {screenType === 'database' && ( // Conditionally render AntDesign icon
                <AntDesign name="right" size={24} color="#B1B1B1" style={styles.arrow} />
              )}
            </TouchableOpacity>
          </View>
        ))}
      </ScrollView>
    </View>
  );

  const filteredData =
    screenType === 'contributor'
      ? data.find((item) => item.title === 'Contribuidores')
      : data.find((item) => item.title === 'Bases de Dados presentes no aplicativo');

  return <View style={styles.container}>{filteredData ? renderData(filteredData) : null}</View>;
}
