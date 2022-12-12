import { StyleSheet, Text, View } from 'react-native'
import React from 'react'
import Icon from 'react-native-vector-icons/FontAwesome'

const HeaderScreens = ({title, iconName}) => {

  return (
    <View style={styles.mainContainer}>
      <Icon
        name={iconName || 'user'}
        size={30}
      />
      <Text style={styles.title}>{title}</Text>
    </View>
  )
}

export default HeaderScreens

const styles = StyleSheet.create({
  mainContainer: {
    alignSelf:'center',
    display:'flex',
    flexDirection:'row'
  },
  title: {
    fontSize:25,
    marginLeft:20
  }
})