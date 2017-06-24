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
		//console.log("Inside");
		$("#span1").empty().removeClass("ok").removeClass("error");
		var element = document.getElementById("username").nextSibling;
		var node = document.createTextNode("infoMessage");
		element.appendChild(node);
		$(element).addClass("info");
		//$("#span1").html("node");
		//element.setAttribute("id", "span1");
		//var child = document.getElementById("username");
		//console.log(element);
		//$(element).insertAfter("#username");
	});
	$("#username").focusout(function(){
		$("#span1").empty().removeClass("info").removeClass("ok").removeClass("error");
		var username = $("#username");
		if(username.val().length != 0){
			console.log("Found Content");
			var pattern = /^[0-9a-zA-Z]+$/;
			if(username.val().match(pattern)){
				console.log("valid pattern");
				var element = document.getElementById("username").nextSibling;
				var node = document.createTextNode("OK");
				element.appendChild(node);
				$(element).addClass("ok");
			}else{
				console.log("invalid pattern");
				var element = document.getElementById("username").nextSibling;
				var node = document.createTextNode("Error");
				element.appendChild(node);
				$(element).addClass("error");
			}
		}
	});

	$("#password").focusin(function(){
		//console.log("Inside");
		$("#span2").empty();
		var element = document.getElementById("password").nextSibling;
		var node = document.createTextNode("infoMessage");
		element.appendChild(node);
		$(element).addClass("info");
	});
	$("#password").focusout(function(){
		$("#span2").empty().removeClass("info");
		var password = $("#password");
		if(password.val().length != 0){
			console.log("Found Content");
		}
	});

	$("#email").focusin(function(){
		//console.log("Inside");
		$("#span3").empty();
		var element = document.getElementById("email").nextSibling;
		var node = document.createTextNode("infoMessage");
		element.appendChild(node);
		$(element).addClass("info");
	});
	$("#email").focusout(function(){
		$("#span3").empty().removeClass("info");
		var email = $("#email");
		if(email.val().length != 0){
			console.log("Found Content");
		}
	});
});
