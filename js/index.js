var linkBegin = '<a href="';
var linkEnd = '</a>';

//Facebook

$('#fb-cr').on('click', function() {
	var fbURL = "https://www.facebook.com/sharer/sharer.php?u=";
	var userURL = document.getElementById('fb-url').value;
	var fbEnd = '">Share on Facebook';

	$('#fb-uonly').text(fbURL + userURL);
	$('#fb-sl').text(linkBegin + fbURL + userURL + fbEnd + linkEnd);

});

//Twitter

$('#tw-cr').on('click', function() {
	var twURL = "https://twitter.com/home?status=";
	var userURL = document.getElementById('tweet').value;
	var twEnd = '">Share on Twitter';

	$('#tw-uonly').text(twURL + userURL);
	$('#tw-sl').text(linkBegin + twURL + userURL + twEnd + linkEnd);

});

//Google Plus

$('#gp-cr').on('click', function() {
	var gpURL = "https://plus.google.com/share?url=";
	var userURL = document.getElementById('gp-url').value;
	var gpEnd = '>Share on Google+';

	$('#gp-uonly').text(gpURL + userURL);
	$('#gp-sl').text(linkBegin + gpURL + userURL + gpEnd + linkEnd);

});