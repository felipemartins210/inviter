import firebase from "firebase";
import "firebase/storage";

// Your web app's Firebase configuration
var firebaseConfig = {
  apiKey: "AIzaSyC_hD-wunkgW0RR9cD4GG6GAEIcFqn0GsY",
  authDomain: "invite-8cf82.firebaseapp.com",
  projectId: "invite-8cf82",
  storageBucket: "invite-8cf82.appspot.com",
  messagingSenderId: "23648446675",
  appId: "1:23648446675:web:062a2414f4d0d1dc24cc26",
};
// Initialize Firebase
firebase.initializeApp(firebaseConfig);

export default firebase;
