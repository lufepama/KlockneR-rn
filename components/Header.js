import { StyleSheet, Text,Image, View, TouchableOpacity, FlatList } from 'react-native'
import React from 'react'
import Icon from 'react-native-vector-icons/FontAwesome'
import { useKlocknerCategories } from '../hooks/useKlocknerCategories'
import HeaderItem from './HeaderItem'

const Header = () => {

  const {headerOptions} = useKlocknerCategories()
  
  

  return (
    <View style={styles.root}>
      <View style={styles.upperContainer}>
        <Image
          style={styles.image}
          source= {{uri:'https://pbs.twimg.com/profile_images/1085092808527151106/9u65sUeD_400x400.jpg'}}
        />
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
              keyExtractor={(item)=>item}
              renderItem={({item}) => 
                <HeaderItem item={item} />
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
    flexDirection:'row-reverse',
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
  }
})