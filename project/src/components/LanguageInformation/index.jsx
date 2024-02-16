import React, { useState, useEffect } from 'react';
import { View, Text } from 'react-native';
import { Ionicons } from '@expo/vector-icons';
import styles from './styles';

export function LanguageInfo({ language, style }) {
  // const [dialeto, setDialeto] = useState([]);

  // useEffect(() => {
  //   async function getDialetos() {
  //     const response = await DialetoService.getAllDialetos({
  //       idLingua: language.id_lingua,
  //     });
  //     setDialeto(response);
  //   }
  //   getDialetos();
  // }, []);

  // const list = () =>
  //   dialeto.map((etnia) => (
  //     <View key={etnia.etnia.id_etnia} style={styles.scrollView}>
  //       <Text style={styles.thirdtext}>Etnias Falantes: </Text>

  //       <View style={styles.textlist}>
  //         <View>
  //           <Text style={styles.text}>
  //             <Ionicons name="ios-people" size={20} color="gray" />
  //             {'  '}
  //             {etnia.etnia.nome}
  //           </Text>
  //         </View>
  //       </View>
  //     </View>
  //   ));
  return (
    <View style={[styles.textcontainer, style]}>
      <Text style={styles.firsttext}>
        Tronco Linguístico: {language?.familia?.nome ?? 'Isolada'}
      </Text>
      <Text style={styles.firsttext}>
        Família Linguística: {language?.tronco?.nome ?? 'Isolada'}
      </Text>
    </View>
  );
}
