var $ = function (id) {
    return document.getElementById(id);
};

function grabFile(file) {
    var request = new XMLHttpRequest();
    if (request) {
        request.onreadystatechange = function () {
            parseResponse(request);
        }

        request.open("GET", file, true);
        request.send(null);
    }
}

function parseResponse(request) {
    if (request.readyState == 4) {
        if (request.status == 200 || request.status == 304) {

            //print response to console
            console.log(request.responseText);

            //Parse a JavaScript object from the JSON file
            var obj = JSON.parse(request.responseText);

            //Can access data as follows: (check in console)
            console.log(obj.person.name);
            console.log(obj.person.email);

            //copy the 'inside' person object to person to make things simpler
            var person = obj.person;

            //Make a html string for the first line
            var h2 = "<h2><a href=\"mailto:" + person.email + "\">" + person.name + "</a></h2>";

            //Make a html string for the second line
            //Using the template literal method for this one..
            var webLink = `<a href="${person.website}">  ${person.website} </a>`;

            //Get reference to 'details' div in html
            var details = document.getElementById("details");

            //use innerHTML property to copy in the markup just created
            details.innerHTML = h2 + webLink;
        }
    }
}

window.onload = function () {

    var ul = $("list");
    //Get a reference to all the <a> tags:
    var aElements = ul.getElementsByTagName("a");

    for (var i = 0; i < aElements.length; i++) {

        //Assign event handler to each link (<a> tag)
        aElements[i].onclick = function () {
            grabFile(this.href);
            return false;
        }
    }
}
