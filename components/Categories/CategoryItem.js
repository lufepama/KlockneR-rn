import { StyleSheet, Text, View, Image, TouchableOpacity, Alert } from 'react-native'
import React from 'react'
import { useNavigation, useRoute} from '@react-navigation/native';
import { useShop } from '../../hooks/useShop';


const CategoryItem = ({item, onUpdateHeader, onSelectSubcategory}) => {

  const navigation = useNavigation()
  const route = useRoute()
  const { getProducts, updateShopTitle } = useShop()

  const handlePress = async () => {
    if (item.data?.hasProducts) {
      await getProducts(item.docId)
      updateShopTitle(item.data?.title)
      navigation.navigate('Shop')
      return
    }
    onUpdateHeader(item)
    onSelectSubcategory(item)
    if (route.name != 'Detail') {
      navigation.navigate('Detail')
    }
  }


  return (
    <View style={styles.root} key={item.docId}>
      <TouchableOpacity 
              style={styles.container} 
              activeOpacity={0.9} 
              onPress={()=>handlePress()}
              >
        <View style={styles.imageContainer}>
          <Image
            style={styles.image}
            source={{uri: item.data.image}}
          />
        </View>
        <View style={styles.textContainer}>
          <Text style={styles.title}>{item.data.title.toUpperCase()}</Text>
          <Text style={styles.products}>{item.data.products} productos</Text>
        </View>
      </TouchableOpacity>
    </View>
  )
}

const styles = StyleSheet.create({
    root:{
      marginTop:23,
      
    },
    container:{
      display:'flex',
      flexDirection: 'row',
      backgroundColor: 'white',
      height: 120,
      shadowColor: "#000000",
      shadowOffset: {
        width: 0,
        height: 2,
      },
      shadowOpacity: 0.23,
      shadowRadius: 2.62,
      
      elevation: 4,
    },
    imageContainer:{
      backgroundColor:'#2B2A2A',
      display: 'flex',
      flexDirection:'row',
      justifyContent:'center',
      alignItems: 'center'
    },
    image:{
      width: 110,
      height: 110,
    },
    textContainer:{
      paddingTop:10,
      paddingLeft:20,
      paddingBottom: 20,
      display: 'flex',
      flexDirection: 'column',
      justifyContent:'space-between'
    },
    title:{
      fontWeight:'bold'
    },
    products:{
      color:'#5C5C5C'
    }
})

export default CategoryItem