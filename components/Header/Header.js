import { StyleSheet, Text,Image, View, TouchableOpacity, FlatList, Alert } from 'react-native'
import React from 'react'
import Icon from 'react-native-vector-icons/FontAwesome'
import HeaderItem from '../Header/HeaderItem'
import { useHeader } from '../../hooks/useHeader'
import { useAuth } from '../../hooks/useAuth'

const Header = () => {

  const { headerOptions } = useHeader()
  const { onLogout } = useAuth()
  
  const handleLogout = async () => {
    await onLogout()
  }

  const createLogoutAlert = () => {
    Alert.alert(
      'Cerrar sesion',
      'Estas seguro que quieres cerrar sesion?',
      [
        {
          text:'Si',
          onPress: async () => handleLogout()
        },
        {
          text:'Cancelar',
          style:'cancel'
        }
      ]
    )
  }

  return (
    <View style={styles.root}>
      <View style={styles.lowerContainer}>
        <TouchableOpacity 
          activeOpacity={0.6}
          >
          <Icon 
            name='bars'
            size={35}
          />
        </TouchableOpacity>
        <View style={styles.titleContainer}>
            <FlatList
              data={headerOptions}
              numColumns={1}
              horizontal={true}
              keyExtractor={item=>item.docId}
              renderItem={({item}) => 
                <HeaderItem item={item} key={item.docId}/>
              }
            />
        </View>
      </View>
    </View>
  )
}

export default Header

const styles = StyleSheet.create({
  root:{
    height:70,
    display:'flex',
    flexDirection:'column'
  },
  lowerContainer: {
      height:60,
      padding:10,
      display:'flex',
      flexDirection: 'row'
  },
  titleContainer:{
    display:'flex',
    flexDirection:'row',
    alignItems:'center'
  },
  title:{
    marginLeft:30,
    fontSize: 20,
    fontWeight: 'bold'
  },
  logoutBtn:{

  }
})