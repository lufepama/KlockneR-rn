import { StyleSheet, StatusBar, Dimensions, SafeAreaView, View, Text} from 'react-native'
import React from 'react'
import TopHeader from '../components/Header/TopHeader'
import BottomTab from '../components/Menu/BottomTab'
import HeaderScreens from '../components/Shared/HeaderScreens'

const CheckoutScreen = () => {
  return (
    <SafeAreaView style={styles.mainContainer}>
        <TopHeader/>
        <HeaderScreens title='Pago' iconName='credit-card-alt' />
        <View style={styles.container}>

        </View>
        <BottomTab/>
    </SafeAreaView>
  )
}

export default CheckoutScreen

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
})