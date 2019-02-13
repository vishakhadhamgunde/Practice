function signup() {
    var username = document.getElementById("username").value;
    var emailaddress = document.getElementById("email").value;
    var password = document.getElementById("password").value;
    var collagename = document.getElementById("collagename").value;
    var gender = document.querySelector('input[name = "gender"]:checked');
    localStorage.setItem("username",username);
    localStorage.setItem("password",password);
    localStorage.setItem("emailaddress",emailaddress);
    localStorage.setItem("collagename",collagename);
    localStorage.setItem("gender",gender);
}