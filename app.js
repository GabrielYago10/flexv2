/**
 * APP PWA - Etanol x Gasolina 
 * @author Gabriel Yago
 */

// ===================================================
// Registro de service worker

// Se o navegador de internet suportar este recurso 
if('serviceWorker' in navigator) {
    navigator.serviceWorker
    .register('/sw.js')
    .then(() => {
        console.log("Service worker registrado!")
    })
}

// ===================================================


function calcular() {
    let gasolina = document.getElementById('gasolina').value
    let etanol = document.getElementById('etanol').value
    let KmGasolina = document.getElementById('kmGasolina').value
    let KmEtanol = document.getElementById('KmEtanol').value
    //Cálculo da vantagem 
    if (etanol < (KmEtanol / KmGasolina) * gasolina) { 
        document.getElementById('status').src = "img/etanol.png"
    } else {
        document.getElementById('status').src = "img/gasolina.png"
    }
}
