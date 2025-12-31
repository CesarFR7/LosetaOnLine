import { db } from '../utility/firebaseConfig'
import { collection, addDoc, getDocs, docs, updateDoc, deleteDoc } from 'firebase/firestore'

const productCollection = collection(db, 'products')

export default {
  async createProducy(prouductData) {
    const docRef = await addDoc(productCollection, prouductData)
    return { id: docRef.id, ...prouductData }
  },
}
