var x = document.getElementById("emaila");
var p = document.getElementById("passworda");

document.getElementById("formA").addEventListener("submit",(ee)=>{
    ee.preventDefault();
    if (x.value=="admin@gmail.com" && p.value=="qwerty") {
        swal({
            title: 'Welcome',
            html: 'Access granted',
            type: 'success'
        });
        setTimeout(()=>{
            loadPage();
        },3000);
    } else {
        swal({
            title: 'ERROR',
            html: 'Access denied',
            type: 'error'
        });
    }
    function loadPage(){
        window.location.href="./assets/images/admin/admin.html";
    }
})