import MS from './NB/DteSreen1' 
import SS from './SU/suScreen'
import FScreen from './Follow/FScreen'
import CreateEvent2 from './SU/CreateEvent2'

import FontAwesome5 from 'react-native-vector-icons/FontAwesome5'
import FontAwesome from 'react-native-vector-icons/FontAwesome'
import Octicons from 'react-native-vector-icons/Octicons'
import EvilIcons from 'react-native-vector-icons/EvilIcons'
import Entypo from 'react-native-vector-icons/Entypo'
import MaterialCommunityIcons from 'react-native-vector-icons/MaterialCommunityIcons'

import { NavigationContainer, StackActions } from '@react-navigation/native'
import { createStackNavigator } from '@react-navigation/stack'
import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";


const Stack = createStackNavigator();
const Tab = createBottomTabNavigator();

const TabNavigator = () => {
  return (
    <Tab.Navigator
      screenOptions={{
        headerShown: false, 
        tabBarShowLabel: false,
        tabBarInactiveTintColor: '#CCCFD3',
        tabBarActiveTintColor: '#FF611D',
        tabBarStyle: {backgroundColor: '#101727'}
      }}
    >


      <Tab.Screen 
        name="SignedUp" 
        component={SS} 
        options={{
          tabBarIcon: ({color}) => (
            <Entypo name='check' size={32} color={'#1CC4A8'}/>
          ),
        }} 
      />

      <Tab.Screen 
        name="NearBy" 
        component={MS} 
        options={{
          tabBarIcon: ({color}) => (
            <Entypo name='network' size={32} color={'#1CC4A8'}/>
          ),
        }}
      />

      <Tab.Screen 
        name="Following"
        component={FScreen}
        options={{
          tabBarIcon: ({color}) => (
            <Entypo name='user' size={32} color={'#1CC4A8'}/>
          ),
        }} /
      >

    </Tab.Navigator>
  )
}

export default function App() {
  return (
    <NavigationContainer>
      <Stack.Navigator screenOptions={{headerShown: false}}>
        
        <Stack.Screen name="TabNavigator" component={TabNavigator}/>
        <Stack.Screen name="CreateEvent2" component={CreateEvent2} />


      </Stack.Navigator>
    </NavigationContainer>
  )
}

