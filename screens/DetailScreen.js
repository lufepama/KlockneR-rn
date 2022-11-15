import { SafeAreaView, StyleSheet,
  Platform, StatusBar, View, Dimensions } 
  from 'react-native'
import React from 'react'
import ProductCategoryList from "../components/ProductCategoryList";
import BottomTab from '../components/BottomTab'
import Header from '../components/Header';

const DetailScreen = () => {
  return (
    <SafeAreaView style={styles.mainContainer}>
      <Header/>
      <View style={styles.container}>
        <BottomTab/>
      </View>
    </SafeAreaView>
  )
}

const windowHeight = Dimensions.get('window').height
const windowWidth = Dimensions.get('window').width

export default DetailScreen

const styles = StyleSheet.create({
  mainContainer:{
    flex:1,
    paddingTop: Platform.OS === 'android' ? StatusBar.currentHeight: 0,
    height: windowHeight,
    width: windowWidth,
  },
  container:{
    display: 'flex',
    justifyContent:'space-between',
    flex:1
  }
})