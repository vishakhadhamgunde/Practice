function signup(){
    var username = document.getElementById("username").value;
    var password = document.getElementById("password").value;
    localStorage.getItem("username");
    localStorage.getItem("password");
    var localstoragename = localStorage.getItem("username");
    var localstoragepassword = localStorage.getItem("password");

    if(username == localstoragename && password == localstoragepassword){
        document.location.href = "dashboard.html";
    }
} 