function myFunction() {
    var x = document.getElementById(test);
    if (x.style.display === "block") {
      x.style.display = "none";
    } else {
      x.style.display = "block";
    }
  }

  let kurser = [];

  const kursus = "https://api.jsonbin.io/b/6285fe2025069545a33d2db1/12";
  async function getKurser() {
      const response = await fetch(kursus);
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

    //for of loop der kører for alle de bliver der er i vores database
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
      
            const link = klon.querySelector("a");

        //udfyldning af data til variablerne i templaten
        billedtag.src = kursus.billede;
        billedtag.alt = kursus.billedetekst;
        kursustitel.textContent = kursus.kursusnavn;
        startdato.textContent =  kursus.startdato;
        startdato.insertAdjacentHTML("afterbegin", '<img src="img/kalender.png" alt="kalender">')
        tidspunkt.textContent =  kursus.tidspunkt;
        tidspunkt.insertAdjacentHTML("afterbegin", '<img src="img/ur.png" alt="ur">')
        varighed.textContent = "varighed: " + kursus.varighed;
        varighed.insertAdjacentHTML("afterbegin", '<img src="img/timeglas.png" alt="timeglas">')
        ledigpladser.textContent = "ledige pladser: " + kursus.ledigpladser;
        ledigpladser.insertAdjacentHTML("afterbegin", '<img src="img/brugericon.png" alt="brugericon">')
        pris.textContent = "DKK " + kursus.pris;
         
        sektion.appendChild(klon);
    }
}
