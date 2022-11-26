import { StyleSheet, Text, TouchableOpacity, View } from 'react-native'
import React from 'react'

const HeaderItem = ({item}) => {

  return (
    <TouchableOpacity style={styles.container} 
        onPress={()=> {}}
        >
      <Text style={styles.title}>{item.title.toUpperCase()}</Text>
    </TouchableOpacity>
  )
}

export default HeaderItem

const styles = StyleSheet.create({
    container:{
        marginLeft:20
    },
    title:{
        fontSize:20,
    }
})