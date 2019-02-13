function loadDashboard(){
    var x = localStorage.getItem("username");
    document.getElementById("username").innerHTML = x;
}

function logout(){
    console.log("logging out");
    localStorage.setItem("logout","true");
    window.location.href = "login.html";
}