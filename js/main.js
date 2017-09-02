 


   var array_img =['img/panda1.jpg','img/panda2.jpg','img/panda3.png','img/panda4.png',
   'img/panda5.jpg','img/panda6.jpg','img/panda1.jpg','img/panda2.jpg','img/panda3.png',
   'img/panda4.png','img/panda5.jpg','img/panda6.jpg','img/fondo.png'];


    var tablero = document.getElementById('tablero');
    var p=0;
    var tabla = document.createElement('table');
    tabla.border = "0";
    for (var i = 0; i < 3; i++) {
        var fila = document.createElement('tr');

        for (var j = 0; j < 4; j++) {            
            var celda = document.createElement('td');
            celda.setAttribute('id','panditas');
            celda.setAttribute('class','cel');
            //creamos una imagen con fondo negro que estaran dentro de los 'td'
            var fondoRayo = document.createElement('img');
            fondoRayo.setAttribute('id','negro');

            //evento onclick para ocultar la imagen
            fondoRayo.src = 'img/fondo.png';
            fondoRayo.setAttribute('onclick','ocultar(this)');
            celda.appendChild(fondoRayo);

            // contiene las imagenes de los ositos
            var imagen = document.createElement("img");
            imagen.src = array_img[p];
            p++;

            celda.appendChild(imagen);

            fila.appendChild(celda);
           
        }
        tabla.appendChild(fila);
    }
    tablero.appendChild(tabla);


//funcion que oculta la imagen
var obj1 = undefined;
var  obj2 = undefined;
var numOfClicks = 1;
function ocultar(n){
 
   if (numOfClicks == 2) {
        n.style.visibility='hidden';

        obj2 = n;
        var  img1 = $(obj1).parent().children()[1].src;
        var  img2 =  $(obj2).parent().children()[1].src;
        
        if ( img1.localeCompare (img2) != 0 ) {

            setTimeout (function () {
                obj1.style.visibility ='visible';
                obj2.style.visibility ='visible';
                obj1 = undefined;
                obj2 = undefined;

            }, 500); 
        }
        else {
            obj1.nextSibling.style.visibility='visible';
            obj2.nextSibling.style.visibility='visible';
            obj1 = -1;
            obj2 = -2;
            //$(obj1).parent().hide();
            //$(obj2).parent().hide();              
        } 
        numOfClicks = 1;

    }
    else if (numOfClicks == 1){
        n.style.visibility='hidden';
        obj1 = n;
        numOfClicks++;
    }

}










 