import { StyleSheet, Text, View, Dimensions, Image } from 'react-native'
import React from 'react'
import Icon from 'react-native-vector-icons/FontAwesome'

const windowHeight = Dimensions.get('window').height


const MainLayout = ({children}) => {
  return (
    <View style={styles.root}>
        <View style={styles.container}>
            <View style={styles.superHeaderContainer}>
                <Image
                    style={styles.image}
                />
            </View>
            <Text>Header!</Text>
            <Icon
                name='bars'
                size={20}
            />
        </View>
      {children}
    </View>
  )
}

export default MainLayout

const styles = StyleSheet.create({
    root:{
        height:windowHeight
    },
    container: {
        height: 70,
        display: 'flex',
        flexDirection:''
    },
    superHeaderContainer: {
        display: 'flex',
        flexDirection: 'row-reverse'
    },
    image :{
        width: 30,
        height: 30
    }
})