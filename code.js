// ESERCIZIO 7: Scrivi una funzione per cambiare il contenuto del tag h1 in qualcos'altro

function changeName () {
    let shopName = document.getElementById("shop-name");
    shopName.innerText = "L'H1 del mio e-commerce è cambiato!";
}

// ESERCIZIO 8: Scrivi una funzione per cambiare il colore di background della pagina

function changeBackColor () {
    let backColor = document.body;
    backColor.style.backgroundColor = "#b2bec3";
}

// ESERCIZIO 9: Scrivi una funzione per cambiare l'indirizzo presente nel futuro in un altro, fittizio

function changeAddress () {
    let shopAdd = document.getElementById("my-address"); 
    shopAdd.innerText = "via Della Porta, 2 - 00123 Milano";
}

// ESERCIZIO 10 Scrivi una funzione per aggiungere una classe CSS ad ogni link Amazon della tabella

function addClassTo () {
    let amazonLink = document.getElementsByTagName("a");
    for (let element of amazonLink) {
        element.classList.add("classe-aggiunta");
    }
}

// ESERCIZIO 11: Scrivi una funzione per aggiungere/togliere una classe CSS a tutte le immagini della tabella; questa classe deve modificare la visibilità/invisibilità dell'immagine

function addClassHidden () {
    let imageVis = document.getElementsByTagName("img");
    for (let element of imageVis) {
        element.classList.toggle("visibility"); 
        element.style.visibility = "hidden";      
    }
}
// ESERCIZIO 12: Scrivi una funzione per cambiare il colore del prezzo di ogni prodotto in uno differente, ogni volta che viene invocata

function changePriceColor () {
    let price = document.getElementsByClassName("price"); 
    for (let i = 0; i < price.length; i++) {
        let newColor = "#" + Math.floor(Math.random()*16777215).toString(16);
        price[i].style.color = newColor;
    } 
}