import { FlatList, SafeAreaView, StyleSheet, Text, View } from 'react-native'
import React from 'react'
import CategoryItem from './CategoryItem'
import { useKlocknerCategories } from '../hooks/useKlocknerCategories'

const ProductCategoryList = ({categoryList}) => {

  const {addItemHeader, onSelectSubcategory} = useKlocknerCategories()

  const onUpdateHeader = (item) => {
    addItemHeader(item)
  }


  return (
    <View style={styles.container}>
        <FlatList
            data={categoryList}
            numColumns={1}
            keyExtractor={(item)=>item.title}
            renderItem={({item}) => 
            <CategoryItem item={item} key={item.title} onUpdateHeader={onUpdateHeader} onSelectSubcategory={onSelectSubcategory}/>
          }
        />
    </View>
  )
}

const styles = StyleSheet.create({
  container: {
    width: '100%',
    backgroundColor:'#2F2E2E',
    paddingLeft: 25,
    paddingTop: 30
  }
})

export default ProductCategoryList
