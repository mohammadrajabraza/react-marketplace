import firebase from 'firebase'

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyDes9rE9gxx23cr0FSDvx5OWQjt9TR5MEw",
  authDomain: "marketplace-2049b.firebaseapp.com",
  projectId: "marketplace-2049b",
  storageBucket: "marketplace-2049b.appspot.com",
  messagingSenderId: "786215400413",
  appId: "1:786215400413:web:01f43f8d3d625c17903c34",
  measurementId: "G-E04J6Y3ED0"
};
// Initialize Firebase
firebase.initializeApp(firebaseConfig);
firebase.analytics();