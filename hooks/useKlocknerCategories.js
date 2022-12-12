import React, { useContext, useEffect, useState } from 'react'
import KlocknerCategoriesContext from '../context/KlocknerCategoriesContext'
import { fetchCategoryList } from '../helper/index'

export const useKlocknerCategories = () => {

    const { categories, setCategories,
        isLoading, setIsLoading,
        selectedSubcategory, setSelectedSubcategory
    } = useContext(KlocknerCategoriesContext)
    
    const onSelectSubcategory = async (myItem) => {
        try {
            setIsLoading(true)
            const newCateoryList = await fetchCategoryList(myItem)
            if (newCateoryList) {
                setSelectedSubcategory(newCateoryList)
                setIsLoading(false)
            }
           
        } catch (error) {
            console.log(error)
        }
    }

    return {
            categories,
            isLoading, 
            selectedSubcategory,
            onSelectSubcategory,
        }
}