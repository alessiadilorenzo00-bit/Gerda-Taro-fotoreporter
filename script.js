// --- Funzione principale di filtraggio ---
function filtraGriglia(categoria) {
  let card, i;
  // Seleziona tutte le card che hanno la classe base 'foto-card'
  card = document.getElementsByClassName("foto-card");
  // Se la categoria scelta è 'tutti', resettiamo il filtro per mostrare tutto
  if (categoria === "tutti") {
    categoria = "";
  }
  // Ciclo su tutte le card per decidere se mostrarle o nasconderle
  for (i = 0; i < card.length; i++) {
    rimuoviClasse(card[i], "mostra"); // Nascondi preventivamente
    // Se la card ha la classe della categoria richiesta, aggiungi 'mostra'
    if (card[i].className.indexOf(categoria) > -1) {
      aggiungiClasse(card[i], "mostra");
    }
  }
}

// --- Funzioni di supporto per gestire le classi CSS ---
// Aggiunge una classe a un elemento senza duplicarla
function aggiungiClasse(elemento, nome) {
  let i, arr1, arr2;
  arr1 = elemento.className.split(" ");
  arr2 = nome.split(" ");
  for (i = 0; i < arr2.length; i++) {
    if (arr1.indexOf(arr2[i]) == -1) {
      elemento.className += " " + arr2[i];
    }
  }
}

// Rimuove una classe da un elemento
function rimuoviClasse(elemento, nome) {
  let i, arr1, arr2;
  arr1 = elemento.className.split(" ");
  arr2 = nome.split(" ");
  for (i = 0; i < arr2.length; i++) {
    while (arr1.indexOf(arr2[i]) > -1) {
      arr1.splice(arr1.indexOf(arr2[i]), 1);
    }
  }
  elemento.className = arr1.join(" ");
}

// --- Gestione del bottone "attivo" ---
// Aspetta che la pagina sia caricata per attaccare gli eventi ai bottoni
document.addEventListener("DOMContentLoaded", function() {
  // Inizializza la griglia mostrando tutto all'avvio
  filtraGriglia("tutti");

  let contenitoreBottoni = document.querySelector(".contenitore-filtri");
  let bottoni = contenitoreBottoni.getElementsByClassName("btn-filtro");

  for (let i = 0; i < bottoni.length; i++) {
    bottoni[i].addEventListener("click", function() {
      let attuale = document.getElementsByClassName("attivo");
      // Se c'è già un bottone attivo, rimuovi la classe
      if (attuale.length > 0) {
        attuale[0].className = attuale[0].className.replace(" attivo", "");
      }
      // Aggiungi la classe 'attivo' al bottone appena cliccato
      this.className += " attivo";
    });
  }
});


// Carosello int
document.addEventListener("DOMContentLoaded", () => {
  // --- CONFIGURAZIONE CAROSELLO ---
  const TEMPO_ATTESA = 3500; // 5 secondi tra una slide e l'altra
  let timerAutoplay;

  // Seleziona gli elementi necessari
  const contenitoreCarosello = document.querySelector('.carosello-unico-contenitore');
  // Seleziona tutti i radio button che controllano il carosello
  const slidesRadios = document.querySelectorAll('.carosello-unico-input');

  // Funzione che passa alla slide successiva
  const vaiAllaProssimaSlide = () => {
    // Trova l'indice della radio attualmente selezionata
    let indiceAttivo = -1;
    slidesRadios.forEach((radio, index) => {
      if (radio.checked) {
        indiceAttivo = index;
      }
    });

    // Calcola il prossimo indice (se è l'ultimo, torna a 0)
    let prossimoIndice = (indiceAttivo + 1) % slidesRadios.length;

    // Seleziona il prossimo radio button
    slidesRadios[prossimoIndice].checked = true;
  };

  // Avvia il timer
  const avviaAutoplay = () => {
    // Pulisce eventuali timer precedenti per evitare conflitti
    clearInterval(timerAutoplay);
    timerAutoplay = setInterval(vaiAllaProssimaSlide, TEMPO_ATTESA);
  };

  // Ferma il timer
  const fermaAutoplay = () => {
    clearInterval(timerAutoplay);
  };

  // --- AVVIO ---
  // Controlla se il carosello esiste nella pagina prima di avviare
  if (contenitoreCarosello && slidesRadios.length > 0) {
    avviaAutoplay();

    // Opzionale: mette in pausa quando il mouse è sopra il carosello
    contenitoreCarosello.addEventListener('mouseenter', fermaAutoplay);
    // Riavvia quando il mouse esce
    contenitoreCarosello.addEventListener('mouseleave', avviaAutoplay);

    // Opzionale: Riavvia il timer se l'utente cambia slide manualmente
    slidesRadios.forEach(radio => {
        radio.addEventListener('change', avviaAutoplay);
    });
  }
});

// MAPPA
var map = L.map('map').setView([39.866945398200755, -4.030844735808581], 6);
L.tileLayer('https://tile.openstreetmap.org/{z}/{x}/{y}.png', {
    maxZoom: 19,
    attribution: '&copy; <a href="http://www.openstreetmap.org/copyright">OpenStreetMap</a>'
}).addTo(map);

var circle = L.circle([42.13365,-0.41396], {
    color: 'red',
    fillColor: '#f03',
    fillOpacity: 0.5,
    radius: 15000
}).addTo(map);

var circle = L.circle([40.42270063140554, -3.7572008068886636], {
    color: 'red',
    fillColor: '#f03',
    fillOpacity: 0.5,
    radius: 15000
}).addTo(map);

var circle = L.circle([37.99771470905897, -4.769371158024527], {
    color: 'red',
    fillColor: '#f03',
    fillOpacity: 0.5,
    radius: 15000
}).addTo(map);

var circle = L.circle([40.77679213294413, -2.9940683401637878], {
    color: 'red',
    fillColor: '#f03',
    fillOpacity: 0.5,
    radius: 15000
}).addTo(map);

var circle = L.circle([40.40484786325533, -3.999062824649465], {
    color: 'red',
    fillColor: '#f03',
    fillOpacity: 0.5,
    radius: 15000
}).addTo(map);

var circle = L.circle([40.94196149787937, -4.11220208696344], {
    color: 'red',
    fillColor: '#f03',
    fillOpacity: 0.5,
    radius: 15000
}).addTo(map);

var circle = L.circle([41.50917622521796, -0.917440479312429], {
    color: 'red',
    fillColor: '#f03',
    fillOpacity: 0.5,
    radius: 15000
}).addTo(map);

var circle = L.circle([39.46042763202405, -0.3452569695908475], {
    color: 'red',
    fillColor: '#f03',
    fillOpacity: 0.5,
    radius: 15000
}).addTo(map);