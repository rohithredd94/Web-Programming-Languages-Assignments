$(document).ready(function() {
	// your js code goes here...

	$("#username").focusin(function(){
		console.log("Inside");
		$("#span1").remove();
		var para = document.createElement("span");
		var node = document.createTextNode("infoMessage");
		para.appendChild(node);
		para.setAttribute("id", "span1");
		$(para).addClass("info");
		var child = document.getElementById("username");
		console.log(para);
		$(para).insertAfter("#username");
	});
	$("#username").focusout(function(){
		$("#span1").remove();
	});

	$("#password").focusin(function(){
		console.log("Inside");
		$("#span2").remove();
		var para = document.createElement("span");
		var node = document.createTextNode("infoMessage");
		para.appendChild(node);
		para.setAttribute("id", "span2");
		$(para).addClass("info");
		var child = document.getElementById("password");
		console.log(para);
		$(para).insertAfter("#password");
	});
	$("#password").focusout(function(){
		$("#span2").remove();
	});

	$("#email").focusin(function(){
		console.log("Inside");
		$("#span3").remove();
		var para = document.createElement("span");
		var node = document.createTextNode("infoMessage");
		para.appendChild(node);
		para.setAttribute("id", "span3");
		$(para).addClass("info");
		var child = document.getElementById("email");
		console.log(para);
		$(para).insertAfter("#email");
	});
	$("#email").focusout(function(){
		$("#span3").remove();
	});
});
