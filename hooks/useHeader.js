import React, { useContext, useEffect, useState } from 'react'
import HeaderContext from '../context/HeaderContext'
import { fetchCategoryList } from '../helper/index'
import KlocknerCategoriesContext from '../context/KlocknerCategoriesContext'

export const useHeader = () => {

    const { headerOptions, setHeaderOptions } = useContext(HeaderContext)
    const { setSelectedSubcategory, fetchData} = useContext(KlocknerCategoriesContext)

    const addItemHeader = (item) => {
        const itemTitle = item.data.title
        const dicItem = {
            docId: item.docId,
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

    const updateHeader = async (item) => {
        const itemIdx = headerOptions.findIndex((el) => el.docId === item.docId)
        setHeaderOptions(
            headerOptions.filter((_,indx) => indx <= itemIdx )
        )
        const myNewCategory = await fetchCategoryList(item)
        setSelectedSubcategory(myNewCategory)
    }

    const resetHeaderOptions = () => {
        setHeaderOptions(headerOptions.filter(el => el.title == 'Klockner' ))
    }

    return { 
        headerOptions,
        addItemHeader,
        deleteItemHeader,
        updateHeader,
        resetHeaderOptions,
     } 
}