import React, { useState } from 'react'

const Context = React.createContext({})

export const ShopProvider = ({ children }) => {

    const [products, setProducts] = useState([])
    const [cart, setCart] = useState([])
    const [shopTitle, setShopTitle] = useState('')

    return (
        <Context.Provider value={{
                products, setProducts, 
                cart, setCart,
                shopTitle, setShopTitle,    
            }}>
            {children}
        </Context.Provider>
    )
}

export default Context