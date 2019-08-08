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
  var products=[];
  var cartItems=[];
  var cart_n= document.getElementById("cart_n");
  //DIVS
  var cakeDiv=document.getElementById("cakeDiv");
  var promotionDIV=document.getElementById("promotionDiv");
  var boxDIV=document.getElementById("boxDiv");
//INFORMATION
var CUPCAKE=[
    {name:'Cupcake #1',price:1},
    {name:'Cupcake #2',price:2},
    {name:'Cupcake #3',price:3},
    {name:'Cupcake #4',price:4}
];
var PROMO=[
    {name:'Promotion',price:10}

];
var BOX=[
    {name:'Cupcake Box',price:12}
];
//HTML
function HTMLcupcakeProduct(con){
    let URL =`assets/images/fruits/fruit${con}.jpg`;
    let btn =`btnCUPCAKE${con}`;
    return `
            <div class="col-md-6">
              <div class="card mb-4 shadow-sm">
              <div class="cardImg">
              <img class="card-img-top" style="height:19rem;" src="${URL}" alt="Card Image">
              </div>
              <div class="card-body">
                <i style="color:orange;" class="fa fa-star"></i>
                <i style="color:orange;" class="fa fa-star"></i>
                <i style="color:orange;" class="fa fa-star"></i>
                <i style="color:orange;" class="fa fa-star"></i>
                <i style="color:orange;" class="fa fa-star"></i>
                <p class="card-text">${CUPCAKE[con-1].name}</p>
                <p class="card-text">Price:$${CUPCAKE[con-1].price}.00</p>
                <p class="d-flex justify-content-between align-items-center">
                <div class="btn-group>
                <button type="button" onclick="cart2('${CUPCAKE[con-1].name}','${CUPCAKE[con-1].price}','${URL}','${con}','${btn}')"
                 class="btn btn-sm btn-outline-secondary">
                <a style="color:inherit;" href="assets/images/cart.html">Buy</a></button>
                <button id="${btn}" type="button" onclick="cart('${CUPCAKE[con-1].name}','${CUPCAKE[con-1].price}','${URL}','${con}','${btn}')"
                class="btn btn-sm btn-outline-secondary">Add to cart</button>
                </div>
                <small class="text-muted">Free Shipping</small>
                </div>
                </div>
                </div>
                </div>
    `
}
    function HTMLpromotionProduct(){
        let URL = `assets/images/Carousel/img1.png`;
        let btn =`btnpromotion`;
        return `
           <div class="row featurette">
           <div class="col-md-7 ">
             <h2 id="Promotions" style="padding-top:70px;">Promotions</h2>
             <p class="lead">
             Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum.
            </p>
            <h3>$${PROMO[0].price}.00</h3>
            <button type="button" onclick="cart2('${PROMO[0].name}','${PROMO[0].price}','${URL}','0',${btn}')" class="btn btn-sm btn-outline-secondary"><a style="color:inherit;"href="assets/images/cart.html">Buy</a></button>
            <button id="${btn}" type="button" onclick="cart('${PROMO[0].name}','${PROMO[0].price}','${URL}','0','${btn}')"
            class="btn btn-sm btn-outline-secondary">Add to cart</button>
             </div>
            <div class="col-md-5">
             <img src="assets/images/Carousel/img1.png" width"400" height="500">
            </div>
            </div>
              
        
        
        
        `
    }
    function HTMLcupcakeboxProduct(){
      let URL = `assets/images/Carousel/img3.jpg`;
        let btn =`btnBOX`;
        return `
           <div class="row featurette">
           <div class="col-md-7 order-md-2">
             <h2 id="Box" style="padding-top:70px;">Cupcake Box</h2>
             <p class="lead">
             Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum.
            </p>
            <h3>$${BOX[0].price}.00</h3>
            <button type="button" onclick="cart2('${BOX[0].name}','${BOX[0].price}','${URL}','0',${btn}')" class="btn btn-sm btn-outline-secondary"><a style="color:inherit;"href="assets/images/cart.html">Buy</a></button>
            <button id="${btn}" type="button" onclick="cart('${BOX[0].name}','${BOX[0].price}','${URL}','0','${btn}')"
            class="btn btn-sm btn-outline-secondary">Add to cart</button>         
               </div>
            <div class="col-md-5 order-md-1">
             <img src="assets/images/Carousel/img3.jpg" width"400" height="300">
            </div>
            </div>`

}
   
//ANIMATION
function animation(){
  const toast=swal.mixin({
    toast:true,
    position:'top-end',
    showConfirmButton:false,
    timer:1000
  });
  toast({
    type:'success',
    title: 'Added to shopping cart'
  })
}
//CART FUNCTIONS
function cart(name,price,url,con,btncart){
  var item={
    name:name,
    price:price,
    url:url
  }
  cartItems.push(item);
  let storage = JSON.parse(localStorage.getItem("cart"));
  if (storage==null) {
          products.push(item);
          localStorage.setItem("cart",JSON.stringify(products));

  } else {
    products= JSON.parse(localStorage.getItem("cart"));
    products.push(item);
    localStorage.setItem("cart",JSON.stringify(products));
  }
  products= JSON.parse(localStorage.getItem("cart"));
  cart_n.innerHTML=`[${products.length}]`;
    document.getElementById(btncart).style.display="none";
    animation();
  
}

function cart2(name,price,url,con,btncart){
  var item={
    name:name,
    price:price,
    url:url 
  }
  cartItems.push(item);
  let storage = JSON.parse(localStorage.getItem("cart"));
  if (storage==null) {
    products.push(item);
    localStorage.setItem("cart",JSON.stringify(products));
  } else {
    products= JSON.parse(localStorage.getItem("cart"));
    products.push(item);
    localStorage.setItem("cart",JSON.stringify(products));
  }
  products=JSON.parse(localStorage.getItem("cart"));
  cart_n.innerHTML=`[${products.length}]`;
  document.getElementById(btncart).style.display="none";

}
function render(){
  for (let index = 1; index <=4; index++) {
      cakeDiv.innerHTML+= `${HTMLcupcakeProduct(index)}`;
  }     
  promotionDIV.innerHTML+= `${HTMLpromotionProduct()}`;
  boxDIV.innerHTML+= `${HTMLcupcakeboxProduct()}`;
  if (localStorage.getItem("cart")==null){

  } else {
    products=JSON.parse(localStorage.getItem("cart"));
    cart_n.innerHTML=`[${products.length}]`;

  }
};

