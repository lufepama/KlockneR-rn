import React, { useContext, useEffect, useState } from 'react'
import AuthContext from '../context/AuthContext'
import {signupService} from '../helper/index'

export const useAuth = () => {

    const { userInfo, token, isUserLogged, setUserInfo, setToken, setIsUserLogged } = useContext(AuthContext)

    const onLogin = () => {}

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

    useEffect(() => {

        if (!token) {
            
        }

    }, [token])

    return { userInfo, token, isUserLogged, setUserInfo, setToken, setIsUserLogged,
        onSignUp
    }
}