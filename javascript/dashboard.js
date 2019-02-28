function loadDashboard(){
    var x = localStorage.getItem("emailaddress");
    document.getElementById("username").innerHTML = x;
}

function logout(){
    console.log("logging out");
    localStorage.setItem("logout","true");
    window.location.href = "login.html";
}