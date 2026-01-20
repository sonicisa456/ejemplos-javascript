//alert("Calculadora JavaScript");

function Mostrar() {
    let numero1 = document.getElementById("numero1").value;
    let numero2 = document.getElementById("numero2").value;

    let resultado = 0; //variable para almacenar el resultado
    resultado = parseFloat(numero1) + parseFloat(numero2);

    let objResultado = document.getElementById("resultado"); //seleccionar el elemento donde se mostrará el resultado
    objResultado.innerHTML = resultado; //innerHTML permite insertar contenido HTML dentro de un elemento

    
}