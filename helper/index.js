import AsyncStorage from '@react-native-async-storage/async-storage';
import {db, mainItemsCol, productsCol, ordersCol} from '../firebase'
import { doc, getDocs, collection, query, where} from "firebase/firestore";
import { getAuth, createUserWithEmailAndPassword, signInWithEmailAndPassword} from 'firebase/auth';


const auth = getAuth()

export const getCredentials = async () => {
    const response = await AsyncStorage.getItem('user')
    if (response) {
        return response
    }
    return false
}

export const deleteToken = async () => {

    try {
        await AsyncStorage.removeItem('user')
        return true
    } catch (err) {
        console.log(err)
        return false
    }
}

export const saveToken = async (token) => {
    if (token) {
        try {
            await AsyncStorage.setItem('user', token)
        } catch (err) {
            console.log(err)
        }
    }
    return false
}

export const fetchCategoryList = async (item) => {

    const myNewCategory = []
    const q = query(mainItemsCol, where('foreignkey', "==", item.docId));
    const querySnapshot = await getDocs(q);

    querySnapshot.forEach((data) => {
        if (data.data()) {
            const fullData = {
                docId: data.id,
                data:data.data()
            }
            myNewCategory.push(fullData)
        }
    })
    
    return myNewCategory
}

export const signupService  = async ({email, password}) => {

    const resp = await createUserWithEmailAndPassword(auth, email, password)

    return resp

}

export const loginService = async ({email, password}) => {

    try {
        const resp = await signInWithEmailAndPassword(auth, email, password)
        return resp
    } catch (error) {
        return error
    }   
}


export const fetchProducts = async (foreignKey) => {

    try {
        const q = query(productsCol, where('foreignkey', "==", foreignKey));
        const querySnapshot = await getDocs(q)
        const productList = []
        querySnapshot.forEach(data => { 
            if (data.data()) {
                const fullData = {
                    docId: data.id,
                    data:data.data()
                }
                productList.push(fullData)
            }
        })
        return productList

    } catch (error) {
        console.log({error})
    }

}