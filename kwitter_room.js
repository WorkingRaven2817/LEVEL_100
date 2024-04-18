
// Your web app's Firebase configuration
const firebaseConfig = {
      apiKey: "AIzaSyC2__vbPQ_Dg8PSn6oZPbONNFsMWx1KrL4",
      authDomain: "practice-map-1b61f.firebaseapp.com",
      projectId: "practice-map-1b61f",
      storageBucket: "practice-map-1b61f.appspot.com",
      messagingSenderId: "197735998479",
      appId: "1:197735998479:web:96ebef9152e0453ade2f7a"
    };
    
    // Initialize Firebase
    const app = initializeApp(firebaseConfig);

function getData() {firebase.database().ref("/").on('value', function(snapshot) {document.getElementById("output").innerHTML = "";snapshot.forEach(function(childSnapshot) {childKey  = childSnapshot.key;
       Room_names = childKey;
      //Inicia el código

      //Finaliza el código
      });});}
getData();
