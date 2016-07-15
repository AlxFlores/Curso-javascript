// Your code here!

var dibujo, canvas, t, b
function inicio() {
    //alert("marco");
    t = document.getElementById("usuario");
    b = document.getElementById("dibujalo");

   var colores = {
        negro: "#000000",
        azul: "#0000FF",
        verde: "#00FF00",
        blanco: "#FFFFFF",
        rojo: "#FF0000"
   }

elemento = document.getElementById("dibujo");

    lienzo = elemento.getContext("2d");

    b.addEventListener("click", grid);

 

    
   // marco(0, 0, 300, 300, lienzo, "#DD");
   //circulo(lienzo, colores.rojo);
   //grilla(0, 0, 300, 300, 30, lienzo, colores.negro);
   // circulo(lienzo, colores.rojo, colores.azul);
   
   // grillax(0, 0, 300, 300, 10, lienzo, colores.negro);
    //lienzo.lineTo(0, 300);
    //lienzo.lineTo(300, 300);
    //lienzo.lineTo(300, 0);
    //lienzo.lineTo(0, 0);

    //lienzo.stroke();
    //lienzo.beginPath();
    //lienzo.strokeStyle = "#00f";
    //lienzo.arc(150, 150, 100, Math.PI * 2, false)
    //lienzo.closePath();
    //lienzo.stroke();

}

function marco(iniciox, inicioy, finx, finy, objeto, color) {
    objeto.strokeStyle = color;
    objeto.moveTo(iniciox, inicioy);
    objeto.lineTo(iniciox, finy);
    objeto.lineTo(finx, finy);
    objeto.lineTo(finx, inicioy);
    objeto.lineTo(iniciox, inicioy);
    objeto.stroke();
    return;
}

function circulo(objeto1, color, coloresfill) {
    objeto1.beginPath();
    objeto1.strokeStyle = color;
    objeto1.arc(150, 150, 100, Math.PI * 2, false);
    objeto1.fillstyle = "red";
    objeto1.fill();
    objeto1.closePath();
    objeto1.stroke();
    return;
}



function grilla(iniciox, inicioy, finx, finy, divs, objeto, color) {
    objeto.strokeStyle = color;
    numdivs = Math.abs(iniciox - finx) / divs;

    var i;
    for (i = iniciox; i <= divs; i++) {
        objeto.beginPath();
        objeto.moveTo(i * numdivs, inicioy);
        objeto.lineTo(i * numdivs, finy);
        objeto.closePath();
        objeto.stroke();
    }

    for (i = inicioy; i <= divs; i++) {
        objeto.beginPath();
        objeto.moveTo(iniciox, i * numdivs);
        objeto.lineTo(finx, i * numdivs);
        objeto.closePath();
        objeto.stroke();
    }
    return;
}

function grillax(iniciox, inicioy, finx, finy, divs, color) {
    objeto = lienzo;
    objeto.strokeStyle = color;
    numdivs = Math.abs(iniciox - finx) / divs;

    var i;
    for (i = iniciox; i <= divs; i++) {
        objeto.beginPath();
        objeto.moveTo(i * numdivs, inicioy);
        objeto.lineTo(i * numdivs - numdivs, finy);
        objeto.lineTo(i * numdivs + numdivs, finy);
        objeto.closePath();
        objeto.stroke();
    }

    for (i = inicioy; i <= divs; i++) {
        objeto.beginPath();
        objeto.moveTo(iniciox, i * numdivs);
        objeto.lineTo(finx, i * numdivs + numdivs);
        objeto.lineTo(finx, i * numdivs - numdivs);
        objeto.closePath();
        objeto.stroke();
    }
    return;
}

function grid() {
    alert("marco");
    grillax(0, 0, 300, 300, 10, colores.negro)
}
