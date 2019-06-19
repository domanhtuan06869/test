import React, {useState,useEffect}from 'react';

import { StyleSheet, Text, View, TextInput,FlatList, Button ,Image,TouchableWithoutFeedback, KeyboardAvoidingView } from 'react-native';
import *as firebase from 'firebase'


export default function listview(props) {
  var firebaseAPi={

    apiKey: "AIzaSyAy4hlIkRu7wOZFw_yl_ZQD_U9DwaY6_cI",
    authDomain: "test-8ca79.firebaseapp.com",
    databaseURL: "https://test-8ca79.firebaseio.com",
    projectId: "test-8ca79",
    storageBucket: "test-8ca79.appspot.com",
    messagingSenderId: "765297743299",
    appId: "1:765297743299:web:f578ccef0e69c668"
  }
var array=[];
 


 useEffect(()=>{
  
  if (!firebase.apps.length) {
  
    firebase.initializeApp(firebaseAPi)
  
  }



  firebase.database().ref('kiemtra/').on('value', function (snapshot) {

  
    snapshot.forEach(function (childSnapshot) {
      var childData = childSnapshot.val();
      array.push({
        id: childSnapshot.key,
        Name: childData.Name,
        Tuoi: childData.Tuoi,
     

      });
    });
  
    
    
  });
  

 })

     
  
 console.log(array)

  return (
    <View style={styles.container}>
  <FlatList style={{
          marginTop: 10, width:400,height:200,backgroundColor:'red'
        }}
          
          data={[{Name:'fthd'}]}
          renderItem={({ item }) =>
            <View style={{
              flexDirection: 'column',
            }}>
              <View style={{ flexDirection: 'row', alignItems: 'center' ,marginTop:5}}>
                <Image style={{ width: 35, height: 35, borderRadius: 17 , marginLeft: 3 }} source={{ uri:'' }}></Image>
              <View style={{flexDirection:'column'}}>
                <Text style={{ fontWeight: 'bold', }}>  {item.Name}</Text>
                <Text style={{fontStyle:'italic', fontSize: 10,marginLeft:3 }}>lúc </Text>
                 </View>
              </View>
              <Image style={styles.imglist} source={{ uri: ''}}></Image>
          
            </View>

          }
      

          keyExtractor={(item, index) => item.id}
        />
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
