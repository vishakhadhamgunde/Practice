function login() {
    var username = document.getElementById("username").value;
    var password = document.getElementById("password").value;
    var localstoragename = localStorage.getItem("emailaddress");
    var localstoragepassword = localStorage.getItem("password");
    var logout = localStorage.getItem("logout");
    if (username == localstoragename && password == localstoragepassword){
        document.location.href = "dashboard.html";
    }
    else{
        document.getElementById("message").innerHTML = ("Entered password or username is incorrect !");
    }
}
function loadLoginPage(){
    var x = localStorage.getItem("logout");
    if (x == "true"){
        document.getElementById("logout").style.display = 'block';
    }else{
        document.getElementById("logout").style.display = 'none'; 
    }
    localStorage.removeItem("logout");

    var y = localStorage.getItem("signup");
    if(y == "true"){
        document.getElementById("signup").style.display = 'block';
    }else{
        document.getElementById("signup").style.display = 'none'; 
    }
    localStorage.removeItem("signup");
}   