import { StyleSheet, Text, View, StatusBar, Dimensions, SafeAreaView } from 'react-native'
import Header from '../components/Header/Header'
import TopHeader from '../components/Header/TopHeader'
import BottomTab from '../components/Menu/BottomTab'
import React from 'react'

const CartScreen = () => {


  return (
    <SafeAreaView style={styles.mainContainer}>
      <TopHeader/>
      <View style={styles.container}>
        
      </View>
      <BottomTab/>
    </SafeAreaView>
  )
}

export default CartScreen

const windowHeight = Dimensions.get('window').height
const windowWidth = Dimensions.get('window').width

const styles = StyleSheet.create({
    mainContainer: {
        flex:1,
        paddingTop: Platform.OS === 'android' ? StatusBar.currentHeight: 0,
        height: windowHeight,
        width: windowWidth,
        display:'flex',
        flexDirection:'column',
    },
    container:{
        display: 'flex',
        flex:2,
        backgroundColor:'#2F2E2E',
    },
})