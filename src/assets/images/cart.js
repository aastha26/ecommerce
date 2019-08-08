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
  //GLOBAL
  var  products= JSON.parse(localStorage.getItem('cart'));
  var cartItems=[];
  var cart_n = document.getElementById('cart_n');
  var table= document.getElementById('table');
  var total=0;

  //HTML
  function tableHTML(i){
      return `
        <tr>
        <th scope="row">${i+1}</th>
        <td><img style="width:90px;" src="${products[i].url}"></td>
        <td>${products[i].name}</td>
        <td>1</td>
        <td>${products[i].price}</td>
        </tr>
      `;
  }
  //BUY
  function buy(){
      console.log("yes")
      var d= new Date();
      var t = d.getTime();
      var counter=t;
      counter+=1;
      let db=firebase.database().ref("/order/"+ counter);
      let itemdb={
          id:counter,
          order:counter-895,
          total:total
      }
      db.set(itemdb);
      swal({
          position: 'center',
          type: 'success',
          title: 'Purchase made successfully',
          text: `Your purchase order is :${itemdb.order}`,
          showConfirmButton:true,
          timer:5000
      });
      clean();
  }
  function clean(){
      localStorage.clear();
      for (let index = 0; index < products.length ; index++){
          table.innerHTML+= tableHTML(index);
          total= total+parseInt(products[index].price);
      }
      total=0;
      table.innerHTML=`
          <tr>
          <th></th>
          <th></th>
          <th></th>
          </tr>   
      
      `;
      cart_n.innerHTML='';
      document.getElementById("btnBuy").style.display="none";
      document.getElementById("btnClean").style.display="none";
  }
  //RENDER
  function render(){
      for (let index = 0; index < products.length; index++) {
          table.innerHTML+= tableHTML(index);
          total=total+parseInt(products[index].price);

      }
      table.innerHTML+=`
         <tr>
         <th scope="col"></th>
         <th scope="col"></th>
         <th scope="col"></th>
         <th scope="col"></th>
         <th scope="col">Total: $${total}.00</th>
         </tr>
         <tr>
         <th scope="col"></th>
         <th scope="col"></th>
         <th scope="col"></th>
         <th scope="col">
           <button id="btnClean" onclick="clean()" class="btn text-white btn-warning">
           Clean Shopping Cart
           </button>
        </th>
        <th scope="col">
          <button id="btnBuy" onclick="buy()" class="btn btn-success">Buy</button>
        </th>
        </tr>
        `;
        products=JSON.parse(localStorage.getItem("cart"));
        cart_n.innerHTML=`[${products.length}]`;

  }