import firebase from "@firebase/app";
import "firebase/firestore";
import "firebase/auth";

firebase.initializeApp({
    apiKey:"",
    authDomain:"reactjst3h-1a28e.firebaseapp.com",
    projectId:"reactjst3h-1a28e"
});

export default firebase.firestore();