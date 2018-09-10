import "firebase/database";
import firebase from "firebase/app";
import "firebase/messaging";

var config = {
  apiKey: "AIzaSyD-olQlC2IhKkSnZpQg1gYIhSQG6QHnUhQ",
  authDomain: "olxpakistan-fafcc.firebaseapp.com",
  databaseURL: "https://olxpakistan-fafcc.firebaseio.com",
  projectId: "olxpakistan-fafcc",
  storageBucket: "olxpakistan-fafcc.appspot.com",
  messagingSenderId: "692851238657"
};
firebase.initializeApp(config);

export const fb = firebase;
export const database = firebase.database();
export const messaging = firebase.messaging();
