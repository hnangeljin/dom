$(document).ready(function(){
	var correctPassword = "12345";
	$("form").submit(function(event){
		var user = $("#user").val();
		var password = $("#password").val();
		console.log(user + " " + password);
		if(user===""){
			event.preventDefault();
			$('h1').html("Enter the name please")
		} else if(password!==correctPassword){
			event.preventDefault();
			$('h1').html("Wrong password, try again")
		}else{
			event.preventDefault();
			window.location.href="thank.html";
		}
	})
	
});