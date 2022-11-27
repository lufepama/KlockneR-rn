import React, { useState } from 'react'

const Context = React.createContext({})

export const HeaderProvider = ({ children }) => {

    const [headerOptions, setHeaderOptions] = useState([
        {
            docId:'klockner',
            title:'Klockner'
        }
    ])

    return (
        <Context.Provider value={{headerOptions,setHeaderOptions}} >
            {children}
        </Context.Provider>
    )
}

export default Context