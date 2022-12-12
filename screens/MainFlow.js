import React from 'react';
import HomeScreen from './HomeScreen';
import DetailScreen from './DetailScreen'
import SignupScreen from './SignupScreen';
import LoginScreen from './LoginScreen';
import ShopScreen from './ShopScreen';
import CartScreen from './CartScreen';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import { KlocknerCategoriesProvider } from '../context/KlocknerCategoriesContext';
import { HeaderProvider } from '../context/HeaderContext';
import { ShopProvider } from '../context/ShopContext';

const MainFlowStack = createNativeStackNavigator()

const MainFlow = () => {

    return (
        <KlocknerCategoriesProvider>
            <HeaderProvider> 
                <ShopProvider>
                    <MainFlowStack.Navigator>
                        <MainFlowStack.Screen name="Home" component={HomeScreen} options={{ headerShown: false }} />
                        <MainFlowStack.Screen name="Detail" component={DetailScreen} options={{ headerShown: false }} />
                        <MainFlowStack.Screen name="Signup" component={SignupScreen} options={{ headerShown: false }} />
                        <MainFlowStack.Screen 
                                name="Login" 
                                component={LoginScreen} 
                                options={{ 
                                    headerShown: false,
                                    gestureDirection:'vertical'
                                }}
                                />
                        <MainFlowStack.Screen name="Shop" component={ShopScreen} options={{ headerShown: false }} />
                        <MainFlowStack.Screen name="Cart" component={CartScreen} options={{ headerShown: false }} />
                    </MainFlowStack.Navigator>
                </ShopProvider>
            </HeaderProvider>
        </KlocknerCategoriesProvider>
    )
}

export default MainFlow;