function login() {
    var username = document.getElementById("username").value;
    var password = document.getElementById("password").value;
    var localstoragename = localStorage.getItem("username");
    var localstoragepassword = localStorage.getItem("password");

    if (username == localstoragename && password == localstoragepassword){
        document.location.href = "dashboard.html";
    }
    else{
        document.getElementById("message").innerHTML = "Entered Username or Password is incorrect."
        }
    }