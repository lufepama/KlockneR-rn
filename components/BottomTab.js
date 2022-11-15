import React from 'react'
import { View, StyleSheet, } from 'react-native'
import BottomElementTab from './BottomElementTab'

const BottomTab = () => {

    return (
        <View style={styles.root}>
            <View style={styles.mainContainer} >
                <BottomElementTab text='Buscador' icon='search' screenToNavigate='Home' />
                <BottomElementTab text='Mis ofertas' icon='briefcase' screenToNavigate='Home' />
                <BottomElementTab text='CV' icon='user' screenToNavigate='Home' />
                <BottomElementTab text='Novedades' icon='bell' isNotification={true} screenToNavigate='Home' />
            </View>
        </View>
    )
}

const styles = StyleSheet.create({
    root: {
        paddingHorizontal: 10,
        paddingVertical: 5
    },
    mainContainer: {
        flexDirection: 'row',
        width: '100%',
        justifyContent: 'space-between'
    },
})

export default BottomTab
