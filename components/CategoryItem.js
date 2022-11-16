import { StyleSheet, Text, View, Image, TouchableOpacity } from 'react-native'
import React from 'react'
import { useNavigation } from '@react-navigation/native';


const CategoryItem = ({item, onUpdateHeader}) => {

  const navigation = useNavigation()

  return (
    <View style={styles.root}>
      <TouchableOpacity 
              style={styles.container} 
              activeOpacity={0.9} 
              onPress={()=>{
                onUpdateHeader(item)
                navigation.navigate('Detail')
              }}
              
              >
        <View style={styles.imageContainer}>
          <Image
            style={styles.image}
            source={{uri:'https://reactnative.dev/img/tiny_logo.png'}}
          />
        </View>
        <View style={styles.textContainer}>
          <Text style={styles.title}>{item.title.toUpperCase()}</Text>
          <Text style={styles.products}>{item.products} productos</Text>
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