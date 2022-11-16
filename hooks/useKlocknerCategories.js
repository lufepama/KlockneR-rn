import React, { useContext, useEffect, useState } from 'react'
import KlocknerCategoriesContext from '../context/KlocknerCategoriesContext'
import { getCredentials } from '../helper/index'

export const useKlocknerCategories = () => {

    const { categories, setCategories,
        isLoaded, setIsLoaded,
        headerOptions, setHeaderOptions,
        selectedSubcategory, setSelectedSubcategory
    } 
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

    const onSelectSubcategory = (myItem) => {
        const currentCategory = categories.filter((item)=> item.title == myItem.title )
        if (currentCategory[0]) {
            setSelectedSubcategory(currentCategory[0])
            setCategories(currentCategory[0].subcategories)
            return
        }
    }

    return { 
            categories,
            isLoaded, 
            headerOptions,
            selectedSubcategory,
            addItemHeader,
            deleteItemHeader,
            onSelectSubcategory
        }

}