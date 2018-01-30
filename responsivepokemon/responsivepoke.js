function listingpokes(){
    for (var x = 1; x <= 151; x++){
        $('#main').append('<img id = '+ [x] +' src="http://pokeapi.co/media/img/'+[x]+'.png">' )
    }
}
function pokedesc(){
    var html_str = "";
    html_str += "<h4>Name</h4>";
    html_str += "<ul>";
    for (var i = 0; i < res.types.length; i++){
        html_str += "<li>" + res.types[i].name + "</li>";
    }
    html_str += "</ul>";
    $("#pokedex").html(html_str);
}
listingpokes();
$(document).ready(function(){
    listingpokes();
    $('img').on('click', function(){
        $('#pokedex').html("");
        var pokeurl = "https://pokeapi.co/api/v2/pokemon/";
        var pokeid =$(this).attr("id");
        pokeurl += pokeid;
        pokeurl += "/";
        
        $.get(pokeurl, function(res){
            $("#pokedex").append("<h1>" + res.name + "</h1>");
            $('#pokedex').append('<img src="http://pokeapi.co/media/img/'+ pokeid +'.png">');
            $('#pokedex').append("<h2> Types: </h2>")
            for (var q = 0; q < res.types.length; q++){
                $('#pokedex').append("<h3>" + res.types[q].type.name + "</h3>")
                };
            $("#pokedex").append("<h3> Height:" + res.height + "</h3>");
            $("#pokedex").append("<h3> Weight:" + res.weight + "</h3>");
            },'json') 
    })
})