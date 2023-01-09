let user = document.getElementById("username");
let password = document.getElementById("password");
let form = document.getElementById("form");

function formValidation() {
   if (user.value == "") {
      document.getElementById("userError").innerHTML = "Enter your User Name"
   }else if(user.value.length < 3 ){
      document.getElementById("min").innerHTML = "Required Min 3"
   }
  if(password.value == ""){
   document.getElementById("passError").innerHTML = "Enter Your Password"
  }else if(password.value.length < 8){
   document.getElementById("enterDig").innerHTML = "Enter atleast 8 digit password"
  }
       return false;
}
   