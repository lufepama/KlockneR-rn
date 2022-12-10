import * as SecureStore from 'expo-secure-store';

export const storeToken = async (data) => {
    try {
        await SecureStore.setItemAsync('tokenId', data.idToken)
    } catch (error) {  
        console.log({error})
    }
}

export const retrieveToken = async () => {
    try {
        const query = await SecureStore.getItemAsync('tokenId')
        console.log(query)
        return query
    } catch (error) {
        console.log(error)
    }
}

export const removeToken = async () => {
    
    try {
        console.log(";")
        const resp = await SecureStore.deleteItemAsync('tokenId')
        return resp
    } catch (error) {
        console.log({error})
    }

}