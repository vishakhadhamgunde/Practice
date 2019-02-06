function signup(){
    var firstname = document.getElementById("firstname").value;
    var lastname = document.getElementById("lastname").value;
    var emailaddress = document.getElementById("emailaddress").value;
    var password = document.getElementById("password").value;
    var selectgender = document.getElementById("selectgender").value;
    localStorage.setItem("username","vishakha");
    localStorage.setItem("password","dv123");
    alert("user logged in" + " " +  localStorage.getItem("username") + " " + localStorage.getItem("password"));
    console.log(firstname + lastname + emailaddress + password +selectgender)
} 