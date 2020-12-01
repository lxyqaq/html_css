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
            var obj = JSON.parse(request.responseText);
            var car1 = obj.car;
            var img = "<img src='" + obj.car.img + "' class='car' width='290'>";
            var p1 = "<p>Name: " + obj.car.name + "</p>";
            var p2 = "<p>Color: " + obj.car.color + "</p>";
            var p3 = "<p>Style: " + obj.car.style + "</p>";
            var p4 = "<p>Price: " + obj.car.price + "</p>";
            var section = document.getElementById("section");
            section.innerHTML = img + p1 + p2 + p3 + p4;
        }
    }
}

window.onload = function () {

    var ul = document.querySelector("nav");

    var aElements = ul.getElementsByTagName("a");

    for (var i = 0; i < aElements.length; i++) {
        aElements[i].onclick = function () {
            grabFile(this.href);
            return false;
        }
    }

}
