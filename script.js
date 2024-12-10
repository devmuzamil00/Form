let form = document.getElementById('form');
form.addEventListener("submit",(e)=>{
    e.preventDefault();

    let username = e.target.username  
    // console.log(username);
      
    let email = e.target.email
    // console.log(email);
    
    let password = e.target.password
// console.log(password);

    if(username.value === "" || email.value === "" || password.value === ""){
        alert("Required Fields are Missing");
        
    } else{
        console.log("username=",username.value);
        console.log("email=",email.value);
        console.log("Password=",password.value);
        console.log("form submit !");
        
    }
    localStorage.setItem('username',username.value);
    localStorage.setItem('email',email.value);
    localStorage.setItem('password',password.value);
    // username.value = "";
    // email.value = "";
    // password.value = "";
    form.reset();


})
let eyeicon = document.getElementById("eyeicon");
// let password = document.getElementsById("password");

eyeicon.onclick = function (){
    if(password.type == "password"){
        password.type = "text";
        eyeicon.src = "img/eye-open-4.png"
    }else{
        password.type ="password"
        eyeicon.src = "img/closeeye.jpg"
    }
}


      
    















// let unameError = document.getElementById("uname-error");
// let emailError = document.getElementById("email-error");
// let passwordError = document.getElementById("password-error") ;

// function validateName(){
//     let uname = document.getElementById("username").value;
//     if(uname.length == 0){
//         unameError.innerHTML = "Name is Required"
//         return false;
//     }
//     if(!uname.match(/^[A-Za-z]*\s{1}[A-Za-z]*$/)){
//         unameError.innerHTML = "Write Full Name";
//         return false
//     }
//     unameError.innerHTML='';
//     return true;
// }
