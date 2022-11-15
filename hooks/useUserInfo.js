import React, { useContext, useEffect, useState } from 'react'
import UserCredentialsContext from '../context/UserInformationContext'
import { getCredentials } from '../helper/index'

export const useUserInfo = () => {

    const { userInfo, token, isUserLogged, setUserInfo, setToken, setIsUserLogged } = useContext(UserCredentialsContext)

    useEffect(() => {

        if (!token) {
            getCredentials()
                .then((token) => {
                    setToken(token)
                })
        }

    }, [token])

    return { userInfo, token, isUserLogged, setUserInfo, setToken, setIsUserLogged }

}