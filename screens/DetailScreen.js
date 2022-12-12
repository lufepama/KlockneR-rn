import { SafeAreaView, StyleSheet,
  Platform, StatusBar, View, Dimensions, TouchableOpacity, Text, ActivityIndicator } 
  from 'react-native'
import React from 'react'
import ProductCategoryList from "../components/Categories/ProductCategoryList";
import BottomTab from '../components/Menu/BottomTab'
import Header from '../components/Header/Header';
import { useKlocknerCategories } from '../hooks/useKlocknerCategories';
import { useHeader } from '../hooks/useHeader';
import { useNavigation } from '@react-navigation/native';
import TopHeader from '../components/Header/TopHeader';


const DetailScreen = () => {

  const {selectedSubcategory, isLoading} = useKlocknerCategories()
  const {deleteItemHeader} = useHeader()
  const navigation = useNavigation()


  const handleBackBtn = () => {
    deleteItemHeader()
    navigation.goBack()
  }

  return (
    <SafeAreaView style={styles.mainContainer}>
      <TopHeader/>
      <Header/>
      <View style={styles.container}>
        <TouchableOpacity onPress={()=> handleBackBtn()}>
          <Text style={styles.title}>Atras</Text>
        </TouchableOpacity>
        <View>
          {
            isLoading
            ? <ActivityIndicator size={'large'} color='#0000ff' />
            : <ProductCategoryList categoryList={selectedSubcategory} />
          }
          
        </View>
      </View>
      <BottomTab/>
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
    display:'flex',
    flexDirection:'column',
  },
  container:{
    display: 'flex',
    flex:2,
    backgroundColor:'#2F2E2E',
  },
  title: {
    color:'white'
  }
})