$(document).ready(function() {
	// your js code goes here...
	var para = document.createElement("span");
	para.setAttribute("id", "span1");
	$(para).insertAfter("#username");
	
	para = document.createElement("span");
	para.setAttribute("id", "span2");
	$(para).insertAfter("#password");

	para = document.createElement("span");
	para.setAttribute("id", "span3");
	$(para).insertAfter("#email");

	$("#username").focusin(function(){
		//console.log("Inside");
		$("#span1").empty();
		var para = document.getElementById("username").nextSibling;
		var node = document.createTextNode("infoMessage");
		para.appendChild(node);
		$(para).addClass("info");
		//$("#span1").html("node");
		//para.setAttribute("id", "span1");
		//var child = document.getElementById("username");
		//console.log(para);
		//$(para).insertAfter("#username");
	});
	$("#username").focusout(function(){
		$("#span1").empty().removeClass("info");
		var username = $("#username");
		if(username.val().length != 0){
			console.log("Found Content");

		}
	});

	$("#password").focusin(function(){
		//console.log("Inside");
		$("#span2").empty();
		var para = document.getElementById("password").nextSibling;
		var node = document.createTextNode("infoMessage");
		para.appendChild(node);
		$(para).addClass("info");
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
		var para = document.getElementById("email").nextSibling;
		var node = document.createTextNode("infoMessage");
		para.appendChild(node);
		$(para).addClass("info");
	});
	$("#email").focusout(function(){
		$("#span3").empty().removeClass("info");
		var email = $("#email");
		if(email.val().length != 0){
			console.log("Found Content");
		}
	});
});
