import { StyleSheet, Text, View, Image, Alert } from 'react-native'
import React from 'react'
import { useAuth } from '../../hooks/useAuth'
import Icon from 'react-native-vector-icons/FontAwesome'


const TopHeader = () => {

  const { isUserLogged, onLogout} = useAuth()

  const createLogoutAlert = () => {
    Alert.alert(
      'Cerrar sesion',
      'Estas seguro que quieres cerrar sesion?',
      [
        {
          text:'Si',
          onPress: async () => onLogout()
        },
        {
          text:'Cancelar',
          style:'cancel'
        }
      ]
    )
  }


  return (
    <View style={styles.upperContainer}>
        <Image
          style={styles.image}
          source= {{uri:'https://pbs.twimg.com/profile_images/1085092808527151106/9u65sUeD_400x400.jpg'}}
        />

        { 
          isUserLogged && <Icon
            onPress={()=>{
              createLogoutAlert()
            }}
            name='sign-out'
            color={'white'}
            style={styles.logoutBtn}
            size={35}
          />
        }
      </View> 
  )
}

export default TopHeader

const styles = StyleSheet.create({
    upperContainer: {
        display:'flex',
        flexDirection:'row',
        justifyContent:'space-between',
        alignItems: 'flex-end',
        backgroundColor: 'black',
        height:30,
        flex:0.2
    },
    image:{
        width: 50,
        height: 50
    },
})