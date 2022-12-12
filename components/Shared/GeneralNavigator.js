import React, { useEffect, useState } from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import { useAuth } from '../../hooks/useAuth';
import { getCredentials } from '../../helper/index';
import MainFlow from '../../screens/MainFlow';

const StackNavigator = createNativeStackNavigator()

const GeneralNavigator = () => {

    const { isUserLogged, setIsUserLogged } = useAuth();

    const getUserCredentials = async () => {
        const user = await getCredentials()
        if (user) {
            setIsUserLogged(true)
        }
    }

    useEffect(() => {
        getUserCredentials()
    }, [isUserLogged])

    return (
        <NavigationContainer>
            <StackNavigator.Navigator  >
                <StackNavigator.Screen name='MainFlow' component={MainFlow} options={{ headerShown: false }} />
            </StackNavigator.Navigator>
        </NavigationContainer>
    )
}

export default GeneralNavigator
