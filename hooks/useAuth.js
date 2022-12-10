import React, { useContext, useEffect, useState } from 'react'
import AuthContext from '../context/AuthContext'
import {signupService, loginService} from '../helper/index'
import {storeToken} from '../storage/index'
import {removeToken} from '../storage/index'

export const useAuth = () => {

    const { userInfo, token, isUserLogged, setUserInfo, setToken, setIsUserLogged } = useContext(AuthContext)

    const onLogin = async (formData) => {
        const res = await loginService(formData)
        await storeToken(res._tokenResponse)
        await setIsUserLogged(true)
        return res
    }

    const onSignUp = async (formData) => {
        const data = {email:formData.email, password:formData.password}
        try {
            const resp = await signupService(data)
            setToken(resp.resp)
            setIsUserLogged(true)
        } catch (error) {
            console.log({error})
        }
    }

    const onLogout = async () => {
        const resp = await removeToken()
        setIsUserLogged(false)
    }

    useEffect(() => {

        if (!token) {
            
        }

    }, [token])

    return { userInfo, token, isUserLogged, setUserInfo, setToken, setIsUserLogged,
        onSignUp,
        onLogin,
        onLogout
    }
}