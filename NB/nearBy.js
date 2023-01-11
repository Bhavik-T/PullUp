import { View, Text, Image, StyleSheet, TouchableOpacity, ScrollView } from 'react-native'
import React from 'react'
import { Divider } from 'react-native-elements'
import Entypo from 'react-native-vector-icons/Entypo'
import {db , firebase} from '../firebase.js'


//Global:


const Events = ({post}) => {



  const handleSubmit2 = (d, n, l, t) => {
      db.collection ('users').doc('bhav').collection('attending').add({
      name: n,
      displayLoc: l,
      time: t,
      eventName: d,
      })
  }
  

  return (
    <View style={styles.outerBorder
    }>
      
      <View style={{flexDirection: 'row', flex: 1}}>
        <View style={styles.innerBorder}>
            <View style={styles.textBox}>
                <Text style={{color:'#1CC4A8', fontSize:20, fontWeight:'bold'}}> {post.description}</Text>
                <Text style={{color:'#1CC4A8', fontSize:15}}> Host: {post.name} </Text>
                <Text style={{color:'#1CC4A8', fontSize:15}}> Location: {post.location} </Text>
                <Text style={{color:'#1CC4A8', fontSize:15}}> {post.time} {post.date}  </Text>
            </View>
        </View>
        <TouchableOpacity style={styles.img} onPress={() => handleSubmit2(post.description, post.name, post.location, post.time, post.date)}>
            <Entypo name='circle-with-plus' size={60} color={'#1CC4A8'}/>
        </TouchableOpacity>
    </View>

    </View>
  )
}



const styles = StyleSheet.create({
    outerBorder: {
        width: '90%',
        backgroundColor: "#C8EEF9",
        borderRadius: 10,
        marginLeft: '5%',
        marginTop: 3,
        marginBottom: 20,
        flexDirection: 'column',
        height: 120,
      },
      innerBorder: {
          width: '60%',
          height: 85,
          backgroundColor: "#C8EEF9",
          borderRadius: 10,
          marginLeft: '5%',
          marginTop: 10,
        },
      textBox: {
          flex: 1,
          marginTop: 5,
          alignItems: 'flex-start',
          marginBottom: 5,
  
      },
      img: {
        marginTop: 30,
        marginLeft: 45,
      },
})

export default Events