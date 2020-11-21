const api = {
    key: "4260ff093ad3a8eaeff6b3c91d8934cc",
    base: "https://api.openweathermap.org/data/2.5/"
}

const searchbox = document.querySelector('.search-box');
searchbox.addEventListener('keypress', setQuery);

const searchbox2 = document.querySelector('.search-box2');
searchbox2.addEventListener('keypress', setQuery2);

let map, infoWindow;

function initMap() {
    map = new google.maps.Map(document.getElementById("map"), {
        center: {lat: -34.397, lng: 150.644},
        zoom: 11,
    });
    infoWindow = new google.maps.InfoWindow();
    const locationButton = document.createElement("button");
    locationButton.textContent = "Pan to Current Location";
    locationButton.classList.add("custom-map-control-button");
    map.controls[google.maps.ControlPosition.TOP_CENTER].push(
        locationButton
    );
    locationButton.addEventListener("click", () => {
        // Try HTML5 geolocation.
        if (navigator.geolocation) {
            navigator.geolocation.getCurrentPosition(
                (position) => {
                    const pos = {
                        lat: position.coords.latitude,
                        lng: position.coords.longitude,
                    };
                    infoWindow.setPosition(pos);
                    infoWindow.setContent("Location found.");
                    infoWindow.open(map);
                    map.setCenter(pos);
                },
                () => {
                    handleLocationError(true, infoWindow, map.getCenter());
                }
            );
        } else {
            // Browser doesn't support Geolocation
            handleLocationError(false, infoWindow, map.getCenter());
        }
    });
}

function handleLocationError(browserHasGeolocation, infoWindow, pos) {
    infoWindow.setPosition(pos);
    infoWindow.setContent(
        browserHasGeolocation
            ? "Error: The Geolocation service failed."
            : "Error: Your browser doesn't support geolocation."
    );
    infoWindow.open(map);
}

function setQuery(evt) {
    if (evt.keyCode == 13) {
        getResults(searchbox.value);
    }
}

function setQuery2(evt) {
    if (evt.keyCode == 13) {
        getResults2(searchbox2.value);
    }
}

function getResults(query) {
    fetch(`${api.base}forecast?q=${query}&units=metric&APPID=${api.key}`)
        .then(forecast => {
            return forecast.json();
        }).then(displayResults);
}

function getResults2(query2) {
    fetch(`${api.base}forecast?q=${query2}&units=metric&APPID=${api.key}`)
        .then(forecast2 => {
            return forecast2.json().then(get);
        });

    function get(forecast2) {
        if (query2 != undefined) {
            label2 = forecast2.city.name;
            mydatasets2 = [];
            mydatasets4 = [];
            for (let k = 0; k < 7; k++) {
                mydatasets2.push(Math.round(forecast2.list[k].main.temp));
                mydatasets4.push(Math.round(forecast2.list[k].clouds.all));
            }
            displayChart();
        }
    }
}

