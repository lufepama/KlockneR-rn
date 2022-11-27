import React, { useEffect, useState } from 'react'
import {db, mainItemsCol} from '../firebase'
import { doc, getDocs, collection } from "firebase/firestore";

const Context = React.createContext({})

export const KlocknerCategoriesProvider = ({ children }) => {

    const [categories, setCategories] = useState([])
    const [selectedSubcategory, setSelectedSubcategory ] = useState([])
    const [isLoading, setIsLoading] = useState(false)

    const fetchData = async () => {
        setIsLoading(true)
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
        if (myData.length>0){
            setCategories(myData)
            setIsLoading(false)
        }
        
    }
    
    useEffect(()=> {
        fetchData()
    },[])

    return (
        <Context.Provider value={{
            categories, setCategories,
            isLoading, setIsLoading,
            selectedSubcategory, setSelectedSubcategory
         }} >
            {children}
        </Context.Provider>
    )
}

export default Context