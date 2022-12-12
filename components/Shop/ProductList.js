import { FlatList, StyleSheet, Text, View } from 'react-native'
import React from 'react'
import { useShop } from '../../hooks/useShop'
import ProductItem from './ProductItem'

const ProductList = () => {
    
    const {products} = useShop();

    return (
        <View style={styles.container}>
            <FlatList
                data={products}
                numColumns={1}
                keyExtractor={item => item.docId}
                renderItem={(item) => 
                    <ProductItem key={item.docId} item={item.item} />
                }
            />
        </View>
    )
}

export default ProductList

const styles = StyleSheet.create({
    container: {
        width: '100%',
        backgroundColor:'#2F2E2E',
        paddingLeft: 25,
        paddingTop: 30,
        flex:2
    }
})