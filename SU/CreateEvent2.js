import React, {useState} from 'react';
import {Text, StyleSheet, View, TextInput, Picker, Button, Alert, TouchableOpacity, Image, KeyboardAvoidingView} from 'react-native';
import SelectList from 'react-native-dropdown-select-list'
import DateTimePickerModal from "react-native-modal-datetime-picker";
import {Slider} from '@miblanchard/react-native-slider';
import {db, firebase} from '../firebase.js'
// import Geolocation from '@react-native-community/geolocation';




const CreateEvent2 = ({navigation}) => {
  const handleSubmit = (location1, title1, date1, time1) => {

    if (title1 == '' || location1 == '' || date1 == '' || time1 == '') {
      Alert.alert ('Missing Inputs!');
    }
    else {
      db.collection ('events').add({
        date: date1,
        displayLoc: location1,
        eventName: title1,
        name: "Bhavik",
        time: time1,
        location: [40.4451540778153, -79.94541405010281]
        
      }).then (console.log('done')).then(() => navigation.goBack())
    }
  }
  //Text Inputs
  const [location, setLocation] = useState('');
  const [title, setTitle] = useState('')
  const [date, setDate] = useState('')
  const [time, setTime] = useState('')
  

  return (
    <View style={styles.container}>

      <TouchableOpacity 
        style={{marginTop: -100, marginBottom:50, marginLeft: '-85%'}} 
        onPress={() => navigation.goBack()}
      >
            <Image 
                source={{uri: 'https://img.icons8.com/ios-glyphs/30/1cc4a8/back.png'}}
                style={{width: 40, height: 40}}
            />
      </TouchableOpacity>

      <Text style={styles.formLabel}> Drop an Event! </Text>
      <Text></Text>
      
      <View>
        <TextInput 
          placeholder="Event Title"
          placeholderTextColor='#1cc4a8'
          style={styles.inputStyle}
          onChangeText={title => setTitle(title)}
        />

        <Text></Text>

        <TextInput 
          placeholder="Location" 
          placeholderTextColor='#1cc4a8' 
          style={styles.inputStyle}
          onChangeText={location => setLocation(location)}
        />

        <TextInput 
          placeholder="Date" 
          placeholderTextColor='#1cc4a8' 
          style={styles.inputStyle}
          onChangeText={date => setDate(date)}
        />

        <TextInput 
          placeholder="Time" 
          placeholderTextColor='#1cc4a8' 
          style={styles.inputStyle}
          onChangeText={time => setTime(time)}
        />

        <Text></Text>

        <Text></Text>
        

      </View>
    
      <TouchableOpacity style={styles.createEvent} onPress={() => handleSubmit(location, title, date, time)}>
         <Text style={styles.text}> Create Event </Text>
      </TouchableOpacity>


    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#121614',
    alignItems: 'center',
    justifyContent: 'center',
  },
  formLabel: {
    fontSize: 42,
    color: '#c8eef9',
    fontFamily: 'Helvetica-Bold',
    fontStyle: 'bold',
    fontWeight: 'bold',
  },
  inputStyle: {
    marginTop: 15,
    width: 250,
    height: 40,
    paddingHorizontal: 20,
    borderRadius: 50,
    backgroundColor: '#c8eef9',
    fontSize: 18,
  },
  inputStyle3: {
    marginTop: 22,
    width: 350,
    height: 60,
    borderRadius: 50,
    backgroundColor: '#e4d1b9',
    flexDirection: 'row',
    justifyContent: 'space-around',
    alignContent: 'center',
    alignItems: 'center',
    zIndex: 0,
  },
  createEvent: {
    marginTop: 20,
    width: 200,
    height: 50,
    borderRadius: 50,
    backgroundColor: '#c8eef9',
    alignItems: 'center',
    alignContent: 'center'
  },
  text: {
    fontSize: 20,
    marginTop: 12,
    color: '#121614'
  }
});

export default CreateEvent2;