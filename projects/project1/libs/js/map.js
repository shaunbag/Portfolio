
// create map and set the initial view
var mymap = L.map('mapid').setView([30, 0], 3);

// call to mapbox for layer
L.tileLayer('https://api.mapbox.com/styles/v1/{id}/tiles/{z}/{x}/{y}?access_token={accessToken}', {
    attribution: 'Map data &copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors, Imagery © <a href="https://www.mapbox.com/">Mapbox</a>',
    maxZoom: 18,
    id: 'mapbox/streets-v11',
    tileSize: 512,
    zoomOffset: -1,
    accessToken: 'pk.eyJ1Ijoic2hhdW5iYWciLCJhIjoiY2txcDI2OG1hMGQyNjJucWE1Zzh3NmpjbiJ9.l2bhNB6lBM19HrHWWoPrQg'
}).addTo(mymap);



// Latitude and Longitude variables taken from the map click/touch event
let lat;
let lng;
let country;
let countryCode;


//OpenCage ajax call -----------------------------------------------

function openCage(){
    $.ajax({
			url: "libs/php/opencage.php",
			type: 'POST',
			dataType: 'json',
			data: {
				lat: lat,
				lng: lng			
			},
			success: function(result) {						

				if (result.status.name == "ok") {

					console.log(result['content'][0]['components']['country']);
                    country = result['content'][0]['components']['country'];
                    countryCode = result['content'][0]['components']['country_code'];
                    $('.countryName').html(result['content'][0]['components']['country']);
                    $('#flag').attr('src', `https://www.countryflags.io/${countryCode}/flat/64.png`);
                    $('.lat').html(lat);
                    $('.lng').html(lng);
				}
			
			},
			error: function(jqXHR, textStatus, errorThrown) {
				console.log('error', jqXHR, textStatus, errorThrown);
            }
		}); 
}



//GeoNames country Data ajax call

/*function geoNames(){

        
    $.ajax({
        url: "libs/php/geoNames.php",
        type: 'POST',
        dataType: 'json',
        data: {
            code: code
            },
        success: function(result) {

            if (result.status.name == "ok") {
                
                $('.capital').html(result['data'][0]['capital']);
                $('.languages').html(result['data'][0]['languages']);
                $('.pop').html(result['data'][0]['population']);               

            }
        
        },
        error: function(jqXHR, textStatus, errorThrown) {
            console.log('error', jqXHR, textStatus, errorThrown)
        }
    }); 
}*/

// click/tap function for longitude and latitude 

function onMapClick(e) {

        lat = e.latlng['lat'];
        lng = e.latlng['lng'];     
        openCage();
        //geoNames();
}

mymap.on('click', onMapClick);

//show modal overlay on click of the map
mymap.on('click', function(e) {
    $('.modal').modal('show');
  });


//close the modal overlay using the cross button
$('.close').on('click', function(e) {
    $('.modal').modal('hide');
})
