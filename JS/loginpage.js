let loginEmail = document.getElementById('login-Email');
let loginPassword = document.getElementById('login-password');
let loginBtn = document.getElementById('login-btn');
let inCorrect = document.getElementById('incorrect');
let allUsers = [];
let welcomeName = '';
if(localStorage.getItem('allUsers') != null){
    allUsers = JSON.parse(localStorage.getItem('allUsers'));
}

function clearForm(){
    loginEmail.value = "";

}


loginBtn.addEventListener('click',function(){
    if(IsClear()){
        inCorrect.innerHTML = `<span  class="p-2  text-danger">All inputs is required</span>`
    } else if (loginCheck()){
        
        loginBtn.setAttribute('href',"HTML/welcome.html")
        clearForm();
        localStorage.setItem("userName",welcomeName)
        console.log(allUsers);
    } else {
        inCorrect.innerHTML = `<span  class="p-2  text-danger">incorrect email or password</span>`
    }
    
})
function IsClear(){
    if (loginEmail.value == "" && loginPassword.value == ""){
        return true
    } else if (loginEmail.value == "") {
        return true
    } else if (loginPassword.value == "") {
        return true
    }  else {
        return false;
    }
}
function loginCheck(){
    for(let i =0 ; i <allUsers.length;i++){
        if( loginEmail.value == allUsers[i].email && loginPassword.value == allUsers[i].password){
            welcomeName = allUsers[i].name;
            return true
        }
    }
    return false;
}


