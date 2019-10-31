import * as firebase from "firebase/app"
import "firebase/auth"
import 'firebase/firestore'

const app = firebase.initializeApp({
  apiKey: "AIzaSyD5-3T9YY_b2mgwuK-kgrluvKFfiuFyK8Q",
  authDomain: "vballrotations.firebaseapp.com",
  databaseURL: "https://vballrotations.firebaseio.com",
  projectId: "vballrotations",
  storageBucket: "vballrotations.appspot.com",
  messagingSenderId: "490094010335",
  appId: "1:490094010335:web:0cd4d242b9e360ddd02e6a"
})

export const db = firebase.firestore()

export default app