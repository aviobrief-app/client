import { initializeApp, getApps } from 'firebase/app';


const firebaseConfig = {
    apiKey: "AIzaSyDtnDJzl69U3xEiOzQTJl6UbLCl90bF554",
    authDomain: "ubuuy-53992.firebaseapp.com",
    projectId: "ubuuy-53992",
    storageBucket: "ubuuy-53992.appspot.com",
    messagingSenderId: "1067626590814",
    appId: "1:1067626590814:web:ea27330e527381eaa03acf",
    measurementId: "G-2GFW07YW8T",
};

export const firebaseApp = () => {
    if(!getApps().length) {
        return initializeApp(firebaseConfig);
    }
}

firebaseApp();