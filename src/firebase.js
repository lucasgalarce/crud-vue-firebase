  import firebase from 'firebase/app'
  import firestore from 'firebase/firestore'
  
  // Your web app's Firebase configuration
  var firebaseConfig = {
    apiKey: "AIzaSyDNXes-3PYgb6qUpNWznizoIji8kG_evpE",
    authDomain: "crud-vue-73b50.firebaseapp.com",
    databaseURL: "https://crud-vue-73b50.firebaseio.com",
    projectId: "crud-vue-73b50",
    storageBucket: "crud-vue-73b50.appspot.com",
    messagingSenderId: "24911577755",
    appId: "1:24911577755:web:05866fce41a35edee03c3e"
  };
  // Initialize Firebase
  const firebaseApp = firebase.initializeApp(firebaseConfig);

  firebaseApp.firestore().settings({})

  export default firebaseApp.firestore()
