// ====================> Welcome Page
let userName = document.getElementById('userName');
let logoutBtn = document.getElementById('logoutBtn');
let welcomeName = localStorage.getItem("userName");
localStorage.removeItem('userName')


logoutBtn.addEventListener('click',function(){
    logoutBtn.setAttribute('href',"../index.html")
})
function printUserName(){
    userName.innerHTML = `Welcome ${welcomeName}`;
}

printUserName();
