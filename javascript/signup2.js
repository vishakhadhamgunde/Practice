function signup2(){
    var firstName = document.getElementById("firstname").value;
    var lastName = document.getElementById("lastname").value;
    var emailaddress = document.getElementById("emailaddress").value;
    var password = document.getElementById("password").value;
    var select_gender = document.getElementById("select gender").value;
    var checkvalue = document.querySelector('.checkbox:checked').value;
     console.log( firstName + lastName + emailaddress + password +select_gender + checkvalue);
}
