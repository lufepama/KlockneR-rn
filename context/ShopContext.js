import React, { useState } from 'react'

const Context = React.createContext({})

export const ShopProvider = ({ children }) => {

    const [products, setProducts] = useState([])
    const [cart, setCart] = useState([])

    return (
        <Context.Provider value={{
                products, setProducts, 
                cart, setCart}}>
            {children}
        </Context.Provider>
    )
}

export default Context