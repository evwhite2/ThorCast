
var urlBase= "http://api.openweathermap.org/data/2.5/weather?q="
var myKey= "&APPID=8ccec0c944e2c13538684a7aeece76c0";
var cityName="";
var queryURL= urlBase+cityName+myKey;

$(document).ready(function(){

function success(pos) {
    var crd = pos.coords;
    var lat= crd.latitude;
    var long= crd.longitude;
    
    console.log(lat, long);
    
    var instantBase= "api.openweathermap.org/data/2.5/weather?lat="+lat+"&lon="+long+myKey;
    var instantBasefc= "api.openweathermap.org/data/2.5/forecast?lat="+lat+"&lon="+long+myKey;

  }

  var myPosition= window.navigator.geolocation.getCurrentPosition(success);
//   success(pos);
  currentWeather();
  forecast();

// var country="us";
// var x=280;
// var kelvinConvert= Math(x).((x-273.15)*1.8+32);
// console.log(kelvinConvert);

$("#searchBtn").on("click",function(){
    var searchVal= $("#criteria").val().trim();
    cityName= searchVal;
    
    currentWeather();
 
})


var urlForecastBase= "http://api.openweathermap.org/data/2.5/forecast?q="
var fcQueryURL=urlForecastBase+cityName+myKey+"&mode=JSON";
console.log(fcQueryURL);

function currentWeather(){

$.ajax({
    url: queryURL,
    method: "GET"
}).then(function(response){

    //current weather update
    console.log(response);
    $("#cityName").text(response.name);
    $("#currentTemp").text(response.main.temp);
    $("#currentHumid").text(response.main.humidity+"%");
    $("#currentWind").text(response.wind.speed);
    $("#currentUV").text(response.coord.value);
 
})


};

function forecast(){

$.ajax({
    url: fcQueryURL,
    method: "GET"
}).then(function(fcresponse){
    console.log(fcresponse);

    var byDay= fcresponse.list;
    
    for (var i=0; i < 5; i++){
       var thisIndex= byDay[i] 

        var fcDateInfo= thisIndex.dt;
        // Math(fcDateInfo)
        var fcTempInfo= thisIndex.main.temp;
        var fcHumidInfo= thisIndex.main.humidity;

        var fcDateIndex= $(".forecastDateInfo").data("date");
     

        if (i==fcDateIndex){
            $(".forecastDateInfo").text(fcDateInfo);
            $(".forecastTemp").text("Temp: "+fcTempInfo+ "°F");
            $(".forecastHumid").text("Humidity: "+fcHumidInfo+"%");
        };

        
        // var fcImg=byDay[i].weather.icon;
        
    }

});
}


//end of ready function
});


    // console.log(fcresponse);
    // ;
    // console.log(fcresponse.list[0].weather.icon); //http://openweathermap.org/img/wn/10d@____2x.png
    // console.log(fcresponse.list[0].main.temp_max+"-"+fcresponse.list[0].main.temp_min);
    // var forcastArray= fcresponse.list;
    // for (var 1)
// })
// };