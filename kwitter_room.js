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

//Añade tus enlaces de Firebase

  user_name = localStorage.getItem("user_name");

document.getElementById("user_name").innerHTML = "¡Bienvenido" + user_name + "!";

function addRoom()
{
  room_name = document.getElementById("room_name").value;

  firebase.database().ref("/").child(room_name).update({
    purpose : "añadir el nombre de la sala"
  });

    localStorage.setItem("room_name", room_name);
    
    window.location = "kwitter_page.html";
}

function getData() {  firebase.database().ref("/").on('value', function(snapshot) { document.getElementById("output").innerHTML = ""; snapshot.forEach(function(childSnapshot) { childKey  = childSnapshot.key;
       Room_names = childKey;
       console.log("Nombre de la sala" + Room_names);
      row = "<div class='room_name' id="+Room_names+" onclick='redirectToRoomName(this.id)' >#"+ Room_names +"</div><hr>";
      document.getElementById("output").innerHTML += row;
    });
  });

}

getData();

function redirectToRoomName(name)
{
  console.log(name);
  localStorage.setItem("room_name", name);
    window.location = "kwitter_page.html";
}

function logout() {
localStorage.removeItem("user_name");
localStorage.removeItem("room_name");
    window.location = "index.html";
}
