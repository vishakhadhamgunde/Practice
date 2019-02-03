function signup() {
    var firstName = document.getElementById("firstname").value;
    var lastName = document.getElementById("lastname").value;
    var emailAddress = document.getElementById("email").value;
    var password = document.getElementById("password").value;
    var collageName = document.getElementById("collagename").value;
    var gender = document.querySelector('input[name = "gender"]:checked').value;
    
    console.log( firstName + lastName + emailAddress + password + collageName + gender);
}