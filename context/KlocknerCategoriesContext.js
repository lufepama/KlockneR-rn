import React, { useEffect, useState } from 'react'
import {db} from '../firebase'
import { doc, getDocs, collection } from "firebase/firestore";

const Context = React.createContext({})

export const KlocknerCategoriesProvider = ({ children }) => {

    const [categories, setCategories] = useState([])
    const [isLoaded, setIsLoaded] = useState(false)
    const [headerOptions, setHeaderOptions] = useState([])

    const fetchData = async () => {
        const querySnapshot = await getDocs(collection(db, "category"));
        querySnapshot.forEach((doc) => {
          if (doc.data().data) {
            setCategories(doc.data().data.subcategories)
            setIsLoaded(true)
          }
        });
      }

    useEffect(()=> {
        fetchData()
    },[])

    return (
        <Context.Provider value={{
            categories, setCategories,
            isLoaded, setIsLoaded,
            headerOptions, setHeaderOptions
         }} >
            {children}
        </Context.Provider>
    )
}

export default Context