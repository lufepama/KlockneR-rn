import { SafeAreaView, StyleSheet,
    Platform, StatusBar, View, Dimensions } 
    from 'react-native'
import React, { useEffect, useState } from 'react'
import ProductCategoryList from "../components/ProductCategoryList";
import BottomTab from '../components/BottomTab'
import Header from '../components/Header';
import dataFirebase from '../firebaseConfig'
import { getDatabase, ref, onValue} from "firebase/database";

const data = [
    {
        id:1,
        title:'Implates',
        products:23,
    },
    {
        id:2,
        title:'Sistemas protesicos',
        products:34,
    },
    {
        id:3,
        title:'Secuencia quirurgica',
        products:56,
    },
    {
        id:4,
        title:'Cirgugia avanzada',
        products:51,
    },
    {
        id:5,
        title:'Cirgugia avanzada',
        products:51,
    },
    {
        id:6,
        title:'Cirgugia avanzada',
        products:51,
    }
]

const windowHeight = Dimensions.get('window').height
const windowWidth = Dimensions.get('window').width

const HomeScreen = () => {

  const {firebase, firestore} = dataFirebase

  const [categories, setCategories] = useState([])

  const fetchData = async () => {
  }

  useEffect(()=>{
    fetchData()
  },[])


  return (
    <SafeAreaView style={styles.mainContainer}>
      <Header/>
      <View style={styles.container}>
        <ProductCategoryList categoryList={data}  />
        <BottomTab/>
      </View>
    </SafeAreaView>
  )
}

export default HomeScreen

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