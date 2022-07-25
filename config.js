import firebase from "firebase";
require("@firebase/firestore");
const firebaseConfig = {
  apiKey: "AIzaSyCtvLci7ABA1p8MKAXVhcWkiFq_I1XH6xQ",
  authDomain: "e-ride-78fba.firebaseapp.com",
  projectId: "e-ride-78fba",
  storageBucket: "e-ride-78fba.appspot.com",
  messagingSenderId: "286061950944",
  appId: "1:286061950944:web:5095f13b7da25a001a9d85",
};
firebase.initializeApp(firebaseConfig);

export default firebase.firestore();
