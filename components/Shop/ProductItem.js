import { StyleSheet, Text, View, TouchableOpacity, Image } from 'react-native'
import React, {useEffect, useState} from 'react'
import Icon from 'react-native-vector-icons/FontAwesome'
import { useShop } from '../../hooks/useShop'

const ProductItem = ({item}) => {

  const [counter, setCounter] = useState(0)
  const [isInCart, setIsInCart] = useState(false)
  const { isItemInCart, addItemCart } = useShop()
 
  const handleAddItem = () => {
    if (counter>0) {
      addItemCart(item, counter)
      setIsInCart(true)
    }
  }

  const setInitialValues = () => {
    const res = isItemInCart(item.docId)
    if (res) {
      setCounter(res.number)
      setIsInCart(true)
    }
  }
 
  useEffect(()=> {
    setInitialValues()
  },[])

  return (
    <View style={styles.root} key={item.docId}>
        <View 
            style={styles.container} 
            activeOpacity={0.9} 
            onPress={()=>handlePress()}
          >
        <View style={styles.imageContainer}>
          <Image
            style={styles.image}
            source={{uri: item.data.image}}
          />
        </View>
        <View style={styles.contentContainer}>
          <Text style={styles.title}>{item.data.title.toUpperCase()}</Text>
          <Text style={styles.price}>{item.data.price}€</Text>
          <View style={styles.cartBtnsContainer}>
            <TouchableOpacity style={styles.cartBtn} onPress={()=> {
              if (counter>0) {
                setCounter(prev => prev-1)
              }
            }} disabled={isInCart}>
              <Icon 
                name='minus'
                size={20}
              />
            </TouchableOpacity>
            <Text>{counter}</Text>
            <TouchableOpacity style={styles.cartBtn} onPress={() => {setCounter(prev => prev+1)}} disabled={isInCart}>
              <Icon 
                name='plus'
                size={20}
              />
            </TouchableOpacity>
        </View>
        <TouchableOpacity style={styles.addBtn} onPress={ () => {handleAddItem()}} disabled={isInCart}>
            {
              isInCart
              ? <Text style={styles.addText}>Ya lo tienes</Text>
              : <Text style={styles.isAddedText}>Add</Text>
            }
        </TouchableOpacity>
        </View>
      </View>
    </View>
  )
}

export default ProductItem

const styles = StyleSheet.create({
  root:{
    marginTop:23,
    display:'flex',
    flexDirection:'column'
  },
  container:{
    display:'flex',
    flexDirection: 'row',
    backgroundColor: 'white',
    height: 120,
    shadowColor: "#000000",
    shadowOffset: {
      width: 0,
      height: 2,
    },
    shadowOpacity: 0.23,
    shadowRadius: 2.62,
    
    elevation: 4,
  },
  imageContainer:{
    backgroundColor:'#2B2A2A',
    display: 'flex',
    flexDirection:'row',
    justifyContent:'center',
    alignItems: 'center'
  },
  image:{
    width: 110,
    height: 110,
  },
  contentContainer:{
    paddingTop:10,
    paddingLeft:20,
    paddingBottom: 20,
    display: 'flex',
    flexDirection: 'column',
    justifyContent:'space-between'
  },
  title:{
    fontWeight:'bold'
  },
  cartBtnsContainer: {
    display:'flex',
    flexDirection:'row',
    justifyContent:'space-between',
    alignSelf:'center',
    width:'50%',
  },
  addBtn:{
    width:'50%',
    backgroundColor:'#61CF52',
    alignItems:'center',
    borderRadius:20,
    alignSelf:'center',
  },
  addText: {
    fontSize:17
  },
  price:{
    fontSize:15


  }
})