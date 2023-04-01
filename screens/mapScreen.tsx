import React from 'react';
import MapView from 'react-native-maps';
import { StyleSheet, View } from 'react-native';
import { Marker } from 'react-native-maps';

export default function MapScreen({route}: any) {

  const {longitude, latitude} = route.params;
  console.log(longitude, latitude);
  const region = 'surulere'

  return (
    <View style={styles.container}>
      <MapView style={styles.map}
      // coordinate={{ latitude : latitude , longitude : longitude }} 
      initialRegion={{
        latitude: (Number(latitude)),
        longitude: (Number(longitude)),
        latitudeDelta: 0.0422,
        longitudeDelta: 0.0121,
      }}
      >
     <Marker coordinate={{
          latitude: (Number(latitude)),
          longitude: (Number(longitude))
        }} />
      </MapView>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  map: {
    width: '100%',
    height: '100%',
  },
});