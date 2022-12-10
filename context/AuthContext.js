import React, { useState } from 'react'

const Context = React.createContext({})

export const AuthProvider = ({ children }) => {

    const [userInfo, setUserInfo] = useState({})
    const [token, setToken] = useState('')
    const [isUserLogged, setIsUserLogged] = useState(false)

    return (
        <Context.Provider value={{
            userInfo, setUserInfo,
            token, setToken,
            isUserLogged, setIsUserLogged
        }} >
            {children}
        </Context.Provider>
    )
}

export default Context