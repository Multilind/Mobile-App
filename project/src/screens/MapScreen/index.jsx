import React, { useEffect, useState } from 'react';
import { View } from 'react-native';
import MapView, { Marker } from 'react-native-maps';
import {
  requestForegroundPermissionsAsync,
  getCurrentPositionAsync,
} from 'expo-location';
import { Input } from '../../components';
import styles from './styles';
import markerImage from '../../assets/images/marker.png';

export function MapScreen() {
  const [location, setLocation] = useState(null);

  // useEffect(() => {
  //   async function getPosition() {
  //     const { status } = await requestForegroundPermissionsAsync();
  //     if (status !== 'granted') {
  //       return;
  //     }

  //     const currentLocation = await getCurrentPositionAsync({});

  //     setLocation(currentLocation.coords);
  //   }
  //   getPosition();
  // }, []);

  return (
    <View style={styles.container}>
      <MapView
        initialRegion={{
          latitude: 37.78825,
          longitude: -122.4324,
          latitudeDelta: 0.0922,
          longitudeDelta: 0.0421,
        }}
      />
    </View>
  );
}
