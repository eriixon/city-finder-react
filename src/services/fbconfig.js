import firebase from 'firebase';

const config = {
    apiKey: "AIzaSyCt8rorJlbWFp6TB8GlAC2090vTXmWj02M",
    authDomain: "findthecity-f150a.firebaseapp.com",
    databaseURL: "https://findthecity-f150a.firebaseio.com",
    projectId: "findthecity-f150a",
    storageBucket: "findthecity-f150a.appspot.com",
    messagingSenderId: "481758651916"
};
firebase.initializeApp(config);

export default firebase;
