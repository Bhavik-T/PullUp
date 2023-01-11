import { View, Text, Image, StyleSheet, TouchableOpacity} from 'react-native'
import React from 'react'
import { Divider } from 'react-native-elements'
import Entypo from 'react-native-vector-icons/Entypo'

const Header = ({navigation}) => {
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

            <TouchableOpacity onPress={() => navigation.push('CreateEvent2')}>
              <View style={styles.square2}>
                <Image 
                  source={{
                  uri: 'https://img.icons8.com/fluency-systems-regular/60/1CC4A8/plus-2-math.png',
                  }}
                  style={styles.icon2} 
                />
              </View>
            </TouchableOpacity>


        </View>
        
    </View>
  )
}

const styles = StyleSheet.create({
  container: { 
    justifyContent: 'space-between',
    alignItems: 'center',
    flexDirection: 'row',
    marginHorizontal: 20,
  },

  square2: {
    width: 40,
    height: 40,
    backgroundColor: "#C8EEF9",
    borderRadius: 10,
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
    marginLeft: -10,
  },

  icon2: {
    width: 30,
    height: 30,
    marginTop: 5,
    marginLeft: 5,
    resizeMode: 'contain'
  },


})


export default Header