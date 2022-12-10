import { SafeAreaView, StyleSheet,
    Platform, StatusBar, View, Dimensions, TouchableOpacity, Text, ActivityIndicator } 
    from 'react-native'
import React, { useState } from 'react'
import Header from '../components/Header'
import { Input,  } from '@rneui/themed'
import Icon from 'react-native-vector-icons/FontAwesome'

const LoginScreen = () => {

    const [userData, setUserData] = useState({
        email:'',
        password:'',
        password2:''
    })

    const {email, password, password2} = userData

  return (
    <View style={styles.mainContainer}>
        <Header/>
        <View style={styles.boxContainer}>
                <Text style={styles.title}>
                    Login
                </Text>
            <View style={styles.inputContainer}>
               
                <Input
                    placeholder="Email"
                    leftIcon={{ type: 'font-awesome', name: 'user' }}
                    style={{marginLeft:20}}
                    onChangeText={value => setUserData({...userData, email:value})}
                />
                <Input
                    placeholder="Password"
                    leftIcon={{ type: 'font-awesome', name: 'lock' }}
                    style={{marginLeft:20}}
                    secureTextEntry={true}
                    onChangeText={value => setUserData({...userData, password:value})}
                />
            </View>
            <View style={styles.bottonsContainer}>
                <TouchableOpacity style={styles.signupBtn}>
                    <Text style={styles.textBtn}>Login</Text>
                </TouchableOpacity>
            </View>
            <View style={styles.signupOptionsContainer}>
                <TouchableOpacity style={styles.googleBtn}>
                  <Icon
                    name={'google'}
                    style={styles.googleIcon}
                  />
                    <Text style={styles.textBtn}>Google</Text>
                </TouchableOpacity>
            </View>
        </View>
    </View>
  )
}

export default LoginScreen

const windowHeight = Dimensions.get('window').height
const windowWidth = Dimensions.get('window').width

const styles = StyleSheet.create({
    mainContainer:{
        flex:1,
        paddingTop: Platform.OS === 'android' ? StatusBar.currentHeight: 0,
        height: windowHeight,
        width: windowWidth,
    },
    boxContainer: {
        flex:0.5,
        display:'flex',
        flexDirection:'column',
        alignItems:'center',
        paddingTop:30
    },
    inputContainer: {
        width:'80%',
    },
    title: {
        fontSize:30,
        fontWeight:'bold'
    },
    bottonsContainer: {},
    signupBtn:{
        width:200,
        height:40,
        backgroundColor:'#26F3B2',
        borderRadius:15
    },
    textBtn: {
        fontSize:25,
        alignSelf:'center'
    },
    signupOptionsContainer: {
        marginTop:40
    },
    googleBtn:{
        display:'flex',
        flexDirection:'row',
        backgroundColor:'#4285F4',
        width:200,
        height:40,
        borderRadius:15
    },
    googleIcon: {
        fontSize:35,
        marginRight:10,

    },

})