import React, { useEffect, useState } from 'react'
import {db, mainItemsCol} from '../firebase'
import { doc, getDocs, collection } from "firebase/firestore";

const Context = React.createContext({})

export const KlocknerCategoriesProvider = ({ children }) => {

    const [categories, setCategories] = useState([])
    const [selectedSubcategory, setSelectedSubcategory ] = useState([])
    const [isLoaded, setIsLoaded] = useState(false)
    const [headerOptions, setHeaderOptions] = useState([
        {
            docId:'',
            title:'Klockner'
        }
    ])

    const fetchData = async () => {
        
        const querySnapshot = await getDocs(mainItemsCol)
        const myData = []
        querySnapshot.forEach((data) => {
            if (data.data().isMain) {
                const fullData = {
                    docId: data.id,
                    data:data.data()
                }
                myData.push(fullData)
            }
        } )
        setCategories(myData)
    }
    
    useEffect(()=> {
        fetchData()
    },[])

    return (
        <Context.Provider value={{
            categories, setCategories,
            isLoaded, setIsLoaded,
            headerOptions, setHeaderOptions,
            selectedSubcategory, setSelectedSubcategory
         }} >
            {children}
        </Context.Provider>
    )
}

export default Context