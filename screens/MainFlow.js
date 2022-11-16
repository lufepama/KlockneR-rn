import React from 'react';
import HomeScreen from './HomeScreen';
import DetailScreen from './DetailScreen'
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import { KlocknerCategoriesProvider } from '../context/KlocknerCategoriesContext';

const MainFlowStack = createNativeStackNavigator()

const MainFlow = () => {

    return (
        <KlocknerCategoriesProvider>
            <MainFlowStack.Navigator>
                <MainFlowStack.Screen name="Home" component={HomeScreen} options={{ headerShown: false }} />
                <MainFlowStack.Screen name="Detail" component={DetailScreen} options={{ headerShown: false }} />
            </MainFlowStack.Navigator>
        </KlocknerCategoriesProvider>
    )
}

export default MainFlow;