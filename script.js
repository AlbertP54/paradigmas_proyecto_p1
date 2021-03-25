const mesaBillar = () => {
    let mesa = document.getElementById("mesa");

    if(mesa.src.match('billar apagado')) {
        mesa.src = "images/billar encendido.png";
    } else {
        mesa.src = "images/billar apagado.png";
    }
}