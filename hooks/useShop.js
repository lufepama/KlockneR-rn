import React, { useEffect, useContext} from 'react'
import ShopContext from '../context/ShopContext' 
import {fetchProducts} from '../helper/index'

export const useShop = () => {

    const {products, setProducts, cart, setCart} = useContext(ShopContext);

    const getProducts = async (foreignKey) => {
        const products = await fetchProducts(foreignKey)
        setProducts(products)
    }

    const addItemCart = (item, number) => {
        const fullData = {
            detail: item,
            number,
            productId:item.docId,
        }
        setCart([...cart, fullData])
    }

    const showCart = () => {
        console.log({cart})
    }

    useEffect(() => {

    }, [])

    return {
        products,
        getProducts,
        addItemCart,
        showCart
    }

}