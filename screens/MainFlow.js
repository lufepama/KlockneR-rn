import React from 'react';
import HomeScreen from './HomeScreen';
import DetailScreen from './DetailScreen'
import SignupScreen from './SignupScreen';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import { KlocknerCategoriesProvider } from '../context/KlocknerCategoriesContext';
import { HeaderProvider } from '../context/HeaderContext';

const MainFlowStack = createNativeStackNavigator()

const MainFlow = () => {

    return (
        <KlocknerCategoriesProvider>
            <HeaderProvider> 
                <MainFlowStack.Navigator>
                    <MainFlowStack.Screen name="Home" component={HomeScreen} options={{ headerShown: false }} />
                    <MainFlowStack.Screen name="Detail" component={DetailScreen} options={{ headerShown: false }} />
                    <MainFlowStack.Screen name="Signup" component={SignupScreen} options={{ headerShown: false }} />
                </MainFlowStack.Navigator>
            </HeaderProvider>
        </KlocknerCategoriesProvider>
    )
}

export default MainFlow;