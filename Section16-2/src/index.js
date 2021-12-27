import{ initializeApp } from 'firebase/app'
import {
    getFirestore, collection, getDocs
} from 'firebase/firestore'

//import { update } from 'lodash';

// import {
//     getAuth,
//     createUserWithEmailAndPassword,
//     signOut, signInWithEmailAndPassword,
//     onAuthStateChanged
// } from 'firebase/auth'

//--------------------------------------------------
//init firebase app
const firebaseConfig = {
    apiKey: "AIzaSyAwtfkYNMElyrWLYYzCTDOSYqMucwn4zwI",
    authDomain: "javascript-section16.firebaseapp.com",
    projectId: "javascript-section16",
    storageBucket: "javascript-section16.appspot.com",
    messagingSenderId: "195981413411",
    appId: "1:195981413411:web:d749a983d95239dc007596"
  };

  initializeApp(firebaseConfig)

  //-------------------------------------

  //init services
const db = getFirestore()

//const auth = getAuth()

//collection Ref
const colRef = collection(db, 'recipes')

//get collection data
getDocs(colRef)
  .then((snapshot)=> {
      console.log(snapshot.docs)
  })

