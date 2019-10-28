
var urlBase= "http://api.openweathermap.org/data/2.5/weather?q="
var myKey= "&APPID=8ccec0c944e2c13538684a7aeece76c0";
var cityName="";
var queryURL= urlBase+cityName+myKey;
var searchHistory=[];

$(document).ready(function(){
searching();

function success(pos) {
    
    console.log("pos ",pos);
    var crd =pos.coords;
    var lat= crd.latitude;
    var long= crd.longitude;
    
    console.log(lat, long);

    var instantBase= "http://api.openweathermap.org/data/2.5/weather?lat="+lat+"&lon="+long+myKey;
    var instantBasefc= "http://api.openweathermap.org/data/2.5/forecast?lat="+lat+"&lon="+long+myKey+"&mode=JSON";

    console.log(instantBase);
    
    initialWeather();
    
    function initialWeather(){

    $.ajax({
        url: instantBase,
        method: "GET"
    }).then(function(response){
    
        //current weather updated when page loads
        $("#cityName").text(response.name);
        $("#currentTemp").text(response.main.temp);
        $("#currentHumid").text(response.main.humidity+"%");
        $("#currentWind").text(response.wind.speed);
        $("#currentUV").text(response.coord.value);
     
    })

    
    };

    
    initialForecast();
    function initialForecast(){
        
        $.ajax({
            url: instantBasefc,
            method: "GET"
        }).then(function(fcresponse){
            console.log(fcresponse);

        var byDay= fcresponse.list;
    
        for (var i=0; i < 5; i++){
        var fcDateIndex= $(".forecastDateInfo").this.data("date");   
        console.log(fcDateIndex);

        var fcDateInfo= byDay[i].dt;
        var fcTempInfo= byDay[i].main.temp;
        var fcHumidInfo= byDay[i].main.humidity;
        
        

        if (fcDateIndex== byDay[i])
        // var fcImg=byDay[i].weather.icon;
        console.log(match);  
        }
        
    
        });

    }



  }

  var pos= window.navigator.geolocation.getCurrentPosition(success);
    success(pos);

  
    


    function searching(){
$("#search").click(function(event){
    
    event.preventDefault();

    var searchVal= $("#criteria").val();
    cityName= searchVal;   
    console.log("my input=",searchVal);

    // if (searchVal!=""&&){
    //   searchHistory.push(cityName);
    // }
    // var ele= $("<div>");
    // ele.text(searchHistory[0]);
    // // searchHistory[x].
    // console.log(searchHistory);

})

    };



//after determination

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

        var fcDateInfo= byDay[i].dt;
        // Math(fcDateInfo)
        var fcTempInfo= byDay[i].main.temp;
        var fcHumidInfo= byDay[i].main.humidity;

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
// currentWeather();
// forecast();

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

