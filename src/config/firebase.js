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

const auth = firebase.auth()
const db = firebase.firestore()
const storage = firebase.storage()


async function storeImages(files) {
  const urls = []

  for (let i = 0; i < files.length; i++) {
    const ref = storage.ref(`image/${files[i].name}`)
    await ref.put(files[i])
    const url = await ref.getDownloadURL()
    urls.push(url)
  }
  
  return urls
}

function addPost(user_id='annonymous', title, price, imagesUrl){
  return db.collection('posts').add({user_id, title, price, imagesUrl})
}

function getPosts(cb){
  return db.collection('posts').get()
}

function register(email, password){
  return auth.createUserWithEmailAndPassword(email, password)
}

function addUser(id, fullname, email, contact) {
  return db.collection('users').doc(id).set({fullname, email, contact})
} 

function getUser(id) { 
  
  return db.collection('users').doc(id).get()
    .then((doc)=> {
      if(doc.exists){
        return  {...doc.data(), id}
      }
      else
        return undefined
    })
    .catch((e) => e)
}

function login(email, password) {
  return auth.signInWithEmailAndPassword(email, password)
}

export {
  register,
  addUser,
  getUser,
  login,
  storeImages,
  addPost,
  getPosts
}