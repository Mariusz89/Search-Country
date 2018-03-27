var url = 'https://restcountries.eu/rest/v1/name/';
var countriesList = $('#countries');

$('#search').click(searchCountries);

function searchCountries() {
  var countryName = $('#country-name').val();
  if(!countryName.length) countryName = 'Poland';
  $.ajax({
  	url: url + countryName,
  	method: 'GET',
    success: showCountriesList
  });
}

function showCountriesList(resp) {
  $('h2').css('display', 'block');
  countriesList.empty();
  resp.forEach(function(item){
    $('<li>').text(item.name).appendTo(countriesList).addClass("first");
    $('<li>').text('capital: ' + item.capital).appendTo(countriesList);
    $('<li>').text('languages: ' + item.languages).appendTo(countriesList);
    $('<li>').text('population: ' + item.population).appendTo(countriesList);
    $('<li>').text('currency: ' + item.currencies).appendTo(countriesList);
    $('<li>').text('region: ' + item.region).appendTo(countriesList);
  });
}


   











