/**
 * APP PWA - Etanol x Gasolina 
 * @author Gabriel Yago
 */

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
