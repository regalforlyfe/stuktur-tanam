import React from 'react';
import { initializeApp } from "firebase/app";

const initFirebase = () => {
    // Your web app's Firebase configuration
    // For Firebase JS SDK v7.20.0 and later, measurementId is optional
    const firebaseConfig = {
        apiKey: "AIzaSyCFAwySypE27lWLrCb0mpRxYw8Q7NR7kJo",
        authDomain: "digitalcenter-research.firebaseapp.com",
        projectId: "digitalcenter-research",
        storageBucket: "digitalcenter-research.appspot.com",
        messagingSenderId: "828678104543",
        appId: "1:828678104543:web:cb1b2f07e907c04ff6906a",
        measurementId: "G-L14LV1VR25"
    };
    // Initialize Firebase
    const app = initializeApp(firebaseConfig);
    return app;
}

const FirebaseUtility = {
    initFirebase
}

export default FirebaseUtility;