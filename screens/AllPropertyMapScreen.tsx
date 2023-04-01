import React from 'react';
import MapView from 'react-native-maps';
import { StyleSheet, View } from 'react-native';
import { Marker } from 'react-native-maps';

export default function MapScreen({route}: any) {

 
  const {property} = route.params;
  console.log(property);
 const latitude = '6.5540011';
 const longitude = '3.3441925'

  return (
    <View style={styles.container}>
      <MapView style={styles.map}
      // coordinate={{ latitude : latitude , longitude : longitude }} 
      initialRegion={{
        latitude: (Number(latitude)),
        longitude: (Number(longitude)),
        latitudeDelta: 1.8520,
        longitudeDelta:  0.2481,
      }}
      >
        {property?.data.map((marker: any) => (
     <Marker key={marker._id} coordinate={{
          latitude: (Number(marker.latitude)),
          longitude: (Number(marker.longitude))
        }} />

        ))}
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