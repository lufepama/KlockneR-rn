import { FlatList, SafeAreaView, StyleSheet, Text, View } from 'react-native'
import React from 'react'
import CategoryItem from '../Categories/CategoryItem'
import { useKlocknerCategories } from '../../hooks/useKlocknerCategories'
import {useHeader} from '../../hooks/useHeader'

const ProductCategoryList = ({categoryList}) => {

  const {onSelectSubcategory} = useKlocknerCategories()
  const {addItemHeader} = useHeader()

  const onUpdateHeader = (item) => {
    addItemHeader(item)
  }
  
  return (
    <View style={styles.container}>
        <FlatList
            data={categoryList}
            numColumns={1}
            keyExtractor={item => item.docId}
            renderItem={({item}) => 
            <CategoryItem item={item} key={item.docId} onUpdateHeader={onUpdateHeader} onSelectSubcategory={onSelectSubcategory}/>
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
