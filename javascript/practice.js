function login(uName, pwd) {

	$.ajax({
		url: "http://localhost:3000/getLoginPage",
		type: 'GET',
		dataType: 'JSON',
		data: JSON.stringify({
         "userName": uName,
         "password" :pwd
		}),
		success: function (data1, textStatus) {
		    console.log("in success");
        },
        error: function(error){
            console.log("Inside error block.");
        }
    });

    console.log("line after ajax");
}