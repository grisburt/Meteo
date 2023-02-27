const APIKEY = 'a84ec3403ec1ab892de9baf534e31bfe';

let apiCall = function (city) {

    let url = 'https://api.openweathermap.org/data/2.5/weather?q='+city+'&appid='+APIKEY+'&units=metric&lang=fr';
    

fetch(url).then((response) => 
    response.json().then((data) => {
        console.log(data);
       let sky = data.weather[0].id;    
        console.log(sky);

        switch (true){
            case (sky >= 200 && sky <233):
                document.querySelector('#ciel').innerHTML = '<img src="http://openweathermap.org/img/wn/11d@2x.png">';
            break;
            case (sky >= 300 && sky <322):
                document.querySelector('#ciel').innerHTML = '<img src="http://openweathermap.org/img/wn/09d@2x.png">';
            break;
            case (sky >= 500 && sky <505):
                document.querySelector('#ciel').innerHTML = '<img src="http://openweathermap.org/img/wn/10d@2x.png">';
            break;
            case (sky == 511):
                document.querySelector('#ciel').innerHTML = '<img src="http://openweathermap.org/img/wn/13d@2x.png">';
            break;
            case (sky >= 520 && sky <533):
                document.querySelector('#ciel').innerHTML = '<img src="http://openweathermap.org/img/wn/09d@2x.png">';
            break;
            case (sky >= 600 && sky <623):
                document.querySelector('#ciel').innerHTML = '<img src="http://openweathermap.org/img/wn/13d@2x.png">';
            break;
            case (sky >= 701 && sky <782):
                document.querySelector('#ciel').innerHTML = '<img src="http://openweathermap.org/img/wn/50d@2x.png">';
            break;
            case (sky == 800):
                document.querySelector('#ciel').innerHTML = '<img src="http://openweathermap.org/img/wn/01d@2x.png">';
            break;
            case (sky == 801):
                document.querySelector('#ciel').innerHTML = '<img src="http://openweathermap.org/img/wn/02d@2x.png">';
            break;
            case (sky == 802):
                document.querySelector('#ciel').innerHTML = '<img src="http://openweathermap.org/img/wn/03d@2x.png">';
            break;
            case(sky >=803 && sky < 805):
                document.querySelector('#ciel').innerHTML = '<img src="http://openweathermap.org/img/wn/04d@2x.png">';
            break;
        }
        document.querySelector('#city').innerHTML = data.name;
        document.querySelector('#temp').innerHTML = "<i class='fas fa-thermometer-half'></i>" + data.main.temp +'°C';
        document.querySelector('#wind').innerHTML = "<i class='fas fa-wind'></i>" + data.wind.speed + 'm/s';
        document.querySelector('#humide').innerHTML = "<i class='fas fa-tint'></i>" + data.main.humidity + '%';
    })
)
.catch((err) => console.log('erreur : ' + err));
};

document.querySelector('form').addEventListener('submit', function (e) {
    e.preventDefault();
    let ville = document.querySelector('#inputcity').value;

    apiCall(ville);
});