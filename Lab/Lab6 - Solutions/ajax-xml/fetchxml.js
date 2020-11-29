var $ = function (id) { return document.getElementById(id); };

function grabFile(file) {
  var request = new XMLHttpRequest();
  if (request) {
    request.onreadystatechange = function() {
      parseResponse(request);
    };
    request.open("GET", file, true);
    request.send(null);
  }
}

function parseResponse(request) {
  if (request.readyState == 4) {
	if (request.status == 200 || request.status == 304) {
		
		//Print response to console
		console.log(request.responseXML);
		
		var person = request.responseXML;
		
		//extract data from xml
		var name = person.getElementsByTagName("name")[0].firstChild.nodeValue;
		var website = person.getElementsByTagName("website")[0].firstChild.nodeValue;
		var email = person.getElementsByTagName("email")[0].firstChild.nodeValue;
		
		//create html elements
		var h2 = document.createElement("h2");
		var mailLink = document.createElement("a");
		mailLink.href = "mailto:" + email;
		mailLink.appendChild(document.createTextNode(name));
		h2.appendChild(mailLink);
		
		var webLink = document.createElement("a");
		webLink.appendChild(document.createTextNode(website));
		webLink.href = website;
	
		//Get reference to div in webpage
		var details = document.getElementById("details");
		
		//Delete any of the divs child nodes
		while(details.hasChildNodes()) 
		{
			details.removeChild(details.firstChild);
		}
		
		//Append newly created html elements to div
		details.appendChild(h2);
		details.appendChild(webLink)
    }
  }
}

window.onload = function(){
	
	var ul = $("list");
	//Get a reference to all the <a> tags:
	var aElements = ul.getElementsByTagName("a");
	
	for(var i=0; i<aElements.length; i++){
		
		//Assign event handler to each link (<a> tag)
		aElements[i].onclick = function(){
			grabFile(this.href);
			return false;
		}
	}
}