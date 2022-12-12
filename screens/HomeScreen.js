import { SafeAreaView, StyleSheet,
    Platform, StatusBar, View, Dimensions, ActivityIndicator } 
    from 'react-native'
import React, { useCallback, useEffect } from 'react'
import ProductCategoryList from "../components/Categories/ProductCategoryList";
import BottomTab from '../components/Menu/BottomTab'
import TopHeader from '../components/Header/TopHeader';
import Header from '../components/Header/Header';
import {useKlocknerCategories} from '../hooks/useKlocknerCategories'

import "firebase/auth/react-native"
import { useHeader } from '../hooks/useHeader';
import { useFocusEffect, useNavigation } from '@react-navigation/native';
import { retrieveToken } from '../storage';

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

  const {categories, isLoading} = useKlocknerCategories()
  const navigation = useNavigation()
  const {resetHeaderOptions} = useHeader()

  useFocusEffect(
    useCallback(()=>{
      resetHeaderOptions()
      retrieveToken()
    },[])
  )

  return (
    <SafeAreaView style={styles.mainContainer}>
      <TopHeader/>
      <Header/>
      
      <View style={styles.container}>
        {
          isLoading 
          ? <ActivityIndicator size={'large'} color='#0000ff' />
          : <ProductCategoryList categoryList={categories}  />
        }
        
      </View>
      <BottomTab/>
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
    display:'flex',
    flexDirection:'column',
  },
  container:{
    display: 'flex',
    justifyContent:'space-between',
    backgroundColor:'#2F2E2E',
    flex:2
  }
})