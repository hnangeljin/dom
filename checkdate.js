$(document).ready(function(){
	//this will validate most of the valid input date  
	 re = /^([0-1]{1})([0-9]{1})\/([0-3]{1})([0-9]{1})\/(\d{4})$/;
	$("form").submit(function(event){
		var date = $("#date").val();
		if(re.test(date)){
			alert("valid input");
		}else{
			alert("invalid input");
		}	
	})

	
});