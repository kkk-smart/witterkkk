  // Your web app's Firebase configuration
  var firebaseConfig = {
    apiKey: "AIzaSyCJw84Sp_OURDiU7pAhjsrHzYGpSuFZ5OI",
    authDomain: "witter-a7174.firebaseapp.com",
    databaseURL: "https://witter-a7174-default-rtdb.firebaseio.com",
    projectId: "witter-a7174",
    storageBucket: "witter-a7174.appspot.com",
    messagingSenderId: "1004772670203",
    appId: "1:1004772670203:web:bdd47471e13fb1da814e5e"
  };
  // Initialize Firebase
  firebase.initializeApp(firebaseConfig);

  function addRoom()
  {
        room_name = document.getElementById("room_name").value;
        
        firebase.database().ref("/").child(room_name).update({
              purpose : "adding room name"
        });

        localStorage.setItem("room_name", room_name);

        window.location = "witter_page.html"
  }

function getData() {firebase.database().ref("/").on('value', function(snapshot) {document.getElementById("output").innerHTML = "";snapshot.forEach(function(childSnapshot) {childKey  = childSnapshot.key;
       Room_names = childKey;
      //Start code
      console.log("Room Name -" + Room_names);
      row = "<div class= 'room_name' id="+ Room_names+" onclick= 'redirectToRoomName(this.id)' >#"+ Room_names +"</div><hr>";
      document.getElementById("output").innerHTML += row;
      //End code
      });});}
getData();

function redirectToRoomName(name)
{
      console.log(name);
      localStorage.setItem("room_name", name);
      window.location = "witter_page.html";
}
function logout() {
      localStorage.removeItem("user_name");
      localStorage.removeItem("room_name");
            window.location = "login.html";
}
