/* CURRENTLY IN: javascript/main.js */

// $(document).ready(functio

$('.js-lightbox-open').on('click', function() {
	$('.backdrop , .lightbox').css('display','block');
	});

$('.js-close').on('click', function(){
	$('.backdrop , .lightbox').css('display','none');
    console.log($("#photos"),'yooooo');
    $( "#photos" ).empty();


});
// change the color option
// $('li').on('click', function(){
//     $('a').css('background-color',  'rgba(0,0,0,.5)')
//     $('a').css('color', 'rgba(245, 245, 245, 0.8)')
// }); 

// for (var i = 4; i>= 0; i--){
// 	var img = "images/Travel"+i+".png"
// 	$( ".homepage__container" ).append( "<div style='background-image: src="+img+"' class='homepage__images'></div>" );

// } 





/* Instagram API */
var accessToken = '231393313.6c7e2bc.a3c3fce703134a71a4ae467db5124168';
var clientId = '3fb6b6731c264f76b033d3b6135e11a0';

var instaSearch = InstagramAPI.init( accessToken, clientId);






// google map API 

/* CURRENTLY IN: javascript/main.js */

function initMap() {}

var APIKEY = 'AIzaSyBgmaIJRDjUXihHRhPYVE7c9M50JBAsasg';
var APIURL = 'https://maps.googleapis.com/maps/api/js?key='+APIKEY+'&callback=initMap'
DepManager(APIURL,'google')
.then(function() {
    var map = GMap.init( 'map', {
        center: {lat: 40.7127, lng: -74.0059},
        zoom: 14
    })
    .bindEventHandler('click', function( e, methods, map, options, mapSelector ) {
        // wont show up in actual console, fyi
        var latLng = methods.getEventLatLng( e );
        var coord = {
        	lat: latLng.lat,
        	lng: latLng.lng,
        	distance:200
        }
        //document.querySelector('.coords').innerHTML = '<div><b>LAT</b> ' + latLng.lat + ',</div><div><b>LNG</b> ' + latLng.lng + '</div>';
        
        //Instagram Function to take coordinates from Google Map 
        // and input into Instagram API 
        instaSearch.endpoint(
    'media/search', coord

    // {
    //     lat: 40.707840135059854,
    //     lng: -74.01120185852051,
    //     distance: 200
    // },
    ,
    function(data){
    	console.log('fadfdfa', data);


        for(x in data.data){

     
            $('#photos').append('<li class=instacontainer><img class=instaphotos style=background-image": src="'+data.data[x].images.low_resolution.url+'"></li>');

        }

            $('.backdrop , .lightbox').css('display','block');
    },
    function(error){
        console.log('failed ', error);
    }
);





    })
    .bindEventHandler('dragend', function( e, methods, map ) {
        var newCenter = methods.getCenter( map );
        document.querySelector('.drags').innerHTML = '<b>New Center</b> ' + newCenter.lat() + ', ' + newCenter.lng();
    });
});
