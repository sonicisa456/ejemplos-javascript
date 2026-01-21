//alert("Calculadora JavaScript");

function Mostrar(e) {
    let numero1 = parseInt(document.getElementById("numero1").value);
    let numero2 = parseInt(document.getElementById("numero2").value);

    let resultado = 0; //variable para almacenar el resultado
    let operacion = e.target.id; //capturar el id del botón que se presionó

    if (operacion == "suma"){
        resultado = numero1 + numero2;
    }
    else if (operacion == "resta"){
        resultado = numero1 - numero2;
    }
    else if (operacion == "multiplica"){
        resultado = numero1 * numero2;
    }
    else if(operacion == "divide"){
        resultado = numero1 / numero2;
    }
    else{
        alert("Operacion en progreso...");
    }

    let result = document.getElementById("resultado"); //seleccionar el elemento donde se mostrará el resultado
    result.innerHTML = resultado; //innerHTML permite insertar contenido HTML dentro de un elemento

    
}
//
let butones = document.getElementById("btns");
butones.addEventListener("click", Mostrar);