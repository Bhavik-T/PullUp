import {
  StyleSheet,
  ScrollView,
  SafeAreaView,
  Text,
  Image,
  TouchableOpacity,
} from 'react-native';
import React, {useState, useEffect} from 'react';
import Events from './nearBy';
import { POSTS23 } from './post_data2';
import AddEventHeader from './AddEventHeader';
import { db, firebase } from '../firebase';

//Get event locations
const getOneTimeLocation = (eventLong, eventLat) => {
  setLocationStatus('Getting Location ...');
  Geolocation.getCurrentPosition(
    //Will give you the current location
    (position) => {
      setLocationStatus('You are Here');
      //radius in miles
      radius = 1.0;

      //getting the Longitude from the location json
      const currentLongitude = 
        JSON.stringify(position.coords.longitude);

      //getting the Latitude from the location json
      const currentLatitude = 
        JSON.stringify(position.coords.latitude);

      floatlat = parseFloat (currentLatitude);
      floatlong = parseFloat (currentLongitude);

      if (Math.abs (floatlat-eventLat) * 69 < radius && Math.abs (floatlong-eventLong) * 54.9 < radius) {
        console.log ("YOU'RE CLOSE LAT WISE");
      }

      console.log (currentLatitude);
      console.log (currentLongitude);

      //Setting Longitude state
      setCurrentLongitude(currentLongitude);
      
      //Setting Longitude state
      setCurrentLatitude(currentLatitude);
    },

    (error) => {
      setLocationStatus(error.message);
    },

    {
      enableHighAccuracy: true,
      timeout: 30000,
      maximumAge: 1000
    },
  );
};

const DteScreen1 = ({ navigation }) => {
  const[events, setEvents] = useState([]);
  useEffect(() => {
    db.collection('events')
      .onSnapshot(snapshot => {
        setEvents(snapshot.docs.map(event=> (
        {id: event.id, name: event.data().name, description: event.data().eventName, location: event.data().displayLoc, time: event.data().time
        })))
      })
  }, [])

  return (
    <SafeAreaView style={styles.container}>
      <AddEventHeader />

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
  icon3: {
    width: 80,
    height: 80,
    resizeMode: 'contain',
    marginLeft: -20,
  },
});

export default DteScreen1;
