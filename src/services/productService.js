import { db } from '../utility/firebaseConfig'
import { collection, addDoc, getDocs, updateDoc, deleteDoc } from 'firebase/firestore'

const productCollection = collection(db, 'products')

export default {
  async createProduct(prouductData) {
    const docRef = await addDoc(productCollection, prouductData)
    return { id: docRef.id, ...prouductData }
  },
}
