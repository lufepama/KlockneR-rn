import { StyleSheet, Text, TouchableOpacity, View } from 'react-native'
import React from 'react'
import { useHeader } from '../../hooks/useHeader'
import { useNavigation } from '@react-navigation/native'

const HeaderItem = ({item}) => {

  const {updateHeader} = useHeader()
  const navigation = useNavigation()
  
  return (
    <TouchableOpacity style={styles.container} 
        onPress={()=> {
          if (item.title == 'Klockner') {navigation.navigate('Home')}
          {updateHeader(item)}
        }}
        
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