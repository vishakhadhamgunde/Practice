function signup() {
    var firstname = document.getElementById("firstname").value;
    var lastname = document.getElementById("lastname").value;
    var emailaddress = document.getElementById("email").value;
    var password = document.getElementById("password").value;
    var gender = document.querySelector('input[name = "gender"]:checked');
    var logout = localStorage.getItem("logout");
    localStorage.setItem("firstname",firstname);
    localStorage.setItem("lastname",lastname);
    localStorage.setItem("password",password);
    localStorage.setItem("emailaddress",emailaddress);
    localStorage.setItem("gender",gender);

        console.log("signed up");
        localStorage.setItem("signup","true");
        
    } 