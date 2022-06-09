const URL = window.location.search;
const URLDATA = new URLSearchParams(URL);
const kursusASIDE = document.getElementById("kursusoplysninger");

kursusASIDE.insertAdjacentHTML("beforeend", `<br><p> ${URLDATA.get("kursusnavn")}</p>`);
kursusASIDE.insertAdjacentHTML("beforeend",`<br><p>Startdato: ${URLDATA.get("startdato")}</p>`);
kursusASIDE.insertAdjacentHTML("beforeend",`<br><p>Tidspunkt: ${URLDATA.get("tidspunkt")}</p>`);
kursusASIDE.insertAdjacentHTML("beforeend",`<br><p>Varighed: ${URLDATA.get("varighed")}</p>`);
kursusASIDE.insertAdjacentHTML("beforeend",`<br><br><h3>Pris i alt ${parseFloat(URLDATA.get("pris"))} `+`kr.</h3><p>Inkl. moms</p>`);

const FORMULAR = document.getElementById("formular");
FORMULAR.addEventListener("submit", function (e){
    e.preventDefault();
    sessionStorage.setItem("fornavn", document.getElementById("fornavn").value);
    sessionStorage.setItem("efternavn", document.getElementById("efternavn").value);
    sessionStorage.setItem("vejnavn", document.getElementById("vejnavn").value);
    sessionStorage.setItem("vejnr", document.getElementById("vejnr").value);
    sessionStorage.setItem("postnr", document.getElementById("postnr").value);
    sessionStorage.setItem("kursusnavn", URLDATA.get("kursusnavn"));
    sessionStorage.setItem("startdato", URLDATA.get("startdato"));
    sessionStorage.setItem("tidspunkt", URLDATA.get("tidspunkt"));
    sessionStorage.setItem("varighed", URLDATA.get("varighed"));
    sessionStorage.setItem("pris i alt", URLDATA.get("pris"));
    
    window.location.href = "kvittering.html";
})


fetch("https://api.dataforsyningen.dk/postnumre")
    .then(function (data) {
        return data.json();
    })
    .then(function(poster){
        const PBLISTE = document.getElementById("pbliste");
        for (const enpost of poster) {
            PBLISTE.insertAdjacentHTML("beforeend", "<option>"+ enpost.nr + " " + enpost.navn + "</option>");
        }
    })
    .catch(function (error){
        const PB = document.getElementById("postnr");
        PB.innerHTML = "Postnr og by ikke tilgængelige";
    })