function displayResults(forecast) {

    let city = document.querySelector('.location-and-date .location-and-date__location');
    city.innerText = `${forecast.city.name}, ${forecast.city.country}`;

    let now = new Date();
    let date = document.querySelector('.location-and-date div');
    date.innerText = dateBuilder(now);

    let icon = document.querySelector('.current-temperature__icon');
    icon.src = "http://openweathermap.org/img/wn/" + forecast.list[0].weather[0].icon + "@2x.png";

    let temp = document.querySelector('.current-temperature__value');
    temp.innerHTML = `${Math.round(forecast.list[0].main.temp)}<span>&deg;C</span>`;

    let weather_el = document.querySelector('.current-temperature__summary');
    weather_el.innerText = forecast.list[0].weather[0].description;

    let high = document.querySelector('.current-stats_temperature_high_low :nth-child(1)');
    high.innerHTML = `${Math.round(forecast.list[0].main.temp_max)}<spqn>&deg;C</spqn>`;

    let low = document.querySelector('.current-stats_temperature_high_low :nth-child(3)');
    low.innerHTML = `${Math.round(forecast.list[0].main.temp_min)}<spqn>&deg;C</spqn>`;

    let wind = document.querySelector('.current-stats_temperature_wind_rain :nth-child(1)');
    wind.innerHTML = `${Math.round(forecast.list[0].wind.speed)}<spqn>mph</spqn>`;

    let rain = document.querySelector('.current-stats_temperature_wind_rain :nth-child(3)');
    rain.innerHTML = `${Math.round(forecast.list[0].pop) * 100}<spqn>%</spqn>`;

    let ground = document.querySelector('.current-stats_temperature_ground_humidity :nth-child(1)');
    ground.innerHTML = `${Math.round(forecast.list[0].main.grnd_level)}<spqn>hPa</spqn>`;

    let humidith = document.querySelector('.current-stats_temperature_ground_humidity :nth-child(3)');
    humidith.innerHTML = `${Math.round(forecast.list[0].main.humidity)}<spqn>%</spqn>`;

    //day 1
    let week1 = document.getElementById("day1_1");
    week1.innerHTML = GetWeek(1) + "<div class=\"next-5-days__label\">30/7</div>";
    let day1 = document.querySelector('#day1_1 div');
    day1.innerHTML = GetDate(1);
    let low_temp1 = document.getElementById("day1_2");
    low_temp1.innerHTML = `${Math.round(forecast.list[7].main.temp_min)}<spqn>&deg;C</spqn><div class="next-5-days__label">Low</div>`;
    let High_temp1 = document.getElementById("day1_3");
    High_temp1.innerHTML = `${Math.round(forecast.list[7].main.temp_max)}<spqn>&deg;C</spqn><div class="next-5-days__label">High</div>`;
    let icon1 = document.getElementById("day1_4").firstElementChild;
    icon1.src = "http://openweathermap.org/img/wn/" + forecast.list[7].weather[0].icon + "@2x.png";
    let rain1 = document.getElementById("day1_5");
    rain1.innerHTML = `${Math.round(forecast.list[7].pop) * 100}<spqn>%</spqn><div class="next-5-days__label">Rain</div>`;
    let wind1 = document.getElementById("day1_6");
    wind1.innerHTML = `${Math.round(forecast.list[7].wind.speed)}<spqn>mph</spqn><div class="next-5-days__label">Wind</div>`;

    //day 2
    let week2 = document.getElementById("day2_1");
    week2.innerHTML = GetWeek(2) + "<div class=\"next-5-days__label\">30/7</div>";
    let day2 = document.querySelector('#day2_1 div');
    day2.innerHTML = GetDate(2);
    let low_temp2 = document.getElementById("day2_2");
    low_temp2.innerHTML = `${Math.round(forecast.list[15].main.temp_min)}<spqn>&deg;C</spqn><div class="next-5-days__label">Low</div>`;
    let High_temp2 = document.getElementById("day2_3");
    High_temp2.innerHTML = `${Math.round(forecast.list[15].main.temp_max)}<spqn>&deg;C</spqn><div class="next-5-days__label">High</div>`;
    let icon2 = document.getElementById("day2_4").firstElementChild;
    icon2.src = "http://openweathermap.org/img/wn/" + forecast.list[15].weather[0].icon + "@2x.png";
    let rain2 = document.getElementById("day2_5");
    rain2.innerHTML = `${Math.round(forecast.list[15].pop) * 100}<spqn>%</spqn><div class="next-5-days__label">Rain</div>`;
    let wind2 = document.getElementById("day2_6");
    wind2.innerHTML = `${Math.round(forecast.list[15].wind.speed)}<spqn>mph</spqn><div class="next-5-days__label">Wind</div>`;

    //day 3
    let week3 = document.getElementById("day3_1");
    week3.innerHTML = GetWeek(3) + "<div class=\"next-5-days__label\">30/7</div>";
    let day3 = document.querySelector('#day3_1 div');
    day3.innerHTML = GetDate(3);
    let low_temp3 = document.getElementById("day3_2");
    low_temp3.innerHTML = `${Math.round(forecast.list[23].main.temp_min)}<spqn>&deg;C</spqn><div class="next-5-days__label">Low</div>`;
    let High_temp3 = document.getElementById("day3_3");
    High_temp3.innerHTML = `${Math.round(forecast.list[23].main.temp_max)}<spqn>&deg;C</spqn><div class="next-5-days__label">High</div>`;
    let icon3 = document.getElementById("day3_4").firstElementChild;
    icon3.src = "http://openweathermap.org/img/wn/" + forecast.list[23].weather[0].icon + "@2x.png";
    let rain3 = document.getElementById("day3_5");
    rain3.innerHTML = `${Math.round(forecast.list[23].pop) * 100}<spqn>%</spqn><div class="next-5-days__label">Rain</div>`;
    let wind3 = document.getElementById("day3_6");
    wind3.innerHTML = `${Math.round(forecast.list[23].wind.speed)}<spqn>mph</spqn><div class="next-5-days__label">Wind</div>`;

    //day 4
    let week4 = document.getElementById("day4_1");
    week4.innerHTML = GetWeek(4) + "<div class=\"next-5-days__label\">30/7</div>";
    let day4 = document.querySelector('#day4_1 div');
    day4.innerHTML = GetDate(4);
    let low_temp4 = document.getElementById("day4_2");
    low_temp4.innerHTML = `${Math.round(forecast.list[31].main.temp_min)}<spqn>&deg;C</spqn><div class="next-5-days__label">Low</div>`;
    let High_temp4 = document.getElementById("day4_3");
    High_temp4.innerHTML = `${Math.round(forecast.list[31].main.temp_max)}<spqn>&deg;C</spqn><div class="next-5-days__label">High</div>`;
    let icon4 = document.getElementById("day4_4").firstElementChild;
    icon4.src = "http://openweathermap.org/img/wn/" + forecast.list[31].weather[0].icon + "@2x.png";
    let rain4 = document.getElementById("day4_5");
    rain4.innerHTML = `${Math.round(forecast.list[31].pop) * 100}<spqn>%</spqn><div class="next-5-days__label">Rain</div>`;
    let wind4 = document.getElementById("day4_6");
    wind4.innerHTML = `${Math.round(forecast.list[31].wind.speed)}<spqn>mph</spqn><div class="next-5-days__label">Wind</div>`;

    //day 5
    let week5 = document.getElementById("day5_1");
    week5.innerHTML = GetWeek(5) + "<div class=\"next-5-days__label\">30/7</div>";
    let day5 = document.querySelector('#day5_1 div');
    day5.innerHTML = GetDate(5);
    let low_temp5 = document.getElementById("day5_2");
    low_temp5.innerHTML = `${Math.round(forecast.list[39].main.temp_min)}<spqn>&deg;C</spqn><div class="next-5-days__label">Low</div>`;
    let High_temp5 = document.getElementById("day5_3");
    High_temp5.innerHTML = `${Math.round(forecast.list[39].main.temp_max)}<spqn>&deg;C</spqn><div class="next-5-days__label">High</div>`;
    let icon5 = document.getElementById("day5_4").firstElementChild;
    icon5.src = "http://openweathermap.org/img/wn/" + forecast.list[39].weather[0].icon + "@2x.png";
    let rain5 = document.getElementById("day5_5");
    rain5.innerHTML = `${Math.round(forecast.list[39].pop) * 100}<spqn>%</spqn><div class="next-5-days__label">Rain</div>`;
    let wind5 = document.getElementById("day5_6");
    wind5.innerHTML = `${Math.round(forecast.list[39].wind.speed)}<spqn>mph</spqn><div class="next-5-days__label">Wind</div>`;

    document.getElementById("metric").onclick = function () {
        temp.innerHTML = `${Math.round(forecast.list[0].main.temp)}<span>&deg;C</span>`;
        high.innerHTML = `${Math.round(forecast.list[0].main.temp_max)}<spqn>&deg;C</spqn>`;
        low.innerHTML = `${Math.round(forecast.list[0].main.temp_min)}<spqn>&deg;C</spqn>`;
        low_temp1.innerHTML = `${Math.round(forecast.list[7].main.temp_min)}<spqn>&deg;C</spqn><div class="next-5-days__label">Low</div>`;
        High_temp1.innerHTML = `${Math.round(forecast.list[7].main.temp_max)}<spqn>&deg;C</spqn><div class="next-5-days__label">High</div>`;
        low_temp2.innerHTML = `${Math.round(forecast.list[15].main.temp_min)}<spqn>&deg;C</spqn><div class="next-5-days__label">Low</div>`;
        High_temp2.innerHTML = `${Math.round(forecast.list[15].main.temp_max)}<spqn>&deg;C</spqn><div class="next-5-days__label">High</div>`;
        low_temp3.innerHTML = `${Math.round(forecast.list[23].main.temp_min)}<spqn>&deg;C</spqn><div class="next-5-days__label">Low</div>`;
        High_temp3.innerHTML = `${Math.round(forecast.list[23].main.temp_max)}<spqn>&deg;C</spqn><div class="next-5-days__label">High</div>`;
        low_temp4.innerHTML = `${Math.round(forecast.list[31].main.temp_min)}<spqn>&deg;C</spqn><div class="next-5-days__label">Low</div>`;
        High_temp4.innerHTML = `${Math.round(forecast.list[31].main.temp_max)}<spqn>&deg;C</spqn><div class="next-5-days__label">High</div>`;
        low_temp5.innerHTML = `${Math.round(forecast.list[39].main.temp_min)}<spqn>&deg;C</spqn><div class="next-5-days__label">Low</div>`;
        High_temp5.innerHTML = `${Math.round(forecast.list[39].main.temp_max)}<spqn>&deg;C</spqn><div class="next-5-days__label">High</div>`;
    }

    document.getElementById("imperial").onclick = function () {
        temp.innerHTML = `${Math.round(forecast.list[0].main.temp * 1.8 + 32)}<span>&deg;F</span>`;
        high.innerHTML = `${Math.round(forecast.list[0].main.temp_max * 1.8 + 32)}<spqn>&deg;F</spqn>`;
        low.innerHTML = `${Math.round(forecast.list[0].main.temp_min * 1.8 + 32)}<spqn>&deg;F</spqn>`;
        low_temp1.innerHTML = `${Math.round(forecast.list[7].main.temp_min * 1.8 + 32)}<spqn>&deg;F</spqn><div class="next-5-days__label">Low</div>`;
        High_temp1.innerHTML = `${Math.round(forecast.list[7].main.temp_max * 1.8 + 32)}<spqn>&deg;F</spqn><div class="next-5-days__label">High</div>`;
        low_temp2.innerHTML = `${Math.round(forecast.list[15].main.temp_min * 1.8 + 32)}<spqn>&deg;F</spqn><div class="next-5-days__label">Low</div>`;
        High_temp2.innerHTML = `${Math.round(forecast.list[15].main.temp_max * 1.8 + 32)}<spqn>&deg;F</spqn><div class="next-5-days__label">High</div>`;
        low_temp3.innerHTML = `${Math.round(forecast.list[23].main.temp_min * 1.8 + 32)}<spqn>&deg;F</spqn><div class="next-5-days__label">Low</div>`;
        High_temp3.innerHTML = `${Math.round(forecast.list[23].main.temp_max * 1.8 + 32)}<spqn>&deg;F</spqn><div class="next-5-days__label">High</div>`;
        low_temp4.innerHTML = `${Math.round(forecast.list[31].main.temp_min * 1.8 + 32)}<spqn>&deg;F</spqn><div class="next-5-days__label">Low</div>`;
        High_temp4.innerHTML = `${Math.round(forecast.list[31].main.temp_max * 1.8 + 32)}<spqn>&deg;F</spqn><div class="next-5-days__label">High</div>`;
        low_temp5.innerHTML = `${Math.round(forecast.list[39].main.temp_min * 1.8 + 32)}<spqn>&deg;F</spqn><div class="next-5-days__label">Low</div>`;
        High_temp5.innerHTML = `${Math.round(forecast.list[39].main.temp_max * 1.8 + 32)}<spqn>&deg;F</spqn><div class="next-5-days__label">High</div>`;
    }

    label1 = forecast.city.name;
    mydatasets1 = [];
    for (let j = 0; j < 7; j++) {
        mydatasets1.push(Math.round(forecast.list[j].main.temp));
    }

    label2 = forecast.city.name;
    mydatasets2 = [];
    mydatasets3 = [];
    for (let k = 0; k < 7; k++) {
        mydatasets2.push(Math.round(forecast.list[k].main.temp));
        mydatasets3.push(Math.round(forecast.list[k].clouds.all));
    }

    displayChart();

    document.getElementById("temperature").onclick = function () {
        displayChart();
    }

    document.getElementById("precipitation").onclick = function () {
        displayChart2();
    }

    let map;

    function initMap1() {
        map = new google.maps.Map(document.getElementById("map"), {
            center: {lat: forecast.city.coord.lat, lng: forecast.city.coord.lon},
            zoom: 11,
        });
    }

    initMap1();
}

