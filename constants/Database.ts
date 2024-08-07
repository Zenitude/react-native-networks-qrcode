import firebase from "@react-native-firebase/app";
import { getFirestore, collection, addDoc, getDocs } from "@react-native-firebase/firestore";

const firebaseConfig = {
    apiKey: "",
    authDomain: "",
    projectId: "qrcode-generator-f584f",
    storageBucket: "",
    messagingSenderId: "",
    appId: "1:783853815786:android:cab2120fa0c0b7d2c1d493"
};

const app = firebase.initializeApp(firebaseConfig);

export const saveMessage = async (from: string, msg: string) => {
    const apply = await app;
    const db = getFirestore(apply);
    const collectionRef = collection(db, 'messages');

    addDoc(
        collectionRef,
        {
            from: from,
            message: msg
        }
    )
}

export const getMessages = async (from: string, msg: string) => {
    const apply = await app;
    const db = getFirestore(apply);
    const collectionRef = collection(db, 'messages');

    const docs = getDocs(collectionRef);
    return docs;
}

