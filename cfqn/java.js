
var showAnswer=function() {
	var hiddenDiv=document.getElementById("showAnswer");
var answer=document.getElementById("answer");
	var password= document.getElementById("password").value;
	answer.innerHTML= password;
	document.getElementById("questionDiv").style.display="none";
	hiddenDiv.style.display="block";
	
	
}