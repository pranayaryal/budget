import firebase from 'firebase'


const config = {
  apiKey: "AIzaSyBeHO_NEDWaZTB1XCkJloyypIlV2Q8DEkg",
  authDomain: "budgeting-cd6c7.firebaseapp.com",
  databaseURL: "https://budgeting-cd6c7.firebaseio.com",
  projectId: "budgeting-cd6c7",
  storageBucket: "budgeting-cd6c7.appspot.com",
  messagingSenderId: "669170731480"
};

firebase.initializeApp(config)
export const provider = new firebase.auth.EmailAuthProvider;
export const auth = firebase.auth();

export default firebase;