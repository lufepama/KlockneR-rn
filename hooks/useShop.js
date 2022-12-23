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

    const isCartEmpty = () => {
        if (cart.length == 0) return true
        return false
    }

    const getTotalItemsInCart = () => {
        let totalItems = 0;
        if (!isCartEmpty()) {
            cart.map((item) => {
                totalItems += item.number
            })
        }
        return totalItems
    }

    return {
        products,
        shopTitle,
        cart,
        getProducts,
        addItemCart,
        isItemInCart,
        updateShopTitle,
        isCartEmpty,
        getTotalItemsInCart
    }
}