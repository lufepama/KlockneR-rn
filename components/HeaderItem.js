import { StyleSheet, Text, TouchableOpacity, View } from 'react-native'
import React from 'react'
import { useKlocknerCategories } from '../hooks/useKlocknerCategories'
import { useHeader } from '../hooks/useHeader'

const HeaderItem = ({item}) => {

  const {updateHeader, headerOptions} = useHeader()
  
  return (
    <TouchableOpacity style={styles.container} 
        onPress={()=> {updateHeader(item)}}
        disabled={item.title == headerOptions[0].title ? true : false}
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