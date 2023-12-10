function calcularTiempo(){
    let tiempo /*Variable*/= new Date(); /*hora local del sistema*/
    let hora = tiempo.getHours();
    let minuto = tiempo.getMinutes();
    let segundo = tiempo.getSeconds();

    hora = hora <10 ? "0" + hora:hora;
    minuto = minuto <10 ? "0" + minuto:minuto;
    segundo = segundo<10 ? "0"+ segundo:segundo;

    let pantallaReloj = hora +  ":" + minuto + ":" + segundo;/*Concatenar*/
    let relojDigital = document.querySelector(".reloj");/*Guardar*/
    relojDigital.innerHTML = pantallaReloj;/*Insertar HTML, para que la info sea enviada*/
}

setInterval(calcularTiempo, 1000)
/*Llamar función y actualizar cada 1000 milisegundos*/