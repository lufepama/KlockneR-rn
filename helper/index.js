import AsyncStorage from '@react-native-async-storage/async-storage';
import {db, mainItemsCol} from '../firebase'
import { doc, getDocs, collection, query, where} from "firebase/firestore";
import { getAuth, createUserWithEmailAndPassword } from 'firebase/auth';

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
    // const querySnapshot = await getDocs(mainItemsCol)

    // querySnapshot.forEach((data) => {
    //     console.log('pase', childrenItems)
    //     if (childrenItems.includes(data.id)) {
    //         console.log('Lo tenemosss!')
    //     }
    // })
         
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
    const auth = getAuth()

    const resp = await createUserWithEmailAndPassword(auth, email, password)

    return resp

}