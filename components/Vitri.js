import React, {useState,useEffect}from 'react';
import { Constants, Location, Permissions } from 'expo';
import { Platform,StyleSheet, Text, View, TextInput,FlatList, Button ,Image,TouchableWithoutFeedback, KeyboardAvoidingView } from 'react-native';
import *as firebase from 'firebase'


export default function Vitri(props) {
 
    const [location, setLocation] = useState();
    const [errorMessage, setErrorMessage] = useState('Waiting...');
  
    const [latitude, setLatitude] = useState();
  
    const [longitude, setLongitude] = useState();
  
    useEffect(() => {
  
      if (Platform.OS === 'android' && !Constants.isDevice) {
        setErrorMessage('Oops, this will not work on Sketch in an Android emulator. Try it on your device!');
      } else {
        _getLocationAsync();
      }
    });
  
    _getLocationAsync = async () => {
      let { status } = await Permissions.askAsync(Permissions.LOCATION);
      if (status !== 'granted') {
  
        setErrorMessage('Permission to access location was denied');
  
      }
  
      let info = await Location.getCurrentPositionAsync({});
  
  
      setLatitude(info.coords.latitude);
  
      setLongitude(info.coords.longitude);
  
    }


  return (
    <View style={styles.container}>
  <Text>Open up App.js to start working on your app!</Text>

<Text> Error : {errorMessage}</Text>
<Text>{longitude} : {latitude}</Text>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
});
