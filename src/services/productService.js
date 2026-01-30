import { db } from '../utility/firebaseConfig'
import { collection, addDoc, getDocs, doc, updateDoc, deleteDoc, getDoc } from 'firebase/firestore'

const productCollection = collection(db, 'products')

export default {
  async createProduct(prouductData) {
    const docRef = await addDoc(productCollection, prouductData)
    return { id: docRef.id, ...prouductData }
  },

  async getProducts() {
    const snapshot = await getDocs(productCollection)
    return snapshot.docs.map((doc) => ({ id: doc.id, ...doc.data() }))
  },

  async getProductById(id) {
    const docRef = doc(db, 'products', id)
    const snapshot = await getDoc(docRef)
    return { id: snapshot.id, ...snapshot.data() }
  },

  async updateProduct(id, productData) {
    const docRef = doc(db, 'products', id)
    await updateDoc(docRef, productData)
    return { id, ...productData }
  },

  async deleteProduct(id) {
    const docRef = doc(db, 'products', id)
    await deleteDoc(docRef)
  },
}
