var config = {
    apiKey: "AIzaSyBRGGyqGXGBRcGjoo7OsZdoe4rMfXZE8ZU",
    authDomain: "ecommerce-39161.firebaseapp.com",
    databaseURL: "https://ecommerce-39161.firebaseio.com",
    projectId: "ecommerce-39161",
    storageBucket: "",
    messagingSenderId: "1005597340320",
    appId: "1:1005597340320:web:01e4fe903a0b0520"
  };
  // Initialize Firebase
  firebase.initializeApp(config);
  //RENDER
  function renderTable(){
      var order= firebase.database().ref("/order");
      order.on("child_added",function(data){
          var orderValue= data.val();
          document.getElementById("table").innerHTML+=`
          <tr>
            <td>${orderValue.id}</td>
            <td>${orderValue.order}</td>
            <td>${orderValue.total}</td>
         </tr>
          
          `;
      });
  };