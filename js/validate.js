$(document).ready(function() {
	// your js code goes here...
	var element = document.createElement("span");
	element.setAttribute("id", "span1");
	$(element).insertAfter("#username");
	
	element = document.createElement("span");
	element.setAttribute("id", "span2");
	$(element).insertAfter("#password");

	element = document.createElement("span");
	element.setAttribute("id", "span3");
	$(element).insertAfter("#email");

	$("#username").focusin(function(){
		$("#span1").empty().removeClass("ok").removeClass("error");
		var element = document.getElementById("span1")//.nextSibling;
		var node = document.createTextNode("infoMessage: only alphanumeric characters");
		element.appendChild(node);
		$(element).addClass("info");
	});
	$("#username").focusout(function(){
		$("#span1").empty().removeClass("info").removeClass("ok").removeClass("error");
		var username = $("#username");
		if(username.val().length != 0){
			var pattern = /^[a-zA-Z0-9]+$/;
			if(username.val().match(pattern)){
				var element = document.getElementById("span1");
				var node = document.createTextNode("OK");
				element.appendChild(node);
				$(element).addClass("ok");
			}else{
				var element = document.getElementById("span1");
				var node = document.createTextNode("Error");
				element.appendChild(node);
				$(element).addClass("error");
			}
		}
	});

	$("#password").focusin(function(){	
		$("#span2").empty().removeClass("ok").removeClass("error");
		var element = document.getElementById("span2");
		var node = document.createTextNode("infoMessage: atleast 8 characters");
		element.appendChild(node);
		$(element).addClass("info");
	});
	$("#password").focusout(function(){
		$("#span2").empty().removeClass("info").removeClass("ok").removeClass("error");
		var password = $("#password");
		if(password.val().length != 0){	
			if(password.val().length >= 8){
				var element = document.getElementById("span2");
				var node = document.createTextNode("OK");
				element.appendChild(node);
				$(element).addClass("ok");
			}else{
				var element = document.getElementById("span2");
				var node = document.createTextNode("Error");
				element.appendChild(node);
				$(element).addClass("error");
			}
		}
	});

	$("#email").focusin(function(){
		$("#span3").empty().removeClass("ok").removeClass("error");
		var element = document.getElementById("span3");
		var node = document.createTextNode("infoMessage: xxxx@yyyy.zzz");
		element.appendChild(node);
		$(element).addClass("info");
	});
	$("#email").focusout(function(){
		$("#span3").empty().removeClass("info").removeClass("ok").removeClass("error");
		var email = $("#email");
		if(email.val().length != 0){
			var pattern = /^[a-zA-Z0-9._-]+@[a-zA-Z0-9.-]+\.[a-zA-Z-:]{2,50}$/;
			if(pattern.test(email.val())){
				var element = document.getElementById("span3");
				var node = document.createTextNode("OK");
				element.appendChild(node);
				$(element).addClass("ok");
			}else{
				var element = document.getElementById("span3");
				var node = document.createTextNode("Error");
				element.appendChild(node);
				$(element).addClass("error");
			}
		}
	});
});
