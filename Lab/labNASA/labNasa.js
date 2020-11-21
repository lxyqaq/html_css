var $ = function (id) {
    return document.getElementById(id);
};

var getData = function () {

    var inputdate = $("inputdate").value;
    var httpRequest = new XMLHttpRequest();
    var url = 'https://api.nasa.gov/planetary/apod?api_key=DEMO_KEY' + '&date=' + inputdate;
    httpRequest.open('GET', url, true);
    httpRequest.send();

    httpRequest.onreadystatechange = function () {
        if (httpRequest.readyState == 4 && httpRequest.status == 200) {
            buildPage(httpRequest);
        }
    };
}

var buildPage = function (request) {
    if (request.readyState == 4) {
        if (request.status == 200 || request.status == 304) {
            var data_josn = JSON.parse(request.responseText);

            var media_type = data_josn.media_type;
            var copyright = data_josn.title;
            var pic = data_josn.url;
            var explanation = data_josn.explanation;
            var date = data_josn.date;
            var a = $("data").firstChild;
            var b = $("data").firstChild.nextSibling;


            var divHTML = "";
            var h2HTML = '<h2>' + copyright + '</h2>';
            if (media_type == "image") {
                var imgHTML = '<img src="' + pic + '" style="width: 100%;">';
                divHTML += imgHTML;
            } else if (media_type == "video") {
                var iframeHTML = '<iframe src="' + pic + '" style="width: 100%;height: 400px;"></iframe>';
                divHTML += iframeHTML;
            }
            var pHTML = '<p>' + date + '</p >';
            var explanationHTML = '<p>' + explanation + '</p >';

            divHTML += pHTML;
            divHTML += explanationHTML;
            $("data").innerHTML = divHTML;

            console.log(data_josn);
        }
    }
}

window.onload = function () {
    $("button").onclick = getData;
}