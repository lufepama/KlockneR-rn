import { StyleSheet, Text, View, Dimensions, StatusBar, SafeAreaView} from 'react-native'
import React from 'react'
import { useShop } from '../hooks/useShop'
import ProductList from '../components/Shop/ProductList'
import TopHeader from '../components/Header/TopHeader'
import BottomTab from '../components/Menu/BottomTab'

const windowHeight = Dimensions.get('window').height
const windowWidth = Dimensions.get('window').width

const ShopScreen = () => {
  
  const {shopTitle} = useShop()

  return (
    <SafeAreaView style={styles.mainContainer}>
      <TopHeader/>
      <View style={styles.shopHeaderContainer}>
        <Text style={styles.shopTitle}>{shopTitle}</Text>
      </View>
      <ProductList />
      <BottomTab/>
    </SafeAreaView>
  )
}

export default ShopScreen

const styles = StyleSheet.create({
  mainContainer: {
    flex:1,
    paddingTop: Platform.OS === 'android' ? StatusBar.currentHeight: 0,
    height: windowHeight,
    width: windowWidth,
  },
  shopHeaderContainer: {
    alignSelf:'center',
  },
  shopTitle: {
    fontSize: 27,
    fontWeight: 'bold'
  }
})