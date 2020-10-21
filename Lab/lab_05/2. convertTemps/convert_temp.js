"use strict";
var $ = function (id) {
    return document.getElementById(id);
};


var clearTextBoxes = function () {
    $("degrees_entered").value = "";
    $("degrees_computed").value = "";
};

var toCelsius = function () {
    $("degree_label_1").firstChild.nodeValue = "Enter F degrees:";
    $("degree_label_2").innerHTML = "Degrees Celsius:";
};

var toFahrenheit = function () {
    $("degree_label_1").firstChild.nodeValue = "Enter C degrees:";
    $("degree_label_2").innerHTML = "Degrees Fahrenheit:";
};

var convertTemp = function () {

}

window.onload = function () {
    $("convert").onclick = convertTemp;
    $("to_celsius").onclick = toCelsius;
    $("to_fahrenheit").onclick = toFahrenheit;
    $("degrees_entered").focus();
};