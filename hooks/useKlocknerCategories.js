import React, { useContext, useEffect, useState } from 'react'
import KlocknerCategoriesContext from '../context/KlocknerCategoriesContext'
import { fetchCategoryList } from '../helper/index'

export const useKlocknerCategories = () => {

    const { categories, setCategories,
        isLoaded, setIsLoaded,
        headerOptions, setHeaderOptions,
        selectedSubcategory, setSelectedSubcategory
    } 
        = useContext(KlocknerCategoriesContext)
    
    const addItemHeader = (item) => {
        const itemTitle = item.data.title
        const dicItem = {
            docId:item.id,
            title:itemTitle
        }
        const myHeader = headerOptions
        myHeader.push(dicItem)
        setHeaderOptions(myHeader)
    }

    const deleteItemHeader = () => {
        const myHeader = headerOptions
        myHeader.pop()
        setHeaderOptions(myHeader)
    }

    const onSelectSubcategory = async (myItem) => {
        try {
            const newCateoryList = await fetchCategoryList(myItem)
            if (newCateoryList.length > 0) {   
                setSelectedSubcategory(newCateoryList)
            }
        } catch (error) {
            console.log("Este no tiene hijos!")
        }
    }

    return {
            categories,
            isLoaded, 
            headerOptions,
            selectedSubcategory,
            addItemHeader,
            deleteItemHeader,
            onSelectSubcategory,
        }
}