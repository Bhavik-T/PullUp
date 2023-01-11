import React from "react";
import { StyleSheet, Text, View, SafeAreaView, Image, ScrollView, ImageBackground, Pressable} from "react-native";
import { Ionicons, MaterialIcons } from "@expo/vector-icons";



const FScreen = ({navigation}) => {

    
  
    return (
            <View style={{backgroundColor: '#101727', height: 1400}}>
                    <View style={{ alignSelf: "center", marginTop: '15%'}}>
                        <View style={styles.profileImage}>
                            <Image source={require('../IMG_5531.jpg')} style={styles.image} resizeMode="center"></Image>
                        </View>
                        <View style={styles.active}></View>
                    </View>

                    <View style={styles.infoContainer}>
                        <Text style={[styles.text2, { fontWeight: "200", fontSize: 36 }]}>Bhavik</Text>
                        <Text style={[styles.text, { color: "#CCCFD3", fontSize: 14 }]}>CMU Student</Text>
                    </View>

                    <View style={styles.statsContainer}>
                        <View style={styles.statsBox}>
                            <Text style={[styles.text, { fontSize: 24 }]}> 12 </Text>
                            <Text style={[styles.text, styles.subText]}>Points</Text>
                        </View>
                        <View style={[styles.statsBox, { borderColor: "#C8EEF9", borderLeftWidth: 1, borderRightWidth: 1 }]}>
                            <Text style={[styles.text, { fontSize: 24 }]}> 5 </Text>
                            <Text style={[styles.text, styles.subText]}>Badges</Text>
                        </View>
                        <View style={styles.statsBox}>
                            <Text style={[styles.text, { fontSize: 24 }]}>302</Text>
                            <Text style={[styles.text, styles.subText]}>Event Count</Text>
                        </View>
                    </View>    
      </View>
    )
} 

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: "black"
    },
    container2: {
       marginBottom: 10,
    },
    text: {
        fontFamily: "HelveticaNeue",
        color: "#c8eef9"
    },
    text2: {
        fontFamily: "HelveticaNeue",
        color: "#CCCFD3"
    },
    image: {
        flex: 1,
        height: undefined,
        width: undefined
    },
    titleBar: {
        flexDirection: "row",
        justifyContent: "space-between",
        marginTop: 24,
        marginHorizontal: 16
    },
    subText: {
        fontSize: 12,
        color: "#1cc4a8",
        textTransform: "uppercase",
        fontWeight: "500"
    },
    profileImage: {
        width: 150,
        height: 150,
        borderRadius: 100,
        overflow: "hidden"
    },
    active: {
        backgroundColor: "#34FFB9",
        position: "absolute",
        bottom: 28,
        padding: 4,
        height: 20,
        width: 20,
        borderRadius: 10
    },
    add: {
        backgroundColor: "#41444B",
        position: "absolute",
        bottom: 0,
        right: -10,
        width: 60,
        height: 60,
        borderRadius: 30,
        alignItems: "center",
        justifyContent: "center"
    },
    infoContainer: {
        alignSelf: "center",
        alignItems: "center",
        marginTop: 10
    },
    statsContainer: {
        flexDirection: "row",
        alignSelf: "center",
        marginTop: '5%', 
        marginBottom: '5%', 
        backgroundColor: "#41444B",
        width: '95%',
        height: 50,
        borderRadius: 10,
    },
    statsBox: {
        alignItems: "center",
        flex: 1
    },
});


export default FScreen