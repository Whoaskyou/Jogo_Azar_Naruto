let wheel = document.getElementById('whell');
let btn = document.getElementById("center");
const points = document.getElementById('points');

// defenir bases de api
const api = {
    key: "097c20560b8a2e5cca804f6978d0732b",
    base: "https://api.openweathermap.org/data/2.5/",
    lang: "pt_br",
    units: "metric"
}

// criar um array com varios objetos que seram usados na maquina
var arrayObj = [
    {
        id: '1',
    },
    {
        id: '2',
    },
    {
        id: '3',
    },
    {
        id: '4',
    },
    {
        id: '5',
    },
    {
        id: '6',
    },
    {
        id: '7',
    },
    {
        id: '8',
    }
]

// pedir a localizaçao do jogador 
window.addEventListener("load", () => {

    if(navigator.geolocation){                 //SetPosition pede uma unica vez a localizaçao se usar watchPosicion mesmo que o player s mova a localizaçao sera aletara
        navigator.geolocation.getCurrentPosition(setPosition, showError);
    }
    else {
        alert('navegador não suporta geolozalicação');
    }

    //funçao para guradar as cordenadas do player
    function setPosition(pos){
        let long = pos.coords.longitude;
        let lat = pos.coords.latitude;
        coordResultado(lat, long);
    }
    function showError(error) {
        alert('Da F5 e aceita a localizaçao');
    } 
})



//para informar a nossa api da nossa localizaçao e esta enviar a nossa tempratura
function coordResultado(lat, long){
    fetch(`${api.base}weather?lat=${lat}&lon=${long}&lang=${api.lang}&units=${api.units}&APPID=${api.key}`)
        .then((response) =>{
            
            return response.json();
        })
        .then(data => {
            //guardar valor enviados pela api em variaveis
            const {feels_like} = data.main;
			console.log(feels_like)

			btn.addEventListener('click', ()=>{
				const categoryArray = Math.floor(Math.random(feels_like) * arrayObj.length);
				spin(arrayObj[categoryArray])
			})

        })

}



function spin(respostaArray){

    if(respostaArray == arrayObj[0]){
        wheel.style.transform = "rotate(" + 1440 + "deg)";
		points.innerHTML = '1014';
        setTimeout(function(){
            window.location = "Hinata.html";
        },5700);

    }
    if(respostaArray == arrayObj[1]){
        wheel.style.transform = "rotate(" + 1755 + "deg)";
        points.innerHTML = '4000';
        setTimeout(function(){
            window.location = "itachi.html";
            document.getElementById("card2").style.visibility = "visible";
        },5700);
    }
    if(respostaArray == arrayObj[2]){
        wheel.style.transform = "rotate(" + 1355  + "deg)";
		points.innerHTML = '3700';
        setTimeout(function(){
            window.location = "sasuke.html";
            document.getElementById("card6").style.visibility = "visible";
        },5700);;
    }
    if(respostaArray == arrayObj[3]){
        wheel.style.transform = "rotate(" + 1310  + "deg)";
		points.innerHTML = '3333';
        setTimeout(function(){
            window.location = "naruto.html";
            document.getElementById("card").style.visibility = "visible";
        },5700);
    }
    if(respostaArray == arrayObj[4]){
        wheel.style.transform = "rotate(" + 900 + "deg)";
		points.innerHTML = '5678';
        setTimeout(function(){
            window.location = "kaguya.html";
            document.getElementById("card4").style.visibility = "visible";
        },5700);
    }
    if(respostaArray == arrayObj[5]){
        wheel.style.transform = "rotate(" + 1930 + "deg)";
		points.innerHTML = '6800';
        setTimeout(function(){
            window.location = "kakashi.html";
            document.getElementById("card3").style.visibility = "visible";
        },5700);
    }
    if(respostaArray == arrayObj[6]){
        wheel.style.transform = "rotate(" + 1170 + "deg)";
		points.innerHTML = '1000';
        setTimeout(function(){
            window.location = "sakura.html";
            document.getElementById("card5").style.visibility = "visible";
        },5700);
    }
    if(respostaArray == arrayObj[7]){
        wheel.style.transform = "rotate(" + 2200 + "deg)";
		points.innerHTML = '1900';
        setTimeout(function(){
            window.location = "shikamaru.html";
            document.getElementById("card8").style.visibility = "visible";
        },5700);
    }

    
}