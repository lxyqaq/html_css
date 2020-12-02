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
            var movie = obj.movie;
            var img = "<img src='" + movie.img + "' class='movie'>";
            var h3 = "<h3 class='movie_h3'>" + movie.name + "</h3>";
            var p1 = "<p class='movie_p'>Genre: " + movie.genre + "</p>";
            var p2 = "<p class='movie_p'>Running Time: " + movie.time + "</p>";
            var p3 = "<p class='movie_p'>Rating: " + movie.rating + "</p>";
            var intro = document.getElementById("intro");
            intro.innerHTML = img + h3 + p1 + p2 + p3;
        }
    }
}

window.onload = function () {

    var ul = document.querySelector("#movies ul");

    var aElements = ul.getElementsByTagName("a");

    for (var i = 0; i < aElements.length; i++) {
        aElements[i].onclick = function () {
            grabFile(this.href);
            return false;
        }
    }

}
