function listingpokes(){
    for (var x = 1; x <= 151; x++){
        $('#main').append('<img src="http://pokeapi.co/media/img/'+[x]+'.png">' )
    }
}
listingpokes();
$(document).ready(function(){
    listingpokes();
})