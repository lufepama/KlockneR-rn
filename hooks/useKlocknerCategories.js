import React, { useContext, useEffect, useState } from 'react'
import KlocknerCategoriesContext from '../context/KlocknerCategoriesContext'
import { getCredentials } from '../helper/index'

export const useKlocknerCategories = () => {

    const { categories, setCategories,
        isLoaded, setIsLoaded,
        headerOptions, setHeaderOptions} 
        = useContext(KlocknerCategoriesContext)
    
    const addItemHeader = (item) => {
        const itemTitle = item.title
        const myHeader = headerOptions
        myHeader.push(itemTitle)
        setHeaderOptions(myHeader)
    } 

    const deleteItemHeader = () => {
        const myHeader = headerOptions
        myHeader.pop()
        setHeaderOptions(myHeader)
    }

    return { 
            categories,
            isLoaded, 
            headerOptions,
            addItemHeader,
            deleteItemHeader
        }

}