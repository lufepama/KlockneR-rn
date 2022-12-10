import { StyleSheet, Text,Image, View, TouchableOpacity, FlatList, Alert } from 'react-native'
import React from 'react'
import Icon from 'react-native-vector-icons/FontAwesome'
import HeaderItem from './HeaderItem'
import { useHeader } from '../hooks/useHeader'
import { useAuth } from '../hooks/useAuth'

const Header = () => {

  const { headerOptions } = useHeader()
  const { isUserLogged, onLogout } = useAuth()
  
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
      <View style={styles.lowerContainer}>
        <TouchableOpacity 
          activeOpacity={0.6}
          onPress={()=> {console.log('preessse')}}
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
    height:120,
    display:'flex',
    flexDirection:'column'
  },
  upperContainer:{ 
    display:'flex',
    flexDirection:'row',
    justifyContent:'space-between',
    alignItems: 'flex-end',
    backgroundColor: 'black',
    height:30,
    flex:1
  },
  image:{
    width: 50,
    height: 50
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