// Scripts for firebase and firebase messaging
importScripts('https://www.gstatic.com/firebasejs/9.2.0/firebase-app-compat.js');
importScripts('https://www.gstatic.com/firebasejs/9.2.0/firebase-messaging-compat.js');

// Initialize the Firebase app in the service worker by passing the generated config
const firebaseConfig = {
    apiKey: "AIzaSyCFAwySypE27lWLrCb0mpRxYw8Q7NR7kJo",
    authDomain: "digitalcenter-research.firebaseapp.com",
    projectId: "digitalcenter-research",
    storageBucket: "digitalcenter-research.appspot.com",
    messagingSenderId: "828678104543",
    appId: "1:828678104543:web:cb1b2f07e907c04ff6906a",
    measurementId: "G-L14LV1VR25"
};

firebase.initializeApp(firebaseConfig);

// Retrieve firebase messaging
const messaging = firebase.messaging();

messaging.onBackgroundMessage(function (payload) {
    console.log("Received background message ", payload);

    const notificationTitle = payload.notification.title;
    const notificationOptions = {
        body: payload.notification.body,
    };

    self.registration.showNotification(notificationTitle, notificationOptions);
});