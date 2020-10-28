var $ = function (id) { return document.getElementById(id); };

var getData = function() {

	
}

var buildPage = function(request) {
	if (request.readyState == 4) {
		if (request.status == 200 || request.status == 304) {
			
		}
	}
}

window.onload = function(){
	
	$("button").onclick = getData;
}