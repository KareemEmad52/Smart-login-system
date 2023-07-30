// ==================> Sign Up 
let signupName = document.getElementById('signup-name');
let signupEmail = document.getElementById('signup-email');
let signupPassword = document.getElementById('signup-password');
let signUpBtn = document.getElementById('signup-btn');
let inCorrect = document.getElementById('incorrect');


let allUsers = [];

if(localStorage.getItem('allUsers') != null){
    allUsers = JSON.parse(localStorage.getItem('allUsers'));
}

signUpBtn.addEventListener('click',function (){
    if(allInputRequired()){
        inCorrect.innerHTML = `<span  class="p-2  text-danger">All inputs is required</span>`
    } else {
        if(emailExist()){
            inCorrect.innerHTML = `<span  class="p-2  text-danger">email already exists</span>`
        } else {
            if(validateEmail()){
                addUser();
                inCorrect.innerHTML = `<span class="text-success m-3">Success</span>`
                clearForm();
                signUpBtn.setAttribute("href",'../index.html')
            } else {
                inCorrect.innerHTML = `<span class="text-danger m-3">Email not valid</span>`
            }
            
        }
    }
})

function addUser(){
    let user = {
        name:signupName.value,
        email:signupEmail.value,
        password:signupPassword.value
    }

    allUsers.push(user);
    localStorage.setItem("allUsers",JSON.stringify(allUsers))
}

function emailExist(){
    for(let i = 0 ; i < allUsers.length;i++){
        if(signupEmail.value == allUsers[i].email){
            return true;
        }
    }
    return false;
}

function clearForm(){
    signupEmail.value = "";
    signupName.value = "";
    signupPassword.value = "";
}
function allInputRequired(){
    if (signupEmail.value == "" && signupPassword.value == ""){
        return true;
    } else if (signupEmail.value == "") {
        return true;
    } else if (signupPassword.value == "") {
        return true;
    }  else if (signupName.value == ""){
        return true;
    }else {
        return false;
    }
}


function validateEmail(){
    var regex = /[A-za-z0-9]{5,}@(gmail|yahoo|hotmail|outlook)\.com/gm
    if (regex.test(signupEmail.value)){
        return true;
    }
    else {
        return false;
    }
}