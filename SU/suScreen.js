import {StyleSheet, ScrollView, SafeAreaView, Text} from 'react-native'
import React, {useState, useEffect} from 'react'
import Events from './signedUp'
import { POSTS23 } from './post_data3'
import AddEventHeader from './Header'
import {db, firebase} from '../firebase.js'

const suScreen = ({navigation}) => {
  const[events, setEvents] = useState([]);
  useEffect(() => {
    db.collection('users').doc('bhav').collection('attending')
      .onSnapshot(snapshot => {
        setEvents(snapshot.docs.map(event=> (
        {id: event.id, name: event.data().name, description: event.data().eventName, location: event.data().displayLoc, time: event.data().time
        })))
      })
  }, [])

  return (
    <SafeAreaView style={styles.container}>
      <AddEventHeader navigation={navigation}/>

      <ScrollView style={{ marginTop: 15 }}>
        {events.map((event, index) => (
          <Events key={index} post={event} />
        ))}
      </ScrollView>
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({
  container: {
      backgroundColor: '#121614',
      flex: 1,
  },
})

export default suScreen