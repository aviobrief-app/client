import { firebaseApp } from './firebase'
import { getStorage, ref, uploadBytes, getDownloadURL, deleteObject } from 'firebase/storage'

export const storage = getStorage(firebaseApp())

export {
    ref as storageRef,
    uploadBytes,
    getDownloadURL,
    deleteObject
}