function displayChart() {
    var ctx = document.getElementById('myChart').getContext('2d');
    Chart.defaults.global.defaultFontColor = 'white';
    var chart = new Chart(ctx, {
        type: 'line',
        data: {
            labels: ['Now', 'Three hours later', 'Six hours later', 'Nine hours later', 'Twelve hours later', 'Fifteen hours later', 'Eighteen hours later'],
            datasets: [
                {
                    label: label1,
                    data: mydatasets1,
                    borderColor: '#DC7454'
                },
                {
                    label: label2,
                    data: mydatasets2,
                    borderColor: '#b3dc54'
                }
            ]
        },
        options: {
            scales: {
                yAxes: [{
                    ticks: {
                        suggestedMin: 0,
                        suggestedMax: 35,
                        stepSize: 3,
                        callback: function (value, index, values) {
                            return value + '°C';
                        },
                    }
                }]
            },
            title: {
                display: true,
                text: 'Hourly Forecast',
                fontColor: '#FFFFFF',
                fontSize: 20,
            }
        }
    });
}

function displayChart2() {
    var ctx = document.getElementById('myChart').getContext('2d');
    Chart.defaults.global.defaultFontColor = 'white';
    var chart = new Chart(ctx, {
        type: 'bar',
        data: {
            labels: ['Now', 'Three hours later', 'Six hours later', 'Nine hours later', 'Twelve hours later', 'Fifteen hours later', 'Eighteen hours later'],
            datasets: [
                {
                    label: label1,
                    data: mydatasets3,
                    backgroundColor: '#DC7454',
                    borderColor: '#DC7454'
                },
                {
                    label: label2,
                    data: mydatasets4,
                    backgroundColor: '#b3dc54',
                    borderColor: '#b3dc54'
                }
            ]
        },
        options: {
            scales: {
                yAxes: [{
                    ticks: {
                        suggestedMin: 0,
                        suggestedMax: 100,
                        stepSize: 10,
                        callback: function (value, index, values) {
                            return value + '%';
                        },
                    }
                }]
            },
            title: {
                display: true,
                text: 'Hourly Forecast',
                fontColor: '#FFFFFF',
                fontSize: 20,
            }
        }
    });
}

function dateBuilder(d) {
    let months = ["January", "February", "March", "April", "May", "June", "July", "August", "September", "October", "November", "December"];
    let days = ["Sunday", "Monday", "Tuesday", "Wednesday", "Thursday", "Friday", "Saturday"];

    let day = days[d.getDay()];
    let date = d.getDate();
    let month = months[d.getMonth()];
    let year = d.getFullYear();

    return `${day} ${date} ${month} ${year}`;
}

function GetDate(daysInFuture) {
    var today = new Date();
    var newdate = new Date();
    newdate.setDate(today.getDate() + daysInFuture);

    var month = newdate.getMonth() + 1; //months from 1-12
    var day = newdate.getDate();
    var year = newdate.getUTCFullYear();

    return month + "/" + day;
}

function GetWeek(daysInFuture) {
    var dd = new Date();
    let days = ["Sunday", "Monday", "Tuesday", "Wednesday", "Thursday", "Friday", "Saturday"];
    dd.setDate(dd.getDate() + daysInFuture);
    var d = days[dd.getDay()];
    return d;
}

