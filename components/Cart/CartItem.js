import { StyleSheet, Text, View, Image, TouchableOpacity} from 'react-native'
import React, { useState } from 'react'
import Icon from 'react-native-vector-icons/FontAwesome'

const CartItem = ({item}) => {

    const [numberItem, setNumberItem] = useState(item.number)

  return (
    <View style={styles.mainContainer}>
        <View style={styles.infoContainer}>
            <Image
                style={styles.image}
                source={{uri: item.detail.data.image}}
            />
            <View style={styles.bodyContainer}>
            <Text style={styles.title}>{item.detail.data.title}</Text>
            <Text style={styles.subTitle}>{item.detail.data.description}</Text>
            <View style={styles.price}> 
                
            </View>
        </View>
        </View>
        <View style={styles.cartBtnsContainer}>
                <TouchableOpacity>
                    <Icon
                       name='minus'
                       size={25}
                    />
                </TouchableOpacity>
                <Text style={styles.priceText}>{numberItem}</Text>
                <TouchableOpacity>
                    <Icon
                        name='plus'
                        size={25}
                    />
                </TouchableOpacity>
        </View>
        
    </View>
  )
}

export default CartItem

const styles = StyleSheet.create({
    mainContainer: {
        height: 140,
        width:'100%',
        marginTop:10,
        backgroundColor:'white',
        display:'flex',
    },
    infoContainer: {
        display: 'flex',
        flexDirection:'row',
    },
    image: {
        width: 80,
        height: 80,
    },
    bodyContainer: {
        marginLeft:15,
        display:'flex',
        flexDirection:'column'
    },
    cartBtnsContainer: {
        display:'flex',
        flexDirection:'row',
        justifyContent:'space-between',
        borderWidth:1,
        borderColor:'gray',
        marginTop:10,
    },
    priceText: {
        fontSize:22,
        marginTop:-5
    },
    title: {
        fontSize:16,
        fontWeight:'bold'
    }
})