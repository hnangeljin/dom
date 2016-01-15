function keydown (event) {
	var key = event.keyCode;
	if(key>47&&key<65){
		document.getElementById("results").innerHTML = "Number";
	}else{
		document.getElementById("results").innerHTML = "Letter";
	}
	
}