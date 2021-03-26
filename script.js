const mesaBillar = (id, hrini, hrfn, total ) => {
    if(id.src.match('billarOff')){
        hrfn.innerHTML = "";
        total.innerHTML = "";
        
        const msegPorMin = 1000 * 60;
        const fecha = new Date();
        const fechaMseg = fecha.getTime();

        const intervalo = fechaMseg - fecha.getTime();
        
        const mins = Math.floor(intervalo / msegPorMin);
        intervalo = intervalo - (mins * msegPorMin);

        const seg = Math.floor(intervalo / 1000);

        hrini.innerHTML = mins + ":" + seg;
        id.src = "images/billarOn.png"
    } else {
        const msegPorMin = 1000 * 60;
        const fecha = new Date();
        const fechaMseg = fecha.getTime();

        const intervalo = fechaMseg - fecha.getTime();
        
        const mins = Math.floor(intervalo / msegPorMin);
        intervalo = intervalo - (mins * msegPorMin);

        const seg = Math.floor(intervalo / 1000);
        const precio = (parseInt(mins) * 50) + (parseInt(seg) * 0.8333); 

        hrfn.innerHTML = min + ":" + seg;
        total.innerHTML = "$" + precio;
        id.src = "images/billarOff.png";
    }   
}