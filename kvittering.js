const kursusASIDE = document.getElementById("kursusoplysninger");


kursusASIDE.insertAdjacentHTML("beforeend", `<br><p>` + sessionStorage.getItem("kursusnavn")+`</p>`);
kursusASIDE.insertAdjacentHTML("beforeend",`<br><p>Startdato: ${sessionStorage.getItem("startdato")}</p>`);
kursusASIDE.insertAdjacentHTML("beforeend",`<br><p>Tidspunkt: ${sessionStorage.getItem("tidspunkt")}</p>`);
kursusASIDE.insertAdjacentHTML("beforeend",`<br><p>Varighed: ${sessionStorage.getItem("varighed")}</p>`);
kursusASIDE.insertAdjacentHTML("beforeend",`<br><br><h3>Pris i alt ${parseFloat(sessionStorage.getItem("pris i alt"))} `+`kr.</h3><p>Inkl. moms</p>`);


const OPLYSNINGER = document.getElementById("formular");

OPLYSNINGER.insertAdjacentHTML("beforebegin", "<br><p>Fornavn: " + sessionStorage.getItem("fornavn")+ "</p>");
OPLYSNINGER.insertAdjacentHTML("beforebegin", "<br><p>Efternavn: " + sessionStorage.getItem("efternavn")+ "</p>");
OPLYSNINGER.insertAdjacentHTML("beforebegin", "<br><p>Adresse: " + sessionStorage.getItem("vejnavn") + " " + sessionStorage.getItem("vejnr")+ "</p>");
OPLYSNINGER.insertAdjacentHTML("beforebegin", "<br><p>Postnr: " + sessionStorage.getItem("postnr")+ "</p>");

const FORMULAR = document.getElementById("formular");
FORMULAR.addEventListener("submit", function (e){
    e.preventDefault();
    window.print();
})