import { StyleSheet, Text, View } from 'react-native'
import React from 'react'

const AlertMessage = ({title}) => {

  return (
    <View style={styles.container}>
      <Text style={styles.text}>{title}</Text>
    </View>
  )
}

export default AlertMessage

const styles = StyleSheet.create({
    container:{
        width:'70%',
        backgroundColor:'blue',
        marginBottom:5
    },
    text:{
        fontSize:20,
        color:'red'
    }
})