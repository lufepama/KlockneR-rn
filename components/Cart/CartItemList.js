import { StyleSheet, Text, View, FlatList} from 'react-native'
import React from 'react'
import { useShop } from '../../hooks/useShop'
import CartItem from './CartItem'

const CartItemList = () => {

    const { cart } = useShop();
    

    return (
        <View style={styles.container}>
            <FlatList
                data={cart}
                numColumns={1}
                keyExtractor={item => item.docId}
                renderItem={({item}) => 
                    <CartItem key={item.detail.docId} item={item} />
                }
            />
        </View>
  )
}

export default CartItemList

const styles = StyleSheet.create({
    container: {
        width:'100%',
        display:'flex',
        flexDirection:'column',
        paddingHorizontal:15
    }
})