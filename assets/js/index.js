$(document).ready(function(){
    
    $('#menu').click(function(){
        $(this).toggleClass('fa-times');
        $('header').toggleClass('toggle');
    });

    $(window).on('scroll load', function(){
        $('#menu').removeClass('fa-times');
        $('header').removeClass('toggle');

    })

    $('a[href*="#"]').on('click', function(e){
        e.preventDefault();
        $('html, body').animate({
            scrollTop : $($(this).attr('href')).offset().top
        },
            500,
            'linear'
        
        );
    });

});


//Météo
/* document.getElementById("weatherForm").addEventListener("submit", function(event) {
    event.preventDefault();
    
    let country = document.getElementById("countrySelect").value;
    let date = document.getElementById("dateInput").value;

    // Effectuer une requête AJAX vers l'API OpenWeatherMap
    let apiKey = "9d4d52da316483f49155c334afe3efd6";
    let apiUrl = "https://api.openweathermap.org/data/2.5/weather?q=" + country + "&appid=" + apiKey;

    let weatherResults = document.getElementById("weatherResults");
    weatherResults.innerHTML = "Chargement des informations météorologiques...";

    fetch(apiUrl)
      .then(response => response.json())
      .then(data => {
        // Utilisez les données reçues pour afficher les informations météorologiques
        weatherResults.innerHTML = "Informations météorologiques pour " + country + " le " + date + ":<br>";
        weatherResults.innerHTML += "Température : " + data.main.temp + " K<br>";
        weatherResults.innerHTML += "Conditions météorologiques : " + data.weather[0].description;
      })
      .catch(error => {
        weatherResults.innerHTML = "Une erreur s'est produite lors de la récupération des informations météorologiques.";
        console.error(error);
      });
  });

 */



const searchInput= document.querySelector('.search input');
const searchBtn= document.querySelector('.search button');
console.log(searchBtn);


async function getWeather(city){
    var res = await fetch(`https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=9d4d52da316483f49155c334afe3efd6&units=metric`);
    var data = await res.json();
    console.log(data);

    document.querySelector('.celcius').innerHTML = Math.round(data.main.temp) + "°c";
    document.querySelector('.city').innerHTML = data.name ;
    document.querySelector('.humidityP').innerHTML = Math.round(data.main.humidity) + "%";
    document.querySelector('.windS').innerHTML = Math.round(data.wind.speed) + "km/h";
}
searchBtn.addEventListener('click',()=>{
    getWeather(searchInput.value);
})
