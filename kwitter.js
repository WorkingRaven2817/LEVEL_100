var firebaseConfig = {
  apiKey: "AIzaSyDctfhg5SLpVyGXpb8gNYLnD1C1xaFUBng",
  authDomain: "p101-b96a1.firebaseapp.com",
  databaseURL: "https://p101-b96a1-default-rtdb.firebaseio.com",
  projectId: "p101-b96a1",
  storageBucket: "p101-b96a1.appspot.com",
  messagingSenderId: "1084683651440",
  appId: "1:1084683651440:web:10e125db083adb0f0167b5",
  measurementId: "G-Z5YSYP07WQ"
};
// Inicializa Firebase
firebase.initializeApp(firebaseConfig);

function addUser() {

  user_name = document.getElementById("user_name").value;

  localStorage.setItem("user_name", user_name);
  
    window.location = "kwitter_room.html";
}

