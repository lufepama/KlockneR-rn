import { FlatList, SafeAreaView, StyleSheet, Text, View } from 'react-native'
import React from 'react'
import CategoryItem from './CategoryItem'

const ProductCategoryList = ({categoryList}) => {

  return (
    <View style={styles.container}>
        <FlatList
            data={categoryList}
            numColumns={1}
            keyExtractor={(item)=>item.id.toString()}
            renderItem={({item}) => 
            <CategoryItem item={item} key={item.id.toString()}/>
          }
        />
    </View>
  )
}


const styles = StyleSheet.create({
  container: {
    width: '100%',
    flex:1,
    backgroundColor:'#2F2E2E',
    paddingLeft: 25,
    paddingTop: 30
  }
})

export default ProductCategoryList
