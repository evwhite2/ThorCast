
var urlBase= "http://api.openweathermap.org/data/2.5/weather?q="
var myKey= "APPID=8ccec0c944e2c13538684a7aeece76c0";
var cityName="chicago";
var queryURL= urlBase+cityName+"&"+myKey;
var country="us";
console.log(queryURL);

function testing(){
console.log("testing");
};


$.ajax({
    url: queryURL,
    method: "GET"
}).then(function(response){
    console.log(response);
    $("#cityName").text(response.name);
    $("#currentTemp").text(response.main.temp);
    $("#currentHumid").text(response.main.humidity+"%");
    $("#currentWind").text(response.wind.speed);
    $("#currentUV").text(response.coord.value);
});