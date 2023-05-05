

function khai(){
    let name = document.querySelector('#name').value;
    let address = document.querySelector('#address').value;
    let email = document.querySelector('#email').value;
    let comments =document.querySelector('#comments').value;

    localStorage.setItem("name",name);
    localStorage.setItem("address",address);
    localStorage.setItem("email",email);
    localStorage.setItem("comments",comments);
}




//to crete variable that used to store data in the local storage
let name=localStorage.getItem("name");
let address=localStorage.getItem("address");
let email=localStorage.getItem("email");
let comments=localStorage.getItem("comments");
//to check data je zipo wapi
let hn =document.getElementById('myname');
let ad =document.getElementById('myadd');
let em =document.getElementById('myemail');
let com =document.getElementById('mycomments');

if(name && address){
    if(email && comments){
       hn.innerHTML =`name:${name}`;
       ad.innerHTML =`address:${address}`;
       em.innerHTML =`email:${email}`;
       com.innerHTML =`comments:${comments}`;
    }
}