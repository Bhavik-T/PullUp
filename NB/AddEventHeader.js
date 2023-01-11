import { View, Text, Image, StyleSheet, TouchableOpacity} from 'react-native'
import React from 'react'
import { Divider } from 'react-native-elements'
import Entypo from 'react-native-vector-icons/Entypo'

const AddEventHeader = () => {
  return (
    <View style={{backgroundColor: '#121614'}}>
        <View style={styles.container}>
            <TouchableOpacity>
                <Image 
                  source={require('../logo.png')}
                  style={styles.icon3} 
                />
            </TouchableOpacity>

        <View style={{flexDirection: 'row', justifyContent: 'flex-start'}}>
            <Image 
                  source={require('../PullUpLogo.jpg')}
                  style={styles.icon} 
                />
        </View>
        </View>
    </View>
  )
}

const handleAddRestaurant = () => {
  db.collection("events").add({
  name: "Tokyo",
  country: "Japan"
  }).then(console.log('done'))
}

const styles = StyleSheet.create({
  container: { 
    justifyContent: 'space-between',
    alignItems: 'center',
    flexDirection: 'row',
    marginHorizontal: 20,
  },


  icon3: {
    width: 80,
    height: 80,
    resizeMode: 'contain',
    marginLeft: -20,
  },

  icon: {
    width: 150,
    height: 100,
    marginTop: 5,
    resizeMode: 'contain',
    marginLeft: -210,
  },


})


export default AddEventHeader