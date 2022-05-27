function mobileHeader() {
    var kurserUM = document.getElementById("kurserUM");
    var servicesUM = document.getElementById("servicesUM");
    var SUUM = document.getElementById("SUUM");
    var x = document.getElementById(test);
    if (x.style.display === "block") {
      x.style.display = "none";
    } else {
      kurserUM.style.display = "none";
      servicesUM.style.display = "none";
      SUUM.style.display = "none";
      x.style.display = "block";
    }
  }

  let kurser = [];

  const kursusinfo = "https://api.jsonbin.io/b/6285fe2025069545a33d2db1/12";
  async function getKurser() {
      const response = await fetch(kursusinfo);
      const data = await response.json();
      console.log(data);
      kurser = data.kursusliste;
      getKursus();

      }
      //den her skal være her for at der er en funktion så async funktion getKurser virker
getKurser();

function getKursus(){
    const sektion = document.getElementById("kursus_sektion");
    const skabelon = document.getElementById("skabelon_output");

    //for of loop der kører for alle de kurser der er i vores database
    for(const kursus of kurser){

        //skabes og udfyldes kursus kortende
        const klon = skabelon.content.cloneNode(true);   
        
        const kursustitel = klon.querySelector(".kursusnavn");
        const billedtag = klon.querySelector("img");
        const startdato = klon.querySelector(".startdato");
        const tidspunkt = klon.querySelector(".tidspunkt");
        const varighed = klon.querySelector(".varighed");
        const ledigpladser = klon.querySelector(".ledigpladser");
        const pris = klon.querySelector(".pris");
      
        //udfyldning af data til variablerne i templaten
        billedtag.src = kursus.billede;
        billedtag.alt = kursus.billedetekst;
        kursustitel.textContent = kursus.kursusnavn;
        startdato.textContent =  kursus.startdato;
        startdato.insertAdjacentHTML("afterbegin", '<img src="img/kalender.png" alt="kalender">');
        tidspunkt.textContent =  kursus.tidspunkt;
        tidspunkt.insertAdjacentHTML("afterbegin", '<img src="img/ur.png" alt="ur">');
        varighed.textContent = "varighed: " + kursus.varighed;
        varighed.insertAdjacentHTML("afterbegin", '<img src="img/timeglas.png" alt="timeglas">');
        ledigpladser.textContent = "ledige pladser: " + kursus.ledigpladser;
        ledigpladser.insertAdjacentHTML("afterbegin", '<img src="img/brugericon.png" alt="brugericon">');
        pris.textContent = "DKK " + kursus.pris;
         
        sektion.appendChild(klon);
    }
}
//Slideshow
function gaaFremad() {
  if (billedIndeks < billedliste.length - 1) {
      billedIndeks++;
  } else {
      billedIndeks = 0;
  }

  const slidefoto = document.getElementById("slidebillede");
  slidefoto.src = billedliste[billedIndeks];
}

function gaaTilbage() {
  if (billedIndeks > 0) {
      billedIndeks--;
  } else {
      billedIndeks = billedliste.length - 1;
  }

  const slidefoto = document.getElementById("slidebillede");
  slidefoto.src = billedliste[billedIndeks];
}

const billedliste = ["/img/Galleri-signetring.png", "/img/Galleri-torshammer.png", "/img/Galleri-vielsesringe.png"]; //Global variabel
let billedIndeks = 0; //Global variabel

const fremad = document.getElementById("frem");
fremad.addEventListener("click", function () {
  gaaFremad();
});

const tilbage = document.getElementById("tilbage");
tilbage.addEventListener("click", function () {
  gaaTilbage();
});

// Geolocation og ruteplanlægning
function geoFindMe() {

  const status = document.querySelector('#status');
  const mapLink = document.querySelector('#map-link');

  mapLink.href = '';
  mapLink.textContent = '';

  function success(position) {
    const latitude  = position.coords.latitude;
    const longitude = position.coords.longitude;

    status.textContent = '';
    mapLink.href = `https://www.google.com/maps/dir/?api=1&origin=${latitude}/${longitude}&destination=56.15439/10.20335&travelmode=driving`;
    mapLink.textContent = `Vis min rute`;
  }

  function error() {
    status.textContent = 'Vi kunne ikke finde din placering';
  }

  if(!navigator.geolocation) {
    status.textContent = 'Din browser understøtter ikke geolocation';
  } else {
    status.textContent = 'Finder…';
    navigator.geolocation.getCurrentPosition(success, error);
  }

}

document.querySelector('#find-mig').addEventListener('click', geoFindMe);
