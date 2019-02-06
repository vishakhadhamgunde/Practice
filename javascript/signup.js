function signup() {
    var firstname = document.getElementById("firstname").value;
    var lastname = document.getElementById("lastname").value;
    var emailaddress = document.getElementById("email").value;
    var password = document.getElementById("password").value;
    var collagename = document.getElementById("collagename").value;
    var gender = document.querySelector('input[name = "gender"]:checked').value;
     
    console.log( firstname + lastname + emailaddress + password + collagename + gender + firstname);
}
