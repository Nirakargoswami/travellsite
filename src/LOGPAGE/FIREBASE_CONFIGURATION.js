import * as firebase from "firebase/app";
import "firebase/firestore";
import "firebase/auth";


var firebaseConfig = {
  apiKey: "AIzaSyCJ6ZIfVseIEBKqIvEnXed0NsrqCqNj5EU",
  authDomain: "travel-app-8f544.firebaseapp.com",
  databaseURL: "https://travel-app-8f544.firebaseio.com",
  projectId: "travel-app-8f544",
  storageBucket: "travel-app-8f544.appspot.com",
  messagingSenderId: "596184338098",
  appId: "1:596184338098:web:69781649d56f2123cc03ab",
  measurementId: "G-R4HLRSG0CY",
};



export const userprofile = async (userAuth, aditionaldata) => {
  if (!userAuth) return;
 
  const userinfo =  firestore.doc(`/user/${userAuth.uid}`);
console.log(userinfo)

 
console.log(aditionaldata);
  const snapeshote = await userinfo.get();
   console.log(snapeshote)

  if (!snapeshote.exists) {
    const { displayName, email } = userAuth;
  
    const creatdAt = new Date();
    try {
      await userinfo.set({
        displayName,
        email,
        creatdAt,
  ...aditionaldata,
      });
    } catch (error) {
      console.log("created aerro " + error.message);
    }
  }
   

  return userinfo;
  
};


firebase.initializeApp(firebaseConfig);

export const auth = firebase.auth();
export const firestore = firebase.firestore();

const Provider = new firebase.auth.GoogleAuthProvider();

Provider.setCustomParameters({ promt: "select account" });

export const signinWithGoogle = () => auth.signInWithPopup(Provider);

export default firebase;
