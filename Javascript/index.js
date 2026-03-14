function toggle(){
      var Sidenav = document.getElementById("Sidenav");
      var topnav = document.getElementById("topnav");
       var value = Sidenav.style.width;
       if(value == '0px'){
        Sidenav.style.width = "250px";
        Sidenav.style.transition = '0.3s';
        topnav.style.width = "100%";
        topnav.style.left = '250px';
        topnav.style.transition ="0.3s";

       }
       else {
        Sidenav.style.width = "0px"
        Sidenav.style.transition ='0.3s';
        topnav.style.left = "0px";
        topnav.style.width = "100%";
        topnav.style.transition ="0.3s";
        
       }
}
function tab(activebtn,inactivebtn, activ,inactiv){
   var act = document.getElementById(activ);
   var inact = document.getElementById(inactiv);
    var actbtn = document.getElementById(activebtn);
    actbtn.style.background = "darkorange";
    actbtn.style.color = "white";
    btn = document.getElementById(inactivebtn);
    btn.style.background = "white";
    btn.style.color = "black";
   act.style.display= "block";
   inact.style.display="none";
}
function signup(event) {
    event.preventDefault();
    var user = {};
    var form = document.forms.signUpForm;
      var fullname = form.elements.fullname;
      var nameMsg = document.getElementById("name-lbl");
      var email = form.elements.email;
      var emailMsg = document.getElementById("email-lbl");
      var password = form.elements.password;
      var passwordMsg = document.getElementById("password-lbl");
     if(fullname.value.trim().length == 0){
         nameMsg.style.display = "block";
            fullname.style.borderColor="red";
            nameMsg.innerHTML = "Fullname is required !";
         
     }
     else if(email.value.trim().length == 0){
            emailMsg.style.display = "block";
            email.style.borderColor="red";
            emailMsg.innerHTML = "Email is required !";
     }
     else if(password.value.trim().length == 0){
            passwordMsg.style.display = "block";
            password.style.borderColor="red";
            passwordMsg.innerHTML = "password is required !";
     }
     else if(password.value.length < 8){
             passwordMsg.style.display = "block";
            password.style.borderColor="red";
            passwordMsg.innerHTML = "password Length is rquired more than 8 character !";
     } 
     else{
          user.fullname = fullname.value.trim();
          user.email = email.value.trim();
          user.password = password.value.trim();
         console.log(user);
     }
}
function onInputValidation(input,msg){
   input.style.borderColor = "#ccc";
   var nameMsg = document.getElementById(msg);
   nameMsg.innerHTML = "";
   nameMsg.style.display = "none";
}

function btnfunc(idOfInput,btnIcon){
   var password = document.getElementById(idOfInput);
   var btnIcon = document.getElementById(btnIcon)
   if(password.type == "password"){
      password.type = "text";
      btnIcon.className = "fa fa-eye-slash";

   }
   else{
      password.type = "password";
       btnIcon.className = "fa fa-eye";
   }
  
    
}
function login(event) {
   event.preventDefault();
   var user = {};
    var form = document.forms.loginForm;
       var email = form.elements.email;
       var emailMsg = document.getElementById("login-email-lbl");
       var password = form.elements.password;
       var pass = document.getElementById("login-password-lbl");
       if(email.value.trim().length == 0){
             email.style.borderColor = "red";
             emailMsg.style.display = "block";
             emailMsg.innerHTML = "Email field is requird !";

       }else if(password.value.trim().length == 0){
              password.style.borderColor = "red";
             pass.style.display = "block";
             pass.innerHTML = "Password field is requird !";
       }
       else{
           user.email = email.value.trim();
           user.password = password.value.trim();
           console.log(email,password);
           swal.fire({
            title:"signup success !",
            icon:'success'

           });

       }

       }
