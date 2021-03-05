import firebase from 'firebase/app'
import 'firebase/firestore'


var firebaseConfig = {
  apiKey: "AIzaSyCsu01IBugacfriEgORK_XfsuyGy7FDYSM",
  authDomain: "proyecto-vuenotas.firebaseapp.com",
  projectId: "proyecto-vuenotas",
  storageBucket: "proyecto-vuenotas.appspot.com",
  messagingSenderId: "852415416694",
  appId: "1:852415416694:web:c157a99b56bedaa3815257",
  measurementId: "G-QK05418CPD"
};
const db = firebase.initializeApp( firebaseConfig ).firestore();

export {db}