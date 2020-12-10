
let firebaseConfig = {
  apiKey: "AIzaSyB629-SUeA1ZeQZ39vNOoPqTTIwjJ6aav4",
  authDomain: "ort-node.firebaseapp.com",
  databaseURL: "https://ort-node-default-rtdb.firebaseio.com",
  projectId: "ort-node",
  storageBucket: "ort-node.appspot.com",
  messagingSenderId: "785775769033",
  appId: "1:785775769033:web:6b61d4515f08140fdea418",
  measurementId: "G-9D6XGGR9VS"
};

firebase.initializeApp(firebaseConfig);

$(document).ready(function () {
  let database = firebase.database();
  let status;

  database.ref().on("value", function (snap) {
    status = snap.val().status;
    if (status == 0) {
      $(".lightStatus").text("El nodo esta encendido");
    } else {
      $(".lightStatus").text("El nodo esta apagado");
    }
  });

  $(".lightButton").click(function () {
    let firebaseRef = firebase.database().ref().child("status");

    if (status == 1) {
      firebaseRef.set(0);
      status = 0;
    } else {
      firebaseRef.set(1);
      status = 1;
    }
  });
});
