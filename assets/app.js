
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
        console.log(response);
        //current weather updated when page loads
        currentTemp=response.main.temp;
        currentTemp= Math.round((currentTemp-273.5)*1.8+32);
        var cImg = response.weather[0].icon;
        console.log(cImg)
        var cImgURL= "http://openweathermap.org/img/w/" +cImg + ".png";

        $("#cityName").text(response.name);
        $("#currentTemp").text(currentTemp+"°F");
        $("#currentHumid").text(response.main.humidity+"%");
        $("#currentWind").text(response.wind.speed+" mph");
        $("#currentUV").text(response.coord.value);
        $("#currentImg").attr("src", cImgURL);
     
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
        // console.log(byDay);
    
        //I couldn't get my for loop to work properly to generate new cards for each round.... working to develope better method here in the future...

        // for (var i=0; i < 5; i++){

        var fcDateInfo0= byDay[0].dt;
        console.log(fcDateInfo0);
        var fcTempInfo0= byDay[0].main.temp;
        fcTempInfo0= Math.round((fcTempInfo0-273.5)*1.8+32);
        var fcHumidInfo0= byDay[0].main.humidity;
        var fcIcon0= byDay[0].weather[0].icon;
        var iconURL0 = "http://openweathermap.org/img/w/" +fcIcon0 + ".png";
        
        $("#forecastDateInfo0").text(fcDateInfo0);
        $("#forecastTemp0").text(fcTempInfo0+"°F");
        $("#forecastHumid0").text(fcHumidInfo0+"%");
        $("#forecastIMG-0").attr("src", iconURL0);

        var fcDateInfo1= byDay[1].dt;
        var fcTempInfo1=byDay[1].main.temp;
        fcTempInfo1= Math.round((fcTempInfo1-273.5)*1.8+32);
        var fcHumidInfo1= byDay[1].main.humidity;
        var fcIcon1= byDay[1].weather[0].icon;
        var iconURL1 = "http://openweathermap.org/img/w/" +fcIcon1 + ".png";
        

        $("#forecastDateInfo1").text(fcDateInfo1);
        $("#forecastTemp1").text(fcTempInfo1+"°F");
        $("#forecastHumid1").text(fcHumidInfo1+"%");
        $("#forecastIMG-1").attr("src", iconURL1);

        var fcDateInfo2= byDay[2].dt;
        var fcTempInfo2= byDay[2].main.temp;
        fcTempInfo2= Math.round((fcTempInfo2-273.5)*1.8+32);
        var fcHumidInfo2= byDay[2].main.humidity;
        var fcIcon2= byDay[2].weather[0].icon;
        var iconURL2 = "http://openweathermap.org/img/w/" +fcIcon2 + ".png";
        

        $("#forecastDateInfo2").text(fcDateInfo2);
        $("#forecastTemp2").text(fcTempInfo2+"°F");
        $("#forecastHumid2").text(fcHumidInfo2+"%");
        $("#forecastIMG-2").attr("src", iconURL2);

        var fcDateInfo3= byDay[3].dt;
        var fcTempInfo3= byDay[3].main.temp;
        fcTempInfo3= Math.round((fcTempInfo3-273.5)*1.8+32);
        var fcHumidInfo3= byDay[3].main.humidity;
        var fcIcon3= byDay[3].weather[0].icon;
        var iconURL3 = "http://openweathermap.org/img/w/" +fcIcon3 + ".png";
        

        $("#forecastDateInfo3").text(fcDateInfo3);
        $("#forecastTemp3").text(fcTempInfo3+"°F");
        $("#forecastHumid3").text(fcHumidInfo3+"%");
        $("#forecastIMG-3").attr("src", iconURL3);

        var fcDateInfo4= byDay[4].dt;
        var fcTempInfo4=byDay[4].main.temp;
        fcTempInfo4= Math.round((fcTempInfo4-273.5)*1.8+32);
        var fcHumidInfo4= byDay[4].main.humidity;
        var fcIcon4= byDay[4].weather[0].icon;
        var iconURL4 = "http://openweathermap.org/img/w/" +fcIcon4 + ".png";
        

        $("#forecastDateInfo4").text(fcDateInfo4);
        $("#forecastTemp4").text(fcTempInfo4+"°F");
        $("#forecastHumid4").text(fcHumidInfo4+"%");
        $("#forecastIMG-4").attr("src", iconURL4);


        //end for loop
        // }
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

