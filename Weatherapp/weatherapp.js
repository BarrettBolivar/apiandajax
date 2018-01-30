$(document).ready(function() {
    $('form').submit(function(e) {
        e.preventDefault();
        var builturl = "http://api.openweathermap.org/data/2.5/weather?q=";
        var city = $("#userInput").val();
        builturl += city;
        builturl += "&APPID=fe9dbf41e77f7f993487181ce566b213&units=imperial";
        $.get(builturl, function(res){
            console.log(res);
            $('#main').append('<h1> Name: ' + res.name + '</h1>')
            $('#main').append('<h2> Temp:' + res.main.temp + '</h2>')
            
        });
    });
});
// api key : fe9dbf41e77f7f993487181ce566b213