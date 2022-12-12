import React, { useEffect, useContext} from 'react'
import ShopContext from '../context/ShopContext' 
import {fetchProducts} from '../helper/index'

export const useShop = () => {

    const {products, setProducts, cart, setCart, shopTitle, setShopTitle} = useContext(ShopContext);

    const getProducts = async (foreignKey) => {
        const products = await fetchProducts(foreignKey)
        setProducts(products)
    }

    const addItemCart = (item, number) => {

        const isInCart = isItemInCart(item.docId)
        if (!isInCart) {
            const fullData = {
            detail: item,
            number,
            productId:item.docId,
        }
        setCart([...cart, fullData])
        }
    }

    const isItemInCart = (itemId) => {
        const isInCart = cart.filter(item => item.productId == itemId)
        if (isInCart.length == 0) return false
        return isInCart[0]
    }

    const updateShopTitle = (title) => {
        if (title) {
            setShopTitle(title) 
        }
    }

    return {
        products,
        shopTitle,
        getProducts,
        addItemCart,
        isItemInCart,
        updateShopTitle,
    }
}