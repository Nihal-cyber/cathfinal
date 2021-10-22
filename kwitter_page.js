//YOUR FIREBASE LINKS
const firebaseConfig = {
      apiKey: "AIzaSyAD4wy5zM6LLIVplInosDV0NF5l1pLq6Ag",
      authDomain: "kwitter-9ad7a.firebaseapp.com",
      databaseURL: "https://kwitter-9ad7a-default-rtdb.firebaseio.com",
      projectId: "kwitter-9ad7a",
      storageBucket: "kwitter-9ad7a.appspot.com",
      messagingSenderId: "538082382769",
      appId: "1:538082382769:web:4d33313d3bde33fc3e6390"
    };
    
    // Initialize Firebase
    firebase.initializeApp(firebaseConfig);
    user_name = localStorage.getItem("user_name");
    room_name = localStorage.getItem("room_name");
    function send()
    {
          msg = document.getElementById("msg").value;
          firebase.database().ref(room_name).push({
                name:user_name,
                message:msg,
                like:0
          });
          document.getElementById("msg").value="";
    }
function getData() { firebase.database().ref("/"+room_name).on('value', function(snapshot) { document.getElementById("output").innerHTML = ""; snapshot.forEach(function(childSnapshot) { childKey  = childSnapshot.key; childData = childSnapshot.val(); if(childKey != "purpose") {
         firebase_message_id = childKey;
         message_data = childData;
//Start code

//End code
      } });  }); }
getData();
