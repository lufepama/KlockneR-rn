import { StyleSheet, Text, View, StatusBar, Dimensions, SafeAreaView, TouchableOpacity } from 'react-native'
import Header from '../components/Header/Header'
import TopHeader from '../components/Header/TopHeader'
import BottomTab from '../components/Menu/BottomTab'
import React from 'react'
import HeaderScreens from '../components/Shared/HeaderScreens'
import {useShop} from '../hooks/useShop'
import CartItemList from '../components/Cart/CartItemList'

import {Button} from '@rneui/themed'
import { useNavigation } from '@react-navigation/native'

const CartScreen = () => {

  const { isCartEmpty, getTotalItemsInCart } =useShop()
  const navigation = useNavigation()

  return (
    <SafeAreaView style={styles.mainContainer}>
      <TopHeader/>
      <HeaderScreens title='Carrito' iconName='shopping-cart' />
      <View style={styles.container}>
        <CartItemList/>
      </View>
      {
        !isCartEmpty() && <View style={styles.bottomCOntainer}>
        <View style={styles.subtotalContainer}>
          <View style={styles.itemsNumberContainer}>
            <Text style={styles.itemsText}>{getTotalItemsInCart()}</Text>
            <Text style={styles.itemstitleText}>Items</Text>
          </View>
          <View style={styles.subtotalDetailContainer}>
            <Text>Subtotal</Text>
            <Text>12</Text>
          </View>
          <View>
            <Button
              title="Finalizar pago"
              onPress={()=> navigation.navigate('Checkout')}
              buttonStyle={{
                borderColor: 'rgba(78, 116, 289, 1)',
              }}
              type="outline"
              raised
              titleStyle={{ color: 'rgba(78, 116, 289, 1)' }}
              containerStyle={{
                width: 200,
                marginHorizontal: 50,
                marginVertical: 10,
                alignSelf:'center'
              }}
            />
          </View>
        </View>
      </View>
      }
      
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
        width:'100%',
        flex:2,
        backgroundColor:'#2F2E2E',
    },
    bottomCOntainer:{
      backgroundColor:'#2F2E2E',
    },
    subtotalContainer: {
      height:150,
      backgroundColor:'white',
      borderTopLeftRadius:20,
      borderTopEndRadius:20,
      padding:15
    },
    itemsNumberContainer:{
      display:'flex',
      flexDirection:'row',
      width:'20%',
      justifyContent:'space-between'
    },
    itemsText:{
      fontSize:20,
      fontWeight:'bold'
    },
    itemstitleText:{
      fontSize:20,
      color:'gray'
    },
    subtotalDetailContainer:{
      width:'90%',
      display:'flex',
      flexDirection:'row',
      justifyContent:'space-between',
      borderBottomWidth:0.4,
    },
    
})