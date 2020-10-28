var $ = function (id) { return document.getElementById(id); };

var grabFile = function(file) {
	var request = new XMLHttpRequest();
	if (request) {
		request.onreadystatechange = function() {
			displayResponse(request);
		};
		
		request.open("GET", file, true);
		request.send(null);
	}
}

var displayResponse = function(request) {
	if (request.readyState == 4) {
		if (request.status == 200 || request.status == 304) {
			alert(request.responseText);
		}
	}
}


window.onload = function(){
	
	$("link").onclick = function(){
		grabFile(this.href);		//See notes below
		return false;
	}
}

/* Notes:

In the function above, the 'this' refers to the link that triggered the event handler.
We can access the href attribute using this.href (DOM HTML spec)

We 'return false' here to stop the browser following the link.

*/