<?php

	// remove for production

	ini_set('display_errors', 'On');
	error_reporting(E_ALL);


	$executionStartTime = microtime(true);
	
    $url= 'https://api.opencagedata.com/geocode/v1/json?q=' . $_REQUEST['lat'] . '%2C%20' . $_REQUEST['lng'] . '&key=dc068c65f5344e3cb1f27ea163d6adb3&language=en&pretty=1';
	//$url= 'http://api.geonames.org/postalCodeSearchJSON?postalcode=' . $_REQUEST['postcode'] . '&maxRows=10&username=shaunmcelhinney';
	
	$ch = curl_init();
	curl_setopt($ch, CURLOPT_SSL_VERIFYPEER, false);
	curl_setopt($ch, CURLOPT_RETURNTRANSFER, true);
	curl_setopt($ch, CURLOPT_URL,$url);

	$result=curl_exec($ch);

	curl_close($ch);

	$decode = json_decode($result,true);	

	$output['status']['code'] = "200";
	$output['status']['name'] = "ok";
	$output['status']['description'] = "success";
	$output['status']['returnedIn'] = intval((microtime(true) - $executionStartTime) * 1000) . " ms";
	$output['content'] = $decode['results'];
	
	header('Content-Type: application/json; charset=UTF-8');

	echo json_encode($output); 

?>