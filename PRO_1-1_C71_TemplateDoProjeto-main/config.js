import firebase from "firebase";
require("@firebase/firestore");


  //Cole sua Configuração do Firebase aqui
  const firebaseConfig = {
    apiKey: "AIzaSyDibkz__OfZ_PEmSCKd-nPS9tLodJpPWhU",
    authDomain: "projeto-c71-66683.firebaseapp.com",
    projectId: "projeto-c71-66683",
    storageBucket: "projeto-c71-66683.appspot.com",
    messagingSenderId: "125578238929",
    appId: "1:125578238929:web:93cef52fd9fd94c064def0"
  };



firebase.initializeApp(firebaseConfig);

export default firebase.firestore();
