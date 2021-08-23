import firebase from 'firebase';

const firebaseApp = firebase.initializeApp({
   apiKey: "AIzaSyAeQ6cZCqvlgEM-NCzW18WNwBhPeLYTN38",
   authDomain: "pet-cloner.firebaseapp.com",
   projectId: "pet-cloner",
   storageBucket: "pet-cloner.appspot.com",
   messagingSenderId: "622636761034",
   appId: "1:622636761034:web:4f1d7fed79a21956411933"
})

const db   = firebaseApp.firestore()

export {db}